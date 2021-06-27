/**
 * @format
 */
import { makeAutoObservable, runInAction } from "mobx"
import compoundStore from "./compound.store"
import {importCollateral, importDebt} from "../lib/compound.interface"
import {wApiAction} from "../lib/compound.util"
import userStore from "./user.store"
import CToken, { CoinStatusEnum } from "../lib/compound.util"
import Web3 from "web3"
const {BN, fromWei} = Web3.utils

export const MigrationStatus = {
    none: 'none',
    pending: 'pending',
    success: 'success',
    failed: 'failed'
}

class CompoundMigrationStore {

    status = MigrationStatus.none
    hash = ""
    validationErr = ""
    supply = []
    borrow = []
    constructor (){
        makeAutoObservable(this)
    }

    setValidationError = (errMsg) => {
        this.validationErr = errMsg
        setTimeout(()=> {
            runInAction(() => {
                this.validationErr = ""
            })
        }, 5000)
    }

    setStatus = (status) => this.status = status

    onHash = (hash) => this.hash = hash

    /**
     * cUser supply and borrow for migration
     */
    getSupplyAndBorrow = ()=> {
        
        const supply = []
        const borrow = []
        const {userInfo} = compoundStore
        // todo go over cuser 
        Object.keys(userInfo.cUser).forEach(address=> {
            const importInfo = userInfo.importInfo[address]
            const [data, info] = [userInfo.cUser[address], userInfo.tokenInfo[address]]
            const coin = new CToken(address, data, info, importInfo)
            if(coin.isCoinStatus(CoinStatusEnum.borrowed)){
                borrow.push(coin)
            }
            if(coin.isCoinStatus(CoinStatusEnum.deposited)){
                supply.push(coin)
            }
        })

        this.supply = supply
        this.borrow = borrow

        return {
            supply,
            borrow
        }
    }

    validateSupplyHasAllowance = (supply) => {
        const supplyWithoutAllowance = supply.filter(coin => !coin.hasMigrationAllowance())
        if(supplyWithoutAllowance.length > 0){
            this.setValidationError("must unlock all collateral before import")
            return false
        }
        return true
    }

    validateBorrowCanBeCovered = (borrow) => {
        
        const borrowedAmountInUsd = borrow.reduce((acc, coin)=> {
            return acc + parseFloat(coin.borrowedUsd)
        }, 0)

        const [ETH] = Object.values(compoundStore.coinMap).filter(({symbol}) => symbol == "ETH")
        const [{availableEthBalance}] = Object.values(compoundStore.userInfo.importInfo)
        const flashLoanCovrage = ETH.getUnderlyingBalanceInUsd(fromWei(availableEthBalance))
        if(borrowedAmountInUsd > (parseFloat(flashLoanCovrage) * 0.5)){
            this.setValidationError("flash loan liquidity is currently not enough to support the import of your account")
            return false
        }
        return true
    }

    migrateFromCompound = async (supply, borrow, closeModal) => {
        this.setStatus(MigrationStatus.pending)
        try{
            const { web3, networkType, user } = userStore
            const supplyCTokens = supply.map(coin=> coin.tokenInfo.ctoken)
            const supplyCTokensUnderlying = supply.map(coin=> coin.tokenInfo.underlying)
            const borrowCTokens = borrow.map(coin=> coin.tokenInfo.ctoken)
            const borrowCTokensUnderlying = borrow.map(coin=> coin.tokenInfo.underlying)
            let txPromise
            if(borrow.length){
                const [{availableEthBalance}] = Object.values(compoundStore.userInfo.importInfo)
                const flashLoanMax = (new BN(availableEthBalance).mul(new BN(9)).div(new BN(10))).toString() // 90%
                txPromise = importDebt(web3, networkType, supplyCTokens, supplyCTokensUnderlying, borrowCTokens, borrowCTokensUnderlying, flashLoanMax)
            } else {
                txPromise = importCollateral(web3, networkType, supplyCTokens)
            }
            const promise = wApiAction(txPromise, user, web3, 0, (hash) => {
                this.onHash(hash)
                closeModal()
            })
            await promise
            this.setStatus(MigrationStatus.success)
        } catch (err){
            console.log(err)
            this.setStatus(MigrationStatus.failed)
        }
        finally {
            setTimeout(()=> {
                this.onHash("")
                this.setStatus(MigrationStatus.none)
            },5000) 
        }
    }
}

export default new CompoundMigrationStore()
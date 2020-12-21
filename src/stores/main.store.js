import { makeAutoObservable } from "mobx"
import * as B from "../lib/bInterface"
import * as ApiHelper from "../lib/ApiHelper"
import Web3 from "web3"
import axios from "axios"
const BP_API = "https://bp-api.bprotocol.workers.dev"

const toCommmSepratedString = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

/**
 * Main Store is desigend for general purpose app data
 */
class MainStore {

    originalInfoResponse = null
    generalInfo = null
    jarBalanceEth = "--,---" //  default
    jarBalanceUsd = 10000 // dafult
    tvlUsd = "--,---" //  default
    tvlEth = "--,---" //  default
    tvlDai = "--,---"
    cdpi = 0
    spotPrice = null
    makerPriceFeedPrice = ""
    makerPriceFeedPriceNextPrice = ""
    defiexploreLastUpdate = ""
    ethMarketPrice = ""

    constructor (){
        makeAutoObservable(this)
        this.fetchGeneralDappData()
    }

    async fetchGeneralDappData () {
        await this.fetchJar()
        await this.fetchTvl() // tvl requires the spot price
        await this.fetchPrices()
    }

    async fetchJar () {
        try{
            const web3 = new Web3(BP_API)
            let info = await B.getUserInfo(web3, "1", "0x0000000000000000000000000000000000000000")
            this.originalInfoResponse = info
            info = ApiHelper.Humanize(info, web3);
            this.spotPrice = info.miscInfo.spotPrice
            this.jarBalanceEth = parseFloat(info.userRatingInfo.jarBalance).toFixed(1);
            this.jarBalanceUsd = parseFloat(info.userRatingInfo.jarBalance * this.spotPrice).toFixed(0)
        }catch (err){
            console.error("failed to fatch jar amount")
        }
    }

    async fetchTvl () {
        try{
            const web3 = new Web3(BP_API)
            let info = await B.getStats(web3, "1")
            this.tvlEth = parseFloat(web3.utils.fromWei(info.eth)).toFixed(1)
            const tvlUsd = parseFloat(this.tvlEth * this.spotPrice).toFixed(1)
            this.tvlUsd = toCommmSepratedString(tvlUsd)
            this.tvlDai = parseFloat(web3.utils.fromWei(info.dai)).toFixed(1)
            this.cdpi = info.cdpi
        }catch (err){
            console.error("failed to fatch TVL")
        }
    }

    async fetchPrices () {
        try{
            const dataPromises = [
                axios.get('https://defiexplore.com/api/stats/globalInfo'),
                axios.get('https://api.coinmarketcap.com/data-api/v3/topsearch/rank')
            ]
            let [{data: data1}, {data: data2}] = await Promise.all(dataPromises)
            data1 = data1['tokenData']['ETH-A']
            this.makerPriceFeedPrice = parseFloat(data1.price).toFixed(2)
            this.makerPriceFeedPriceNextPrice = parseFloat(data1.futurePrice).toFixed(2)
            this.defiexploreLastUpdate = data1.updatedAt  
            this.coinMarketCapLastUpdate = data2.status.timestamp
            data2 = data2['data']['cryptoTopSearchRanks'].filter(c=> c.symbol === 'ETH')[0]
            this.ethMarketPrice = parseFloat(data2.priceChange.price).toFixed(2)    
        }catch (err){
            console.error(err)
        } 
    }
}

export default new MainStore()

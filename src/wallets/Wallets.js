import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3"
import EventBus from "../lib/EventBus"
import {BP_API, KOVAN_BP_API} from "../common/constants"
import { isAndroid, isIOS } from "react-device-detect";

/**
 * getWallet functions return a Consistent API
 * 
 *   web3
 *   provider
 *   connectFn: a function that connects and retruns the user account public key
 *
 */

export const getMetaMask = () => {
  if (!window.ethereum) {
    if(isAndroid) {
      window.location.replace("https://metamask.app.link/dapp/app.bprotocol.org")
      return
    }
    if(isIOS) {
      window.location.replace("metamask://app.bprotocol.org")
      return
    }
    EventBus.$emit("app-error", "metamask is not connected");
    return;
  }

  const provider = window.ethereum
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545")

  const connectFn = async () => {
    try{
      const accounts = await provider.request({ method: "eth_requestAccounts" })
      return accounts[0]
    }
    catch(err) {
      if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          EventBus.$emit("app-error", "Please connect to Meta Mask");
      } else {
          EventBus.$emit("app-error", err.message);
      }
    }
  }

  return {
    web3,
    provider,
    connectFn
  }
}

export const getWalletConnect = () => {
  // wallet connect caches things we need to remove
  window.localStorage.removeItem("walletconnect")
  //  Create WalletConnect Provider
  const provider = new WalletConnectProvider({
      // indexd by chain ID
      rpc: {
          1: BP_API,
          42: KOVAN_BP_API
          // ...
      }
  })
  const web3 = new Web3(provider)
  const connectFn = async () => {
    //  Enable session (triggers QR Code modal)
    await provider.enable()
    return provider.accounts[0]
  }

  return {
    web3,
    provider,
    connectFn
  }
}

export const walletTypes = {
  "WALLET_CONNECT": "WALLET_CONNECT",
  "META_MASK": "META_MASK",
}
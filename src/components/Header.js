import React, {Component} from "react";
import {numm} from "../lib/Utils";
import ConnectButton from "./ConnectButton";
import GlobalStats from "./GlobalStats";
import BorrowLimit from "./BorrowLimit";
import Tvl from "./Tvl";
import Logo from "../assets/logo-maker-black.svg";
import ConnectWallet from "../assets/connect-your-wallet.svg";

export default class Header extends Component {
    render() {

        const {info, onConnect, showConnect, history} = this.props;

        return (
            <div className="top-panel">
                <div className="container">
                    <div className="split title-bar">
                        <img className="logo" src={Logo} />
                        <div className="connect-container">
                            <ConnectButton onConnect={onConnect} history={history} />
                            {(showConnect || false)&& <div className="connect-wallet">
                                <i> </i>
                                <h3>Connect your wallet</h3>
                                <img src={ConnectWallet} />
                            </div>}
                        </div>
                    </div>
                    <div className="header-stats split">
                        <GlobalStats userInfo={info} />
                        {info && 
                            <BorrowLimit userInfo={info} />
                        }
                        {!info &&
                            <Tvl/>  
                        }
                    </div>
                </div>
            </div>
        )
    }
}

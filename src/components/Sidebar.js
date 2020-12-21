import React, { Component } from "react";
import Logo from "../assets/bprotocol.svg";
import Github from "../assets/github.svg";
import Twitter from "../assets/twitter-icon.svg";
import Linkedin from "../assets/linkedin.svg";
import Discord from "../assets/discord.svg";
import AAVELogo from "../assets/aav-ewhite-logo.svg";
import CompoundLogo from "../assets/compound-logo.svg";
import MakerLogo from "../assets/logo-maker-white.svg";
import EventBus from "../lib/EventBus";
import MigrationModal from "./modals/MigrationModal";
import { numm } from "../lib/Utils";
import MigrationButton from "./action-panels/MigrationButton";
import LeavUs from "../components/LeaveUs";
import * as qs from "qs";

export default class Sidebar extends Component {
  state = {
    selectedItem: this.props.initialState,
    showSideBar: true
  };
  handleItemSelect = (selectedItem, location) => {
    this.setState({ selectedItem: selectedItem });

    this.props.history.push(`/${location}`);
  };

  componentDidMount() {
      window.addEventListener("resize", this.resize.bind(this));
      this.resize();
  }

  resize() {
      this.setState({showSideBar : window.innerWidth >= 1050})
      console.log(window.innerWidth);
  }

  render() {
    const { userInfo, history, showConnect } = this.props;
    const { selectedItem } = this.state;
    const params = qs.parse(history.location.search, { ignoreQueryPrefix: true })

    return (
      <div className="sidebar" style={this.state.showSideBar ? {} : { display: 'none' }}>
        <img className="logo" alt="Logo" src={Logo} />
        <div className="ln"> </div>
        <div className="sidebar-content">
          { !params.export && userInfo && userInfo.makerdaoCdpInfo.hasCdp && (
            <div>
              <div className="cdp-convert">
                <MigrationButton />
                <div>
                  <p>
                    Import your Vault 
                    <br />
                    from MakerDAO system <br />
                    to B.Protocol
                  </p>
                  <div className="even">
                    <div>
                      <small><b><u>ETH Locked</u></b></small>
                      <p>{numm(userInfo.makerdaoCdpInfo.ethDeposit, 4)} ETH</p>
                    </div>
                    <div>
                      <small><b><u>DAI Debt</u></b></small>
                      <p>{numm(userInfo.makerdaoCdpInfo.daiDebt, 2)} DAI</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ln"> </div>
            </div>
          )}
          {params.export && 
            <div className="container">
              <LeavUs userInfo={userInfo} showConnect={showConnect} history={history}/>
            </div>
          }
          <div className="products">
            <div
              className={`product link-accesible ${
                selectedItem === "maker" &&
                history.location.pathname === "/app" &&
                "selected"
              }`}
              onClick={() => this.handleItemSelect("maker", "app")}
            >
              <img src={MakerLogo} />
            </div>
            <div className="product">
              <img src={CompoundLogo} />
              <small>(Coming soon)</small>
            </div>
            <div className="product">
              <img src={AAVELogo} />
              <small>(Coming soon)</small>
            </div>
          </div>
          <div className="ln"> </div>
          <div
            className={`product link-accesible ${
              selectedItem === "faq" &&
              history.location.pathname === "/app/faq" &&
              "selected"
            }`}
            onClick={() => this.handleItemSelect("faq", "app/faq")}
          >
            <p className="menu-item">FAQ</p>
          </div>
          <div
            className={`product link-accesible ${
              selectedItem === "risk" &&
              history.location.pathname === "/app/risk" &&
              "selected"
            }`}
            onClick={() => this.handleItemSelect("risk", "app/risk")}
          >
            <p className="menu-item">Risks</p>
          </div>
          <div
            className={`product link-accesible ${
              selectedItem === "terms" &&
              history.location.pathname === "app/terms" &&
              "selected"
            }`}
            onClick={() => this.handleItemSelect("terms", "app/terms")}
          >
            <p className="menu-item">Terms of Use</p>
          </div>


        </div>
        <div className="sidebar-footer">
          <h3>B.Protocol community</h3>
          <div className="social-icons">
            <a href="https://github.com/backstop-protocol" target="_blank">
              <img src={Github} />
            </a>
            <a href="https://twitter.com/bprotocoleth" target="_blank">
              <img src={Twitter} />
            </a>
            <a href="https://medium.com/b-protocol" target="_blank">
              <img src={require("../assets/medium-icon.svg")} />
            </a>
            <a href="https://discord.gg/3RmqN2K" target="_blank">
              <img src={Discord} />
            </a>
          </div>
          <p className="credits">&copy; 2020 B.Protocol</p>
        </div>
      </div>
    );
  }
}

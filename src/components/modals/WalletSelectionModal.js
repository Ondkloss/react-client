import React, {Component} from "react"
import {observer} from "mobx-react"
import styled from "styled-components"
import EventBus from "../../lib/EventBus"
import Flex, {FlexItem} from "styled-flex-component"
import {device} from "../../screenSizes"
import {walletTypes} from "../../wallets/Wallets"
import userStore from "../../stores/user.store"

const Container = styled.div`
  overflow: hidden;
  min-width: 360px;
  
  background: white;
  border-radius: 5px;
  box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.2), 0 0 8px 0 rgba(0, 0, 0, 0.1);
  @media ${device.mobile} {
    min-width: 300px;
  }
`

const Header = styled.div`
  padding-top: 26px;
  width: 100%;
  height: 77px;
  background-image: linear-gradient(-182deg, rgba(37, 192, 104, 0) 83%, rgba(12, 233, 108, 0.45) 115%), linear-gradient(to bottom, #f2fbf6, #f2fbf6);
`

const Title = styled.div`
  text-align: center;
  font-family: "NeueHaasGroteskDisp Pro Md", sans-serif;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: #17111e;
`

const ContentBox = styled.div`
  border-radius: 9.9px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.22);
  background-color: white;
  &:hover{
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.22);
  }
  &:active{
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.22);
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  svg{
    height: 50px;
    padding: 10px;
  }
`

const Text = styled.span`
  text-align: center;
  padding: 10px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: #0b0412;
`

const WalletIcon = styled.img`
  height: 100%;
`

class WalletSelectionModal extends Component {

  selectWallet (wallet){
    userStore.walletType = wallet
    EventBus.$emit('close-modal');
  }

  render () {
    return (
      <Container>
        <Header>
          <Title>Select Wallet</Title>
        </Header>
        <Flex full column alignStretch style={{padding: "40px"}}>
          <ContentBox className="clickable" onClick={() => this.selectWallet(walletTypes.META_MASK)}>
            <Flex alignCenter>
              <svg viewBox="0 0 24 24" display="inline-block" focusable="false" role="presentation" className="css-tic4zn"><g><g clipPath="url(#clip0_metamask)"><path d="M20.6116 2.44287L13.1526 8.03834L14.5233 4.73046L20.6116 2.44287Z" fill="#E2761B"></path><path d="M3.38794 2.44287L10.7832 8.09204L9.47626 4.73046L3.38794 2.44287Z" fill="#E4761B"></path><path d="M17.9235 15.4272L15.9365 18.4988L20.1867 19.6802L21.4086 15.4917L17.9235 15.4272Z" fill="#E4761B"></path><path d="M2.59106 15.4917L3.81298 19.6802L8.06312 18.4988L6.07618 15.4272L2.59106 15.4917Z" fill="#E4761B"></path><path d="M7.81882 10.2292L6.6394 12.0335L10.8577 12.2268L10.7089 7.64087L7.81882 10.2292Z" fill="#E4761B"></path><path d="M16.1702 10.2292L13.2482 7.58716L13.1526 12.2268L17.3602 12.0335L16.1702 10.2292Z" fill="#E4761B"></path><path d="M8.06323 18.4989L10.5921 17.253L8.40324 15.5239L8.06323 18.4989Z" fill="#E4761B"></path><path d="M13.397 17.253L15.9364 18.4989L15.5858 15.5239L13.397 17.253Z" fill="#E4761B"></path><path d="M15.9364 18.499L13.397 17.2532L13.5989 18.9286L13.5776 19.6374L15.9364 18.499Z" fill="#D7C1B3"></path><path d="M8.06323 18.499L10.4221 19.6374L10.4114 18.9286L10.5921 17.2532L8.06323 18.499Z" fill="#D7C1B3"></path><path d="M10.4645 14.4179L8.3501 13.7843L9.83765 13.0969L10.4645 14.4179Z" fill="#233447"></path><path d="M13.5247 14.4179L14.1516 13.0969L15.6497 13.7843L13.5247 14.4179Z" fill="#233447"></path><path d="M8.06311 18.4988L8.42437 15.4272L6.07617 15.4917L8.06311 18.4988Z" fill="#CD6116"></path><path d="M15.5752 15.4272L15.9365 18.4988L17.9234 15.4917L15.5752 15.4272Z" fill="#CD6116"></path><path d="M17.3602 12.0334L13.1526 12.2268L13.5351 14.4177L14.162 13.0967L15.6602 13.784L17.3602 12.0334Z" fill="#CD6116"></path><path d="M8.35008 13.784L9.84826 13.0967L10.4645 14.4177L10.8577 12.2268L6.6394 12.0334L8.35008 13.784Z" fill="#CD6116"></path><path d="M6.6394 12.0334L8.40321 15.5239L8.35009 13.784L6.6394 12.0334Z" fill="#E4751F" stroke="#E4751F" strokeWidth="0.07" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.6603 13.784L15.5859 15.5239L17.3604 12.0334L15.6603 13.784Z" fill="#E4751F" stroke="#E4751F" strokeWidth="0.07" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.8577 12.2268L10.4646 14.4177L10.9534 17.006L11.0702 13.6015L10.8577 12.2268Z" fill="#E4751F"></path><path d="M13.1528 12.2268L12.9509 13.5908L13.0359 17.006L13.5353 14.4177L13.1528 12.2268Z" fill="#E4751F"></path><path d="M13.5353 14.4178L13.0359 17.0061L13.3972 17.2532L15.586 15.524L15.6603 13.7842L13.5353 14.4178Z" fill="#F6851B"></path><path d="M8.3501 13.7842L8.40322 15.524L10.592 17.2532L10.9533 17.0061L10.4645 14.4178L8.3501 13.7842Z" fill="#F6851B"></path><path d="M13.5778 19.6374L13.599 18.9286L13.4078 18.7568H10.5814L10.4114 18.9286L10.4221 19.6374L8.06323 18.499L8.89201 19.1864L10.5602 20.357H13.429L15.1078 19.1864L15.9366 18.499L13.5778 19.6374Z" fill="#C0AD9E"></path><path d="M13.3971 17.2531L13.0358 17.0061H10.9533L10.592 17.2531L10.4114 18.9285L10.5814 18.7567H13.4077L13.599 18.9285L13.3971 17.2531Z" fill="#161616"></path><path d="M20.9197 8.40349L21.5679 5.31041L20.6116 2.44287L13.397 7.85576L16.1702 10.2293L20.0909 11.3892L20.9622 10.3581L20.5903 10.0896L21.1853 9.53118L20.7285 9.16602L21.3235 8.70421L20.9197 8.40349Z" fill="#763D16"></path><path d="M2.44238 5.31041L3.0799 8.40349L2.66552 8.70421L3.27116 9.16602L2.81427 9.53118L3.40929 10.0896L3.0374 10.3581L3.89806 11.3892L7.81881 10.2293L10.592 7.85576L3.38804 2.44287L2.44238 5.31041Z" fill="#763D16"></path><path d="M20.0911 11.3892L16.1703 10.2292L17.3604 12.0335L15.5859 15.524L17.9235 15.4918H21.4086L20.0911 11.3892Z" fill="#F6851B"></path><path d="M7.81873 10.2292L3.89798 11.3892L2.59106 15.4918H6.07618L8.40313 15.524L6.63932 12.0335L7.81873 10.2292Z" fill="#F6851B"></path><path d="M13.1527 12.2269L13.3971 7.85577L14.534 4.73047H9.47632L10.592 7.85577L10.8576 12.2269L10.9532 13.6016V17.0061H13.0358L13.0464 13.6016L13.1527 12.2269Z" fill="#F6851B"></path></g><defs><clipPath id="clip0_metamask"><rect x="2.3999" y="2.3999" width="19.2" height="18" fill="white"></rect></clipPath></defs></g></svg>
              <Text> Meta Mask</Text>
            </Flex>
          </ContentBox>
          <ContentBox className="clickable" onClick={() => this.selectWallet(walletTypes.WALLET_CONNECT)}>
            <Flex alignCenter >
              <svg viewBox="0 0 24 24" display="inline-block" focusable="false" role="presentation" className="css-tic4zn"><g><path d="M6.09607 8.54776C9.35682 5.18265 14.6435 5.18265 17.9043 8.54776L18.2967 8.95276C18.4598 9.12101 18.4598 9.39381 18.2967 9.56207L16.9543 10.9475C16.8728 11.0316 16.7406 11.0316 16.6591 10.9475L16.119 10.3902C13.8442 8.04257 10.1561 8.04257 7.88132 10.3902L7.30299 10.987C7.22147 11.0711 7.0893 11.0711 7.00778 10.987L5.66533 9.60159C5.5023 9.43333 5.5023 9.16054 5.66533 8.99228L6.09607 8.54776ZM20.6806 11.4129L21.8754 12.646C22.0384 12.8142 22.0384 13.087 21.8754 13.2553L16.488 18.8151C16.325 18.9834 16.0607 18.9834 15.8976 18.8151C15.8976 18.8151 15.8976 18.8151 15.8976 18.8151L12.074 14.8691C12.0332 14.8271 11.9672 14.8271 11.9264 14.8691C11.9264 14.8691 11.9264 14.8691 11.9264 14.8691L8.10287 18.8151C7.93984 18.9834 7.6755 18.9834 7.51246 18.8151C7.51246 18.8151 7.51246 18.8151 7.51246 18.8151L2.12496 13.2552C1.96193 13.0869 1.96193 12.8142 2.12496 12.6459L3.31975 11.4129C3.48278 11.2446 3.74712 11.2446 3.91016 11.4129L7.73382 15.3589C7.77458 15.401 7.84066 15.401 7.88142 15.3589C7.88142 15.3589 7.88143 15.3589 7.88143 15.3589L11.7049 11.4129C11.8679 11.2446 12.1323 11.2446 12.2953 11.4129C12.2953 11.4129 12.2953 11.4129 12.2953 11.4129L16.119 15.3589C16.1597 15.401 16.2258 15.401 16.2666 15.3589L20.0902 11.4129C20.2532 11.2447 20.5176 11.2447 20.6806 11.4129Z" fill="#5399F5"></path></g></svg>
              <Text> Wallet Connect</Text>
            </Flex>
          </ContentBox>
        </Flex>
      </Container>
    )
  }
}

export default observer(WalletSelectionModal)
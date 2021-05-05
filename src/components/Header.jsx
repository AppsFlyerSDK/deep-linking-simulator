import React from "react"
import styled from "styled-components"

import {
  HeaderAfLogo,
  HeaderOlLogo,
  BannerDesktop,
  BannerMobile,
} from "./svg-components"
import { Typography } from "@appsflyer/fe-ui-core"

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
`

const TopBar = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
  padding-left: 20px;

  background: #414a55;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`

const Divider = styled.div`
  width: 15px;
  height: 0px;

  border: 1px solid #ffffff;
  transform: rotate(90deg);
`

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 197px;
  background: #3b434d;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);

  @media only screen and (min-width: 768px) {
    height: 179px;
  }
`

const HeaderTitleWrapper = styled(Typography)`
  width: 185px;
  font-size: 45px;
  line-height: 50px;
  letter-spacing: -0.015em;
  color: #ffffff;

  padding-left: 16px;

  @media only screen and (min-width: 768px) {
    padding-left: 0px;
  }
`

const OlLogo = styled(HeaderOlLogo)`
  margin-bottom: 7px;
`

const BannerMobileStyled = styled(BannerMobile)`
  margin-left: auto;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`

const BannerDesktopStyled = styled(BannerDesktop)`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
  }
`

export default function Header() {
  return (
    <Wrapper>
      <TopBar>
        <HeaderAfLogo />
        <Divider />
        <OlLogo />
      </TopBar>
      <Banner>
        <HeaderTitleWrapper>OneLink simulator</HeaderTitleWrapper>
        <BannerMobileStyled />
        <BannerDesktopStyled />
      </Banner>
    </Wrapper>
  )
}

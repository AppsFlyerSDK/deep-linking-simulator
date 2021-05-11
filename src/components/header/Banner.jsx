import React from "react"
import styled from "styled-components"

import { BannerDesktop, BannerMobile } from "../svg-components"
import { Typography } from "@appsflyer/fe-ui-core"

const BannerWrapper = styled.div`
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

export default function Banner() {
  return (
    <BannerWrapper>
      <HeaderTitleWrapper>OneLink simulator</HeaderTitleWrapper>
      <BannerMobileStyled />
      <BannerDesktopStyled />
    </BannerWrapper>
  )
}

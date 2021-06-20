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
  width: 200px;
  color: #ffffff;

  padding-left: 16px;

  @media only screen and (min-width: 768px) {
    width: 360px;
    padding-left: 0px;
  }

  // @media only screen and (min-width: 560px) {
  //   padding-left: 0px;
  //   width: 350px;
  // }
`

const TitleContainer = styled.div``

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
      <TitleContainer>
        <HeaderTitleWrapper variant="h4">
          Deep Linking Simulator
        </HeaderTitleWrapper>
        <HeaderTitleWrapper variant="subtitle1">
          Powered by OneLink
        </HeaderTitleWrapper>
      </TitleContainer>
      <BannerMobileStyled />
      <BannerDesktopStyled />
    </BannerWrapper>
  )
}

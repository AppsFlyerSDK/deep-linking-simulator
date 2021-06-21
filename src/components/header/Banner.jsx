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

const HeaderTitle = styled(Typography)`
  font-weight: bold;
`

const TitleContainer = styled.div`
  width: 200px;
  color: #ffffff;

  padding-left: 20px;

  @media only screen and (min-width: 768px) {
    width: 225px;
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
      <TitleContainer>
        <HeaderTitle variant="h4">Deep Linking Simulator</HeaderTitle>
        <Typography variant="subtitle1">Powered by OneLink</Typography>
      </TitleContainer>
      <BannerMobileStyled />
      <BannerDesktopStyled />
    </BannerWrapper>
  )
}

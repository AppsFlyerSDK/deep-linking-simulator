import React from 'react'
import styled from 'styled-components'

import {HeaderAfLogo, HeaderOlLogo, BannerMobile, BannerDesktop} from '../assets/index';
import { Typography } from '@appsflyer/fe-ui-core';



const TopBar = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  
  background: #414A55;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`

const Divider = styled.div`
  width: 15px;
  height: 0px;

  border: 1px solid #FFFFFF;
  transform: rotate(90deg);
  
`

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 179px;
  background: #3B434D;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
`

const HeaderTitleWrapper = styled(Typography)`
  width: 185px;
  font-size: 45px;
  line-height: 50px;
  letter-spacing: -0.015em;
  color: #FFFFFF;
`

export default function Header() {
  return (
    <>
      <TopBar>
        <HeaderAfLogo />
        <Divider />
        <HeaderOlLogo /> {/* Add margin-bottom: 7pm */}
      </TopBar>
      <Banner> 
        <HeaderTitleWrapper>OneLink simulator</HeaderTitleWrapper>
        <BannerDesktop />
      </Banner>
    </>
  )
}

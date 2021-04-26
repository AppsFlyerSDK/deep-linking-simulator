import React from 'react'
import styled from 'styled-components'

const PageHeader = styled.div`
  height: 52px;
  
  background: #414A55;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`

const Banner = styled.div`
  height: 179px;
  background: #3B434D;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
`

export default function Header() {
  return (
    <div>
      <PageHeader> LOGO </PageHeader>
      <Banner> IMAGE </Banner>
    </div>
  )
}

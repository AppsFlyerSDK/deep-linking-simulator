import React from 'react'
import styled from 'styled-components'

import { EmptyState } from '@appsflyer/fe-ui-core';

const Wrapper = styled.div`
  background: #FFFFFF;

  border: 1px solid #E5E8ED;
  box-sizing: border-box;
  border-radius: 4px;

  width: 100%;

  margin-left: 24px;
`

export default function QROutput() {
  return (
    <Wrapper>
      <EmptyState
        title="Your OneLink hasn't been created yet"
        subtitle="Make your redirection and deep linking selections. Then click Create link to create your OneLink URL and QR code."
      />
    </Wrapper>
  )
}

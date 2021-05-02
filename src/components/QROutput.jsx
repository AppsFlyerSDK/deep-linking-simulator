import React from "react";
import styled from "styled-components";
import QRCode from "qrcode.react";

import { EmptyState, Typography, CopyToClipboard } from "@appsflyer/fe-ui-core";
import Link from "@material-ui/core/Link";
import {OutputEmptyState} from '../assets/index';


const Wrapper = styled.div`
  background: #ffffff;

  border: 1px solid #e5e8ed;
  box-sizing: border-box;
  border-radius: 4px;

  width: 100%;

  margin-left: 24px;
  padding: 24px;
`;

export default function QROutput({ oneLinkURL }) {
  return (
    <Wrapper>
      {!oneLinkURL && (
        <>
        <OutputEmptyState />
        <EmptyState
          title="Your OneLink hasn't been created yet"
          subtitle="Make your redirection and deep linking selections. Then click Create link to create your OneLink URL and QR code."
        />
        </>
      )}

      {oneLinkURL && (
        <>
          <Typography variant="body1" weight="bold" color="primary">
            OneLink URL and QR code
          </Typography>

          <CopyToClipboard
            id="1"
            size="fullWidth"
            value={oneLinkURL}
            // value={
            //   <Link
            //     underline="always"
            //     href="https://onelink-sim.onelink.me/coiD"
            //     target="_blank"
            //     rel="noreferrer">
            //     <Typography>https://onelink-sim.onelink.me/coiD</Typography>
            //   </Link>
            // }
          />

          <Link
            underline="always"
            href={oneLinkURL}
            target="_blank"
            rel="noreferrer"
          >
            <Typography>{oneLinkURL}</Typography>
          </Link>

          <QRCode value={oneLinkURL} />
        </>
      )}
    </Wrapper>
  );
}

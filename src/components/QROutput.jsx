import React from "react"
import styled from "styled-components"
import QRCode from "qrcode.react"

import { EmptyState, Typography } from "@appsflyer/fe-ui-core"
import Link from "@material-ui/core/Link"
import { OutputEmptyState } from "./svg-components"
import { makeStyles } from "@material-ui/core/styles"

import CopyToClipboardWithLink from "./CopyToClipboardWithLink/CopyToClipboardWithLink"

const Wrapper = styled.div`
  background: #ffffff;

  border: 1px solid #e5e8ed;
  box-sizing: border-box;
  border-radius: 4px;

  width: 100%;

  padding: 24px;
  margin-top: 16px;

  ${(props) => props.isEmptyState && "display: none;"}

  @media only screen and (min-width: 768px) {
    margin-left: 24px;
    margin-top: 0px;
    ${(props) =>
      props.isEmptyState && "display: flex; justify-content: center;"}
  }
`

const QRCodeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    height: 352px; //Note: review this if anything else on the page changes
  }
`

const EmptyStateWrapper = styled.div`
  display: flex;
  min-height: 250px;
  text-align: center;
  flex-direction: column;
  justify-content: center;
`

const useStyles = makeStyles((theme) => ({
  innerForm: {
    marginBottom: "14px",
  },
  outerForm: {
    marginBottom: "6px",
  },
  paddingLeft: {
    paddingLeft: "4px",
  },
  linkPadding: {
    padding: "8px 0px 8px 8px",
    wordBreak: "break-all",
  },
  emptyState: {
    width: "auto",
  },
}))

export default function QROutput({ oneLinkURL, qrCodeRef }) {
  const classes = useStyles()

  const myLink = () => {
    return (
      <Link
        underline="always"
        href={oneLinkURL}
        target="_blank"
        rel="noreferrer"
      >
        <Typography className={classes.linkPadding}>{oneLinkURL}</Typography>
      </Link>
    )
  }

  return (
    <Wrapper isEmptyState={!oneLinkURL}>
      {!oneLinkURL && (
        <EmptyStateWrapper>
          <EmptyState
            classes={{ root: classes.emptyState }}
            variant="noSearchResults"
            icon={OutputEmptyState}
            title={
              <div>
                <Typography variant="h1">
                  Your OneLink hasn't been created yet
                </Typography>
              </div>
            }
            content={
              <div>
                <Typography variant="body1">
                  Make your redirection and deep linking selections.
                  <br />
                  Then click <b>Create Link</b> to create your OneLink URL and
                  QR code.
                </Typography>
              </div>
            }
          />
        </EmptyStateWrapper>
      )}

      {oneLinkURL && (
        <>
          <Typography
            variant="body1"
            weight="bold"
            color="primary"
            className={classes.innerForm}
          >
            OneLink URL and QR code
          </Typography>

          <Typography
            variant="body2"
            weight="bold"
            className={classes.outerForm}
          >
            Click the link on your mobile device or desktop, or scan the QR code
            to simulate OneLink redirection behavior.
          </Typography>

          <CopyToClipboardWithLink
            id="1"
            size="fullWidth"
            link={myLink}
            value={oneLinkURL}
          />

          <QRCodeWrapper ref={qrCodeRef}>
            <QRCode value={oneLinkURL} size={290} includeMargin={true} />
          </QRCodeWrapper>
        </>
      )}
    </Wrapper>
  )
}

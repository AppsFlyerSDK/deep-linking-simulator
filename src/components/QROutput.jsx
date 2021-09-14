import React from "react"
import styled from "styled-components"
import QRCode from "qrcode.react"
import { EmptyState, Typography, Alert } from "@appsflyer/fe-ui-core"
import Link from "@material-ui/core/Link"
import { makeStyles } from "@material-ui/core/styles"

import CopyToClipboardWithLink from "./CopyToClipboardWithLink/CopyToClipboardWithLink"
import { OutputEmptyState } from "./svg-components"
import { gaTag } from "../utilities/analytics"

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

export default function QROutput({ 
  oneLinkURL,
  shortLinkURL,
  brandedLinkURL,
  qrCodeRef,
}) {
  const classes = useStyles()

  const myLongLink = () => {
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

  const myShortLink = () => {
    return (
      <Link
        underline="always"
        href={shortLinkURL}
        target="_blank"
        rel="noreferrer"
      >
        <Typography className={classes.linkPadding}>{shortLinkURL}</Typography>
      </Link>
    )
  }
  
  const myBrandedLink = () => {
    return (
      <Link
        underline="always"
        href={brandedLinkURL}
        target="_blank"
        rel="noreferrer"
      >
        <Typography className={classes.linkPadding}>{brandedLinkURL}</Typography>
      </Link>
    )
  }

  const onCopyLongURL = () => {
    gaTag.event({
      category: 'User',
      action: 'Copied Long Link',
      label: oneLinkURL
    });
  };

  const onCopyShortURL = () => {
    gaTag.event({
      category: 'User',
      action: 'Copied Short Link',
      label: shortLinkURL
    });
  };

  const onCopyBrandedURL = () => {
    gaTag.event({
      category: 'User',
      action: 'Copied Branded Link',
      label: brandedLinkURL
    });
  };

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
            link={myLongLink}
            value={oneLinkURL}
            onCopy={onCopyLongURL}
          />

          <QRCodeWrapper ref={qrCodeRef}>
            <QRCode value={oneLinkURL} size={290} includeMargin={true} />
          </QRCodeWrapper>

          <CopyToClipboardWithLink
            id="2"
            size="fullWidth"
            link={myShortLink}
            value={shortLinkURL}
            onCopy={onCopyShortURL}
          />

          <QRCodeWrapper>
            <QRCode value={shortLinkURL} size={290} includeMargin={true} />
          </QRCodeWrapper>

          <CopyToClipboardWithLink
            id="3"
            size="fullWidth"
            link={myBrandedLink}
            value={shortLinkURL}
            onCopy={onCopyBrandedURL}
          />

          <QRCodeWrapper>
            <QRCode value={brandedLinkURL} size={290} includeMargin={true} />
          </QRCodeWrapper>

          <Alert severity="info">
            We’ve created 3 links that will lead to the same page. Each link looks different, but it’s the same.
          </Alert>
        </>
      )}
    </Wrapper>
  )
}

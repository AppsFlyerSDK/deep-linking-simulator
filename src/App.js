import React, { useState, useRef } from "react"
import { ThemeProvider } from "@appsflyer/fe-ui-theme"
import CssBaseline from "@material-ui/core/CssBaseline"

import TopBar from "./components/header/TopBar"
import Banner from "./components/header/Banner"
import OneLinkForm from "./components/OneLinkForm"
import QROutput from "./components/QROutput"

import styled from "styled-components"

import * as FullStory from "@fullstory/browser"

import ReactGA from "react-ga"

ReactGA.initialize("UA-206076064-1", {
  // debug: true,
})

ReactGA.pageview(window.location.pathname + window.location.search)

FullStory.init({ orgId: "ZKPBZ" })

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background: #f2f2f2;

  padding: 16px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding: 24px;
  }
`

function App() {
  const [selectedPage, setSelectedPage] = useState("peaches")
  const [fruitAmount, setFruitAmount] = useState(0)
  const [iOSRedirect, setIOSRedirect] = useState({
    value: "appStore",
    label: "App Store",
  })
  const [androidRedirect, setAndroidRedirect] = useState({
    value: "playStore",
    label: "Play Store",
  })
  const [webRedirect, setWebRedirect] = useState({
    value: `https://chayev.github.io/appsflyer-smartbanner-fruits/`,
    // value: `https://www.appsflyer.com/web-Demo/`,
    label: "Web Page",
  })
  const [oneLinkURL, setOneLinkURL] = useState("")
  const qrCodeRef = useRef(null)
  const logEventLinkGen = () => {
    ReactGA.event({
      category: 'User',
      action: 'Link Generated',
      label: selectedPage,
      value: parseInt(fruitAmount.value)
    });
  }
  const logEventCopy = () => {
    ReactGA.event({
      category: 'User',
      action: 'Copied Link',
      label: oneLinkURL
    });
  }

  return (
    <ThemeProvider>
      <CssBaseline />

      <TopBar />
      <Banner />

      <BodyWrapper>
        <OneLinkForm
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          fruitAmount={fruitAmount}
          setFruitAmount={setFruitAmount}
          iOSRedirect={iOSRedirect}
          setIOSRedirect={setIOSRedirect}
          androidRedirect={androidRedirect}
          setAndroidRedirect={setAndroidRedirect}
          webRedirect={webRedirect}
          setWebRedirect={setWebRedirect}
          setOneLinkURL={setOneLinkURL}
          qrCodeRef={qrCodeRef}
          logEventLinkGen={logEventLinkGen}
        />
        <QROutput 
          oneLinkURL={oneLinkURL} 
          qrCodeRef={qrCodeRef} 
          logEventCopy={logEventCopy}
        />
      </BodyWrapper>
    </ThemeProvider>
  )
}

export default App

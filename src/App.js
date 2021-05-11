import React, { useState, useRef } from "react"
import { ThemeProvider } from "@appsflyer/fe-ui-theme"
import CssBaseline from "@material-ui/core/CssBaseline"

import TopBar from "./components/header/TopBar"
import Banner from "./components/header/Banner"
import OneLinkForm from "./components/OneLinkForm"
import QROutput from "./components/QROutput"

import styled from "styled-components"
import * as FullStory from "@fullstory/browser"

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
  const [selectedPage, setSelectedPage] = useState("apples")
  const [fruitAmount, setFruitAmount] = useState(null)
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
    label: "Web Page",
  })
  const [oneLinkURL, setOneLinkURL] = useState("")
  const qrCodeRef = useRef(null)

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
        />
        <QROutput oneLinkURL={oneLinkURL} qrCodeRef={qrCodeRef} />
      </BodyWrapper>
    </ThemeProvider>
  )
}

export default App

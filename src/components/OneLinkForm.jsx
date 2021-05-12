import React from "react"
import styled from "styled-components"
import querystring from "query-string"

import FormLabel from "@material-ui/core/FormLabel"
import { Typography } from "@appsflyer/fe-ui-core"

import { ToggleButtonGroup, ToggleButton } from "@appsflyer/fe-ui-core"
import Apple from "@material-ui/icons/Apple"
import { ToggleBanana, TogglePeach } from "./svg-components"

import { Select } from "@appsflyer/fe-ui-core"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

const Wrapper = styled.div`
  background: #ffffff;

  border: 1px solid #e5e8ed;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 24px;
`

const useStyles = makeStyles((theme) => ({
  innerForm: {
    marginBottom: "14px",
  },
  outerForm: {
    marginBottom: "24px",
  },
  paddingLeft: {
    paddingLeft: "4px",
  },
}))

export default function OneLinkForm({
  selectedPage,
  setSelectedPage,
  fruitAmount,
  setFruitAmount,
  iOSRedirect,
  setIOSRedirect,
  androidRedirect,
  setAndroidRedirect,
  webRedirect,
  setWebRedirect,
  setOneLinkURL,
  qrCodeRef,
}) {
  const generateURL = async () => {
    const url = "https://onelink-sim.onelink.me/coiD"
    const pid = "QR_code"

    const params = {
      deep_link_value: selectedPage || undefined,
      deep_link_sub1: fruitAmount?.value || undefined,
      af_ios_url:
        iOSRedirect.label === "Web Page" ? iOSRedirect.value : undefined,
      af_android_url:
        androidRedirect.label === "Web Page"
          ? androidRedirect.value
          : undefined,
      af_web_dp: webRedirect.value || undefined,
    }

    const query = querystring.stringify(params)
    const finalURL = `${url}?pid=${pid}&${query}`

    await setOneLinkURL(finalURL)
    const isMobile = window.innerWidth < 768

    if (isMobile) {
      qrCodeRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const classes = useStyles()

  // const webURL = `https://www.appsflyer.com/webDemo/`
  const webURL = `https://chayev.github.io/appsflyer-smartbanner-fruits/`
  // const webURL = `https://chayev.github.io/appsflyer-smartbanner-fruits/products/${selectedPage}`

  return (
    <Wrapper>
      <Typography
        variant="body1"
        weight="bold"
        color="primary"
        className={classes.innerForm}
      >
        Deep link users with app installed
      </Typography>

      <FormLabel>
        <Typography
          variant="body2"
          color="textPrimary"
          className={classes.paddingLeft}
        >
          Open a specific page in the app
        </Typography>
      </FormLabel>

      <ToggleButtonGroup
        size="small"
        value={selectedPage}
        onChange={(_, selectedPage) => setSelectedPage(selectedPage)}
        exclusive
        className={classes.innerForm}
      >
        <ToggleButton value="apples" label="Apples" icon={<Apple />} />
        <ToggleButton
          value="bananas"
          label="Bananas"
          icon={<ToggleBanana isSelected={selectedPage === "bananas"} />}
        />
        <ToggleButton
          value="peaches"
          label="Peaches"
          icon={<TogglePeach isSelected={selectedPage === "peaches"} />}
        />
      </ToggleButtonGroup>

      <Select
        options={[
          { value: "1", label: "1" },
          { value: "5", label: "5" },
          { value: "10", label: "10" },
          { value: "25", label: "25" },
          { value: "99", label: "99" },
        ]}
        label="Display the amount of fruit"
        value={fruitAmount}
        onChange={setFruitAmount}
        size="fullWidth"
        className={classes.outerForm}
      />

      <Typography
        variant="body1"
        weight="bold"
        color="primary"
        className={classes.innerForm}
      >
        Redirect users without app installed
      </Typography>

      <Select
        options={[
          { value: "appStore", label: "App Store" },
          {
            value: webURL,
            label: "Web Page",
          },
        ]}
        label="On iOS, redirect to:"
        value={iOSRedirect}
        onChange={setIOSRedirect}
        size="fullWidth"
        className={classes.innerForm}
      />

      <Select
        options={[
          { value: "playStore", label: "Play Store" },
          {
            value: webURL,
            label: "Web Page",
          },
        ]}
        label="On Android, redirect to"
        value={androidRedirect}
        onChange={setAndroidRedirect}
        size="fullWidth"
        className={classes.innerForm}
      />

      <Select
        options={[
          {
            value: webURL,
            label: "Web Page",
          },
          { value: "https://www.google.com/", label: "Google Search" },
          { value: "https://www.amazon.com/", label: "Amazon" },
        ]}
        label="On desktop, redirect to"
        value={webRedirect}
        onChange={setWebRedirect}
        size="fullWidth"
        className={classes.outerForm}
      />

      <Button
        variant="contained"
        size="medium"
        color="primary"
        fullWidth
        onClick={generateURL}
      >
        Create Link
      </Button>
    </Wrapper>
  )
}

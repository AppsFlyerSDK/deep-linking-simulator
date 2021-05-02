import React from 'react'
import styled from 'styled-components'
import querystring from 'query-string'

import FormLabel from '@material-ui/core/FormLabel';
import { Typography } from '@appsflyer/fe-ui-core';

import { ToggleButtonGroup, ToggleButton } from '@appsflyer/fe-ui-core';
import Apple from '@material-ui/icons/Apple';
import { ToggleBanana, TogglePeach } from '../assets/index';

import { Select } from '@appsflyer/fe-ui-core';
import Button from '@material-ui/core/Button';

const Wrapper = styled.div`
  background: #FFFFFF;

  border: 1px solid #E5E8ED;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 24px;
`

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
  setOneLinkURL
}) {

  const generateURL = () => {
    const url = "https://onelink-sim.onelink.me/coiD";
    const pid = "QR_code";

    const params = {
      'deep_link_value': selectedPage || undefined,
      'deep_link_sub1': fruitAmount?.value || undefined,
      'af_ios_url': iOSRedirect.label === 'Web Page' ? iOSRedirect.value : undefined,
      'af_android_url': androidRedirect.label === 'Web Page' ? androidRedirect.value : undefined,
      'af_web_dp': webRedirect.value || undefined
    }

    const query = querystring.stringify(params);
    const finalURL = `${url}?pid=${pid}&${query}`

    setOneLinkURL(finalURL)
  }

  return (
    <Wrapper>
      <Typography variant="body1" weight="bold" color="primary">Deeplinking</Typography>
      
      <FormLabel>
        <Typography variant="body2" color="textPrimary">Open a specific page in the app</Typography>
      </FormLabel>

      <ToggleButtonGroup
        size="small"
        value={selectedPage}
        onChange={(event, selectedPage) => setSelectedPage(selectedPage)}
        exclusive>
        <ToggleButton
          value="apples"
          label="Apples"
          icon={<Apple />}
        />
        <ToggleButton
          value="bananas"
          label="Bananas"
          icon={<ToggleBanana isSelected={selectedPage === 'bananas'}/>}
        />
        <ToggleButton
          value="peaches"
          label="Peaches"
          icon={<TogglePeach  isSelected={selectedPage === 'peaches'}/>}
        />
      </ToggleButtonGroup>

      <Select
        options={[
          { value: '1', label: '1' },
          { value: '5', label: '5' },
          { value: '10', label: '10' },
          { value: '25', label: '25' },
          { value: '99', label: '99' },
        ]}
        label="Display the amount of fruit"
        value={fruitAmount}
        onChange={setFruitAmount}
        size="fullWidth"
      />

      <Typography variant="body1" weight="bold" color="primary">Redirections</Typography>
      
       
      <Select
        options={[
          { value: 'appStore', label: 'App Store' },
          { value: 'webPage', label: 'Web Page' },
        ]}
        label="On iOS redirect to"
        value={iOSRedirect}
        onChange={setIOSRedirect}
        size="fullWidth"
      />

      <Select
        options={[
          { value: 'playStore', label: 'Play Store' },
          { value: 'webPage', label: 'Web Page' },
        ]}
        label="On android redirect to"
        value={androidRedirect}
        onChange={setAndroidRedirect}
        size="fullWidth"
      />

      <Select
        options={[
          { value: 'webPage', label: 'Web Page' },
          { value: 'google', label: 'Google Search' },
          { value: 'amazon', label: 'Amazon' },
        ]}
        label="On desktop redirect to"
        value={webRedirect}
        onChange={setWebRedirect}
        size="fullWidth"
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


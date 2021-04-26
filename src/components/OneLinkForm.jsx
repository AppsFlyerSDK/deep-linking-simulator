import React, {useState} from 'react'
import styled from 'styled-components'

import FormLabel from '@material-ui/core/FormLabel';
import { Typography } from '@appsflyer/fe-ui-core';

import { ToggleButtonGroup, ToggleButton } from '@appsflyer/fe-ui-core';
import Apple from '@material-ui/icons/Apple';

import { Select } from '@appsflyer/fe-ui-core';
import Button from '@material-ui/core/Button';

import Slider from '@material-ui/core/Slider';

const Wrapper = styled.div`
  background: #FFFFFF;

  border: 1px solid #E5E8ED;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 24px;
`

export default function OneLinkForm() {
  const [selectedPage, setSelectedPage] = useState('');
  const [fruitAmount, setFruitAmount] = useState(null);
  const [iOSRedirect, setIOSRedirect] = useState(null);
  const [androidRedirect, setAndroidRedirect] = useState(null);
  const [webRedirect, setWebRedirect] = useState(null);

  console.log(selectedPage)
  console.log(fruitAmount)
  console.log(iOSRedirect)
  console.log(androidRedirect)
  console.log(webRedirect)

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
          icon={<Apple fontSize="small" />}
        />
        <ToggleButton
          value="bananas"
          label="Bananas"
          icon={<Apple fontSize="small" />}
        />
        <ToggleButton
          value="peaches"
          label="Peaches"
          icon={<Apple fontSize="small" />}
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

      {/* testing this out */}
      <Slider
        size="small"
        defaultValue={Math.floor(Math.random() * 50)}
        min={1}
        max={100}
        // valueLabelDisplay="on"
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

      <Button variant="contained" size="medium" color="primary" fullWidth="true">
        Create Link
      </Button>

    </Wrapper>
  )
}


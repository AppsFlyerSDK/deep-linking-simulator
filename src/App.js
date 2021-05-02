import React, {useState} from 'react'
import { ThemeProvider } from '@appsflyer/fe-ui-theme';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header';
import OneLinkForm from './components/OneLinkForm';
import QROutput from './components/QROutput';

import styled from 'styled-components'
import * as FullStory from '@fullstory/browser';

FullStory.init({ orgId: 'ZKPBZ' });

const BodyWrapper = styled.div`
  display: flex;

  background: #F2F2F2;

  padding: 24px;
`

function App() {
  const [selectedPage, setSelectedPage] = useState('');
  const [fruitAmount, setFruitAmount] = useState(null);
  const [iOSRedirect, setIOSRedirect] = useState({ value: 'appStore', label: 'App Store' });
  const [androidRedirect, setAndroidRedirect] = useState({ value: 'playStore', label: 'Play Store' });
  const [webRedirect, setWebRedirect] = useState({ value: 'webPage', label: 'Web Page' });
  const [oneLinkURL, setOneLinkURL] = useState('')

  return (
    <ThemeProvider>
     <CssBaseline />
      <Header />
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
        />
        <QROutput 
          oneLinkURL={oneLinkURL}
        />
      </BodyWrapper>
    </ThemeProvider>
  );
}

export default App;

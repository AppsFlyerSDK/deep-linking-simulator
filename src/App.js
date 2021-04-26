import { ThemeProvider } from '@appsflyer/fe-ui-theme';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header';
import OneLinkForm from './components/OneLinkForm';
import QROutput from './components/QROutput';

import styled from 'styled-components'

const BodyWrapper = styled.div`
  display: flex;

  background: #F2F2F2;

  padding: 24px;
`

function App() {
  return (
    <ThemeProvider>
     <CssBaseline />
      <Header />
      <BodyWrapper>
        <OneLinkForm />
        <QROutput />
      </BodyWrapper>
    </ThemeProvider>
  );
}

export default App;

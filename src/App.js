import { ThemeProvider } from '@appsflyer/fe-ui-theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ToggleButtonGroup, ToggleButton, IconText } from '@appsflyer/fe-ui-core';
import Apple from '@material-ui/icons/Apple';


import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';

import './App.css';

function App() {
  return (
    <ThemeProvider>
     <CssBaseline />
        <div className="App">
        <ToggleButtonGroup
          size="small"
          // value={value}
          // onChange={(event, value) => setValue(value)}
          exclusive>
          <ToggleButton
            value="apple"
            label="Apple"
            icon={<Apple fontSize="small" />}
          />
          <ToggleButton
            value="android"
            label="Android"
            icon={<Apple fontSize="small" />}
          />
          <ToggleButton
            value="appsFlyer"
            label="AppsFlyer"
            icon={<Apple fontSize="small" />}
          />
          <ToggleButton
            value="search"
            label="Search"
            icon={<Apple fontSize="small" />}
          />
        </ToggleButtonGroup>


          <Slider
            min={0}
            max={60}
            marks={[
              {
                value: 0,
                label: '0'
              },
              {
                value: '15',
                label: '15'
              },
              {
                value: 30,
                label: '30'
              },
              {
                value: 45,
                label: '45'
              },
              {
                value: 60,
                label: '60'
              }
            ]}
            step={1}
            defaultValue={0}
          />
        </div>
    </ThemeProvider>
  );
}

export default App;

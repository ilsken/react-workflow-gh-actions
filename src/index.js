import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { withLDProvider } from 'launchdarkly-react-client-sdk';
const {version: BUILD_VERSION, name: BUILD_NAME} = require('../package.json')

const AppWithLD = withLDProvider({
  clientSideID: process.env.REACT_APP_LD_CLIENT_ID,
  user: {
    anonymous: true,
    custom: {
      'Build Version': BUILD_VERSION,
      'Build Name': BUILD_NAME,
      'Build Date': process.env.REACT_APP_BUILD_DATE
    }
  },
  options: { /* ... */ }
})(App);


ReactDOM.render(
  <React.StrictMode>
    <AppWithLD />
  </React.StrictMode>,
  document.getElementById('root')
);



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { withLDProvider } from 'launchdarkly-react-client-sdk';
const {version: BUILD_VERSION, name: BUILD_NAME} = require('../package.json')

const AppWithLD = withLDProvider({
  clientSideID: process.env.LD_CLIENT_ID,
  user: {
    anonymous: true,
    custom: {
      'Build Version': BUILD_VERSION,
      'Build Name': BUILD_NAME
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



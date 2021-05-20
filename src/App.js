import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

const ShinyNewFeature =  withLDConsumer(({flags}) => {
  if (flags.enableShinyNewFeature) {
    return (
      <p>Hello, the shiny new feature is on</p>
    )
  }
})



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />       
      </header>
      <p>
        <ShinyNewFeature />
      </p>
    </div>
  );
}

export default withLDProvider({
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

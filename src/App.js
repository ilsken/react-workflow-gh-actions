import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

const ShinyNewFeature =  withLDConsumer()(
({flags}) => {
  if (flags.enableShinyNewFeature) {
    return (
      <span>Hello, the shiny new feature is on</span>
    )
  }
  return []
})



function App() {
  return (
    <div className="App">
    <h1>My App</h1>
      <p>
        <ShinyNewFeature />
      </p>
    </div>
  );
}

export default App

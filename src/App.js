import React, { Component } from 'react';

import Pad from './components/Pad'

import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Drum</h1>

        <Pad />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import DrumPad from './components/DrumPad';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Drum Pad</h1>
        <DrumPad />
      </div>
    );
  }
}

export default App;

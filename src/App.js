import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faDownload, faPlus, faRedoAlt } from '@fortawesome/free-solid-svg-icons'


import Track from './components/Track'
import MusicController from './components/MusicController'
import './styles/App.scss'

library.add(faPlay)
library.add(faDownload)
library.add(faPlus)
library.add(faRedoAlt)

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Jahong</h1>

        <Track />

        <MusicController />
      </div>
    );
  }
}

export default App;

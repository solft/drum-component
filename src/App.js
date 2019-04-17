import React, { Component } from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faPlay, faDownload, faPlus, faRedoAlt } from '@fortawesome/free-solid-svg-icons'


// import Player from './components/Player'
// import './styles/App.scss'

// library.add(faPlay)
// library.add(faDownload)
// library.add(faPlus)
// library.add(faRedoAlt)

import MobXTest from './components/MobXTest'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Jahong</h1>
        <MobXTest />
        {/* <Player /> */}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import DrumLine from './DrumLine';

import { drum } from '../magenta/drum'

class DrumPad extends Component {
  render() {
    const drumPad = drum.map(e => {
      return (
        <div key={e}>
          <span>{e}</span>
          <DrumLine playerLength="12" drum={e} />
        </div>
      )
    })
    return (
      <div>
        {drumPad}
      </div>
    )
  }
}

export default DrumPad

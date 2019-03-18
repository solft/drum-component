import React, { Component } from 'react'
import DrumLine from './DrumLine';

import './DrumPad.css'

class DrumPad extends Component {
  render() {
    // const drumPad = drum.map(e => {
    //   return (
    //     <div key={e}>
    //       <span>{e}</span>
    //       <DrumLine playerLength={this.props.playerLength} drum={e} />
    //     </div>
    //   )
    // })
    const drumPad = Object.entries(this.props.pattern).map(drumLine => {
      return (
        <div key={drumLine[0]}>
          <span className="drumname">{drumLine[0]}</span>
          <DrumLine changePattern={this.props.changePattern} drumName={drumLine[0]} drumLine={drumLine[1]} />
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

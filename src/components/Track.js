import React, { Component } from 'react'
import Pad from '../components/Pad'

import '../styles/Track.scss'

// 가로로 <Pad /> 8개
class Track extends Component {
  render() {
    return (
      <div className="track">
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
      </div>
    )
  }
}

export default Track

import React, { Component } from 'react'
import Pad from '../components/Pad'

import '../styles/Track.scss'

// 가로로 <Pad /> 8개
class Track extends Component {
  render() {
    return (
      <div className="track">
        <Pad changeState={this.props.changeState} padNum={0} />
        <Pad changeState={this.props.changeState} padNum={1} />
        <Pad changeState={this.props.changeState} padNum={2} />
        <Pad changeState={this.props.changeState} padNum={3} />
        <Pad changeState={this.props.changeState} padNum={4} />
        <Pad changeState={this.props.changeState} padNum={5} />
        <Pad changeState={this.props.changeState} padNum={6} />
        <Pad changeState={this.props.changeState} padNum={7} />
      </div>
    )
  }
}

export default Track

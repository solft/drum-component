import React, { Component } from 'react'

import Node from './Node'

// <Node /> 9개 (한 비트 싸이클)
class Pad extends Component {
  render() {
    return (
      <div className="pad">
        <Node changeState={this.props.changeState} padNum={this.props.padNum} nodeNum={0} />
        <Node changeState={this.props.changeState} padNum={this.props.padNum} nodeNum={1} />
        <Node changeState={this.props.changeState} padNum={this.props.padNum} nodeNum={2} /> 
        <Node changeState={this.props.changeState} padNum={this.props.padNum} nodeNum={3} />
        <Node changeState={this.props.changeState} padNum={this.props.padNum} nodeNum={4} />
        <Node changeState={this.props.changeState} padNum={this.props.padNum} nodeNum={5} />
        <Node changeState={this.props.changeState} padNum={this.props.padNum} nodeNum={6} />
        <Node changeState={this.props.changeState} padNum={this.props.padNum} nodeNum={7} />
        <Node changeState={this.props.changeState} padNum={this.props.padNum} nodeNum={8} />
      </div>
    )
  }
}

export default Pad

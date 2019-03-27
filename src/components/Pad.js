import React, { Component } from 'react'

import Node from './Node'

// <Node /> 9개 (한 비트 싸이클)
class Pad extends Component {
  render() {
    return (
      <div>
        <Node/>
        <Node/>
        <Node/>
        
        <Node/>
        <Node/>
        <Node/>

        <Node/>
        <Node/>
        <Node/>
      </div>
    )
  }
}

export default Pad

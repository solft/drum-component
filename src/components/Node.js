import React, { Component } from 'react'

import '../styles/Node.scss'

// 작은 버튼 8개 컴포넌트
class Node extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       node: [
         false,
         false,
         false,
         false,
         false,
         false,
         false,
         false
       ]
    }
  }

  toggleButton = (index, e) => {
    let changeNode = this.state.node
    changeNode[index] = !changeNode[index]
    this.setState({
      node: changeNode
    })
  }

  render() {
    return (
      <div className="Node">
        <div onClick={(e) => this.toggleButton(0, e)} className={`box zero ${this.state.node[0] ? 'click' : ''}`}/>
        <div onClick={(e) => this.toggleButton(1, e)} className={`box one ${this.state.node[1] ? 'click':''}`}/>
        <div onClick={(e) => this.toggleButton(2, e)} className={`box two ${this.state.node[2] ? 'click':''}`}/>
        <div onClick={(e) => this.toggleButton(3, e)} className={`box three ${this.state.node[3] ? 'click':''}`}/>
        <div onClick={(e) => this.toggleButton(4, e)} className={`box four ${this.state.node[4] ? 'click':''}`}/>
        <div onClick={(e) => this.toggleButton(5, e)} className={`box five ${this.state.node[5] ? 'click':''}`}/>
        <div onClick={(e) => this.toggleButton(6, e)} className={`box six ${this.state.node[6] ? 'click':''}`}/>
        <div onClick={(e) => this.toggleButton(7, e)} className={`box seven ${this.state.node[7] ? 'click':''}`}/>
      </div>
    )
  }
}

export default Node

import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../styles/MusicController.scss'

// 재생, 다운, 생성 버튼
class MusicController extends Component {
  constructor(props) {
    super(props)
    this.handlePlay = this.handlePlay.bind(this)
    this.handleRedo = this.handleRedo.bind(this)
    this.handlePlus = this.handlePlus.bind(this)
  }

  handlePlay() {
    this.props.playMusic()
  }

  handleRedo() {
    this.props.generateMusic()
  }

  handlePlus() {
    this.props.printState()
  }
  
  render() {
    return (
      <div className="music-controller">
        <button className="btn" onClick={this.handlePlay}>
          <FontAwesomeIcon icon="play" className="fa-6x" />
        </button>
        <button className="btn" onClick={this.handleRedo}>
          <FontAwesomeIcon icon="redo-alt" className="fa-6x" />
        </button>
        <button className="btn" onClick={this.handlePlus}>
          <FontAwesomeIcon icon="plus" className="fa-6x" />
        </button>
        <button className="btn">
          <FontAwesomeIcon icon="download" className="fa-6x" />
        </button>
      </div>
    )
  }
}

export default MusicController

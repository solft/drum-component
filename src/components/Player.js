import React, { Component } from 'react'
import Track from './Track'
import MusicController from './MusicController'

import clap from '../drum/clap-808.wav'
import cowbell from '../drum/cowbell-808.wav'
import crash from '../drum/crash-808.wav'
import hihat from '../drum/hihat-808.wav'
import kick from '../drum/kick-808.wav'
import openhat from '../drum/openhat-808.wav'
import perc from '../drum/perc-808.wav'
import snare from '../drum/snare-808.wav'
import tom from '../drum/tom-808.wav'

// Player 9x64 배열을 가지고 있어야함
class Player extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      melody : [
          // 길이 64짜리 0으로 초기화된 배열 생성
        Array.apply(null, new Array(64)).map(Number.prototype.valueOf,0),
        Array.apply(null, new Array(64)).map(Number.prototype.valueOf,0),
        Array.apply(null, new Array(64)).map(Number.prototype.valueOf,0),
        Array.apply(null, new Array(64)).map(Number.prototype.valueOf,0),
        Array.apply(null, new Array(64)).map(Number.prototype.valueOf,0),
        Array.apply(null, new Array(64)).map(Number.prototype.valueOf,0),
        Array.apply(null, new Array(64)).map(Number.prototype.valueOf,0),
        Array.apply(null, new Array(64)).map(Number.prototype.valueOf,0),
        Array.apply(null, new Array(64)).map(Number.prototype.valueOf,0)
      ]
    }
  }

  printState = () => {
    console.log(this.state.melody[0])
    console.log(this.state.melody[1])
    console.log(this.state.melody[2])
    console.log(this.state.melody[3])
    console.log(this.state.melody[4])
    console.log(this.state.melody[5])
    console.log(this.state.melody[6])
    console.log(this.state.melody[7])
    console.log(this.state.melody[8])
  }

  // index 0~8, time 0~63
  // <Node />에서 버튼하나 클리하면 여기까지 이게 실행되어 해당 위치의 값을 반전시키고 상태를 변경함
  changeState = (index, time) => {
    console.log(`index = ${index}, time = ${time}`)
    let changeMelody = this.state.melody
    changeMelody[index][time] = changeMelody[index][time] ? 0 : 1
    this.setState({
      melody: changeMelody
    })
  }
  
  render() {
    return (
      <div>
        <Track changeState={this.changeState} />
        <MusicController printState={this.printState} />
      </div>
    )
  }
}

export default Player

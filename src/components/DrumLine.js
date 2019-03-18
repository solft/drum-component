import React, { Component } from 'react'

import './DrumLine.css'

// this.props.playerLength : 재생 길이(시간)
// this.props.drum : 재생 드럼 종류
class DrumLine extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       toggleArray: this.makeToggleArray(this.props.drumLine)
    }
  }

  makeToggleArray = (buttonArray) => {
    return (buttonArray.map(button => !!button))
  }

  clickHandler = (time) => {
    console.log(`time is ${time}`)
    console.log(`drum is ${this.props.drumName}`)
    this.props.changePattern(this.props.drumName, time)
  }

  render() {
    // const times = [...Array(Number(this.props.playerLength)).keys()]
    // const line1 = times.map(time => {
    //   return (
    //     <button key={time} className={time} onClick={() => this.clickHandler(time, this.props.drum)}>{time}</button>
    //   )
    // })
    const line = this.state.toggleArray.map((toggle, time) => (
      <button className={`${this.props.drumName} click${this.props.drumLine[time]}`} key={time} onClick={() => this.clickHandler(time)}></button>
    ))
    return (
      <span>
        {line}
      </span>
    )
  }
}

export default DrumLine

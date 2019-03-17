import React, { Component } from 'react'

// this.props.playerLength : 재생 길이(시간)
// this.props.drum : 재생 드럼 종류
class DrumLine extends Component {
  clickHandler = (time, drum) => {
    console.log(`this button is ${drum}의 ${time} 시간 째 버튼 입니다.`)
  }
  render() {
    const times = [...Array(Number(this.props.playerLength)).keys()]
    const line = times.map(time => {
      return (
        <button key={time} className={time} onClick={() => this.clickHandler(time, this.props.drum)}>{time}</button>
      )
    })
    return (
      <span>
        {line}
      </span>
    )
  }
}

export default DrumLine

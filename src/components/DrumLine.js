import React, { Component } from 'react'

// this.props.playerLength : 재생 길이(시간)
// this.props.drum : 재생 드럼 종류
class DrumLine extends Component {
  render() {
    const times = [...Array(Number(this.props.playerLength)).keys()]
    const line = times.map(time => {
      return (
        <button key={time} className={time}>{time}</button>
      )
    })
    return (
      <div>
        {line}
      </div>
    )
  }
}

export default DrumLine

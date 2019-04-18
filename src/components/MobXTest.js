import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import './MobXTest.css'

// TODO this.props에서 무한 루프로 속성이 연결된다.
@inject(({ melody }) => ({
  seedMelody: melody.seedMelody,
  changeMelody: melody.changeMelody
}))
@observer
class MobXTest extends Component {
  render() {
    const { seedMelody, changeMelody } = this.props
    console.log(this.props)
    console.log(seedMelody)
    const melodyLine = seedMelody.map((inst, row) => {
      const timeLine = inst.map((time, column) => (
        <button onClick={(e) => changeMelody(row, column, e)} key={column} className={`state${time}`}>{time}</button>
      ))
      return <div key={row}>{timeLine}</div>
    })
    return <div>{melodyLine}</div>
  }
}

export default MobXTest

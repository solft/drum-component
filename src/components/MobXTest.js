import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

// TODO this.props에서 무한 루프로 속성이 연결된다.
@inject('melody')
@observer
class MobXTest extends Component {
  render() {
    const { melody } = this.props
    console.log(this.props)
    console.log(melody)
    // const melodyLine = melody.map(inst => {
    //   const timeLine = inst.map(time => <span>{time}</span>)
    //   return (
    //     <div>
    //       {timeLine}
    //     </div>
    //   )
    // })
    return (
      <div>
        {/* {melodyLine} */}
      </div>
    )
  }
}

export default MobXTest

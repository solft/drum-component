import React, { Component } from 'react'
import Tone from 'tone'
import * as mm from '@magenta/music'
import { drum_to_note } from '../utils/converter'

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

// TODO [악기, 시간]인 2차원 배열을 notes로 변환하는 함수 만들기
// FIXME mm.sequences.quantizeNoteSequence를 거치면 startStep과 endStep이 0,1로 고정된다. 
// => startTime과 endTime이 없어서 그런듯. quantize되어 있는 Note는 변환할 필요가 없다는 말.
// => 입력 startTime과 endTime이 정렬되어 있지 않아도 동작함

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
      ],
      sound : {
        clapSound: new Tone.Player(clap).toMaster(),
        cowbellSound: new Tone.Player(cowbell).toMaster(),
        crashSound: new Tone.Player(crash).toMaster(),
        hihatSound: new Tone.Player(hihat).toMaster(),
        kickSound: new Tone.Player(kick).toMaster(),
        openhatSound: new Tone.Player(openhat).toMaster(),
        percSound: new Tone.Player(perc).toMaster(),
        snareSound: new Tone.Player(snare).toMaster(),
        tomSound: new Tone.Player(tom).toMaster(),
      },
      // Magenta Variable
      drumRNN: new mm.MusicRNN(
        'https://storage.googleapis.com/download.magenta.tensorflow.org/tfjs_checkpoints/music_rnn/drum_kit_rnn'
      ),
      drums: {
        notes: [
          {
            pitch: 36,
            quantizedStartStep: 0,
            quantizedEndStep: 1,
            isDrum: true
          },
          {
            pitch: 38,
            quantizedStartStep: 0,
            quantizedEndStep: 1,
            isDrum: true
          },
          {
            pitch: 42,
            quantizedStartStep: 0,
            quantizedEndStep: 1,
            isDrum: true
          },
          {
            pitch: 46,
            quantizedStartStep: 0,
            quantizedEndStep: 1,
            isDrum: true
          },
          {
            pitch: 42,
            quantizedStartStep: 2,
            quantizedEndStep: 3,
            isDrum: true
          },
          {
            pitch: 42,
            quantizedStartStep: 3,
            quantizedEndStep: 4,
            isDrum: true
          },
          {
            pitch: 42,
            quantizedStartStep: 4,
            quantizedEndStep: 5,
            isDrum: true
          },
          {
            pitch: 50,
            quantizedStartStep: 4,
            quantizedEndStep: 5,
            isDrum: true
          },
          {
            pitch: 36,
            quantizedStartStep: 6,
            quantizedEndStep: 7,
            isDrum: true
          },
          {
            pitch: 38,
            quantizedStartStep: 6,
            quantizedEndStep: 7,
            isDrum: true
          },
          {
            pitch: 42,
            quantizedStartStep: 6,
            quantizedEndStep: 7,
            isDrum: true
          },
          {
            pitch: 45,
            quantizedStartStep: 6,
            quantizedEndStep: 7,
            isDrum: true
          },
          {
            pitch: 36,
            quantizedStartStep: 8,
            quantizedEndStep: 9,
            isDrum: true
          },
          {
            pitch: 42,
            quantizedStartStep: 8,
            quantizedEndStep: 9,
            isDrum: true
          },
          {
            pitch: 46,
            quantizedStartStep: 8,
            quantizedEndStep: 9,
            isDrum: true
          },
          {
            pitch: 42,
            quantizedStartStep: 10,
            quantizedEndStep: 11,
            isDrum: true
          },
          {
            pitch: 48,
            quantizedStartStep: 10,
            quantizedEndStep: 11,
            isDrum: true
          },
          {
            pitch: 50,
            quantizedStartStep: 10,
            quantizedEndStep: 11,
            isDrum: true
          }
        ],
        quantizationInfo: { stepsPerQuarter: 4 },
        tempos: [{ time: 0, qpm: 120 }],
        totalQuantizedSteps: 11
      },
      twinkle: {
        notes: [
          {pitch: 60, startTime: 0.0, endTime: 0.5},
          {pitch: 60, startTime: 0.5, endTime: 1.0},
          {pitch: 67, startTime: 1.0, endTime: 1.5},
          {pitch: 67, startTime: 1.5, endTime: 2.0},
          {pitch: 69, startTime: 2.0, endTime: 2.5},
          {pitch: 69, startTime: 2.5, endTime: 3.0},
          {pitch: 67, startTime: 3.0, endTime: 4.0},
          {pitch: 65, startTime: 4.0, endTime: 4.5},
          {pitch: 65, startTime: 4.5, endTime: 5.0},
          {pitch: 64, startTime: 5.0, endTime: 5.5},
          {pitch: 64, startTime: 5.5, endTime: 6.0},
          {pitch: 62, startTime: 6.0, endTime: 6.5},
          {pitch: 62, startTime: 6.5, endTime: 7.0},
          {pitch: 60, startTime: 7.0, endTime: 8.0},
        ],
        totalTime: 8
      },
      results: {},
      final: {},
      notes: []
    }

    this.state.drumRNN.initialize()
  }

  playMusic = () => {
    // this.state.sound.clapSound.start()
    console.log('converter test')
    var temp = drum_to_note(this.state.melody)
    console.log(temp)
    this.setState({
      notes: temp
    })
  }

  printState = () => {
    console.log(this.state.melody[0])
    // console.log(this.state.melody[1])
    // console.log(this.state.melody[2])
    // console.log(this.state.melody[3])
    // console.log(this.state.melody[4])
    // console.log(this.state.melody[5])
    // console.log(this.state.melody[6])
    // console.log(this.state.melody[7])
    // console.log(this.state.melody[8])
    console.log(this.state.results)
    console.log(this.state.final)
    console.log(this.state.notes)
  }

  generateMusic = async () => {
    console.log('start make music')
    let cur_seq = this.state.results

    var predicted_sequence = await this.state.drumRNN.continueSequence(cur_seq, 20, 1).then(r => this.setState({ final: r }))
    console.log(predicted_sequence)
  }

  // index 0~8, time 0~63
  // <Node />에서 버튼하나 클리하면 여기까지 이게 실행되어 해당 위치의 값을 반전시키고 상태를 변경함
  changeState = (index, time) => {
    console.log(`index = ${index}, time = ${time}`)
    let changeMelody = this.state.melody
    changeMelody[index][time] = changeMelody[index][time] ? 0 : 1

    const temp = mm.sequences.quantizeNoteSequence(
      {
        ticksPerQuarter: 220,
        totalTime: 8,
        timeSignatures: [
          {
            time: 0,
            numerator: 4,
            denominator: 4
          }
        ],
        tempos: [
          {
            time: 0,
            qpm: 120
          }
        ],
        notes: this.state.notes
      },
      1
    )

    this.setState({
      melody: changeMelody,
      results: temp
    })
  }
  
  render() {
    return (
      <div>
        <Track changeState={this.changeState} />
        <MusicController printState={this.printState} playMusic={this.playMusic} generateMusic={this.generateMusic} />
      </div>
    )
  }
}

export default Player

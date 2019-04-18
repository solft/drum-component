import { observable, action } from 'mobx'
import { drum_to_note } from '../utils/converter'

export default class MelodyStore {
  @observable seedMelody = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
  ]

  @observable seedNote = []

  constructor(root) {
    this.root = root;
  }

  @action
  changeMelody = (inst, time) => {
    this.seedMelody[inst][time] = (this.seedMelody[inst][time] + 1) % 2
  }

  @action drumToNote = () => {
    this.seedNote = drum_to_note(this.seedMelody);
    console.log(this.seedNote);
  }
}
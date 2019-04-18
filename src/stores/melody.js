import { observable, action } from 'mobx'

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

  constructor(root) {
    this.root = root;
  }

  @action
  changeMelody = (inst, time) => {
    this.seedMelody[inst][time] = (this.seedMelody[inst][time] + 1) % 2
  }
}
import { observable, action } from 'mobx'

export default class MelodyStore {
  @observable seedMelody = [
    Array.apply(null, new Array(8)).map(Number.prototype.valueOf,0),
    Array.apply(null, new Array(8)).map(Number.prototype.valueOf,0),
    Array.apply(null, new Array(8)).map(Number.prototype.valueOf,0),
    Array.apply(null, new Array(8)).map(Number.prototype.valueOf,0),
    Array.apply(null, new Array(8)).map(Number.prototype.valueOf,0),
    Array.apply(null, new Array(8)).map(Number.prototype.valueOf,0),
    Array.apply(null, new Array(8)).map(Number.prototype.valueOf,0),
    Array.apply(null, new Array(8)).map(Number.prototype.valueOf,0),
    Array.apply(null, new Array(8)).map(Number.prototype.valueOf,0)
  ]

  constructor(root) {
    this.root = root;
  }

  @action
  changeMelody = (inst, time) => {
    this.seedMelody[inst][time] = (this.seedMelody[inst][time] + 1) % 2
  }
}
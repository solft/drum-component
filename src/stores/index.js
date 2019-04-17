import MelodyStore from './melody'

class RootStore {
  constructor() {
    this.melody = new MelodyStore(this);
  }
}

export default RootStore;
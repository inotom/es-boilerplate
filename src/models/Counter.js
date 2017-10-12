class Counter {
  constructor() {
    this.count = 0;
  }

  get() {
    return this.count;
  }

  up() {
    this.count += 1;
    return this;
  }

  static createNew() {
    return new Counter();
  }
}

export default Counter;

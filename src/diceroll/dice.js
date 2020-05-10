
export default class Dice {
  constructor() {
    this.seed = 0;
  }

  static roll() {
    const random = Math.round(Math.random() * 10);

    return random;
  }
}

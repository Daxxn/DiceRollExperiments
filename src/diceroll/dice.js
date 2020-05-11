
export default class Dice {
  static roll() {
    const random = Math.round(Math.random() * 10);

    console.log(`random: ${random}`);
    const adjRandom = Math.round(random * 0.6);
    console.log(`adjRandom: ${adjRandom}`);
    return this.checkDice(adjRandom);
  }

  static checkDice(num) {
    if (num === undefined) {
      return 0;
    }

    if (num > 6) {
      return 6;
    } else if (num < 1) {
      return 1;
    }

    return num;
  }
}

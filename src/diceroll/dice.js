import diceSelector from "../components/DiceSelector";

/**
 * Dice control class.
 */
export default class Dice {
  constructor() {
    this.flip = false;
  }

  static roll() {
    const random = Math.round(Math.random() * 6);

    console.log(`random: ${random}`);
    const adjRandom = Math.round(random);
    console.log(`adjRandom: ${adjRandom}`);
    return this.checkDice(adjRandom);
  }

  /**
   * Checks the number given for the correct dice range (1-6) and returns a boolean.
   * @param {Number} num The number to check.
   */
  static checkDice(num) {
    if (num === undefined) {
      return 0;
    }

    if (num > 6) {
      return 6;
    }

    if (num < 1) {
      return 1;
    }

    return num;
  }

  /**
   * Creates an array of dice 'numbers' and returns them.
   * @param {Number} count The number of dice 'numbers' to create.
   */
  static rollDiceArray(count) {
    const output = [];
    for (let i = 0; i < count; i += 1) {
      const r = this.roll();
      output.push(r);
    }
    return output;
  }

  /**
   * <Dep>
   * Selects the image path that corresponds to the numbers in the array.
   * @param {array} numbers The dice[number] array.
   */
  static createDiceArray(numbers) {
    const output = [];
    for (let i = 0; i < numbers.length; i += 1) {
      output.push(diceSelector(numbers[i]));
    }
    return output;
  }

  /**
   * Parses the input string and returns a number array.
   * @param {string} input The input string to parse.
   */
  static parseInputString(input) {
    const output = [];
    for (let i = 0; i < input.length; i += 1) {
      const numParse = Number(input[i]);
      if (numParse !== undefined) {
        if (this.checkDice(numParse)) {
          output.push(Number(input[i]));
        }
      }
    }
    return output;
  }
}

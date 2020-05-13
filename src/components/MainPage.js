import React, { Component } from 'react';
import '../styles/MainPage.css';
import DiceMethods from '../diceroll/dice';
import DiceContainer from './DiceContainer';
import CountSelector from './CountSelector';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diceCount: 4,
      input: '0000',
      dice: [],
    };

    this.onDiceInput = this.onDiceInput.bind(this);
    this.onDiceRoll = this.onDiceRoll.bind(this);
    this.onCountClick = this.onCountClick.bind(this);
  }

  componentDidMount() {
    this.onDiceRoll();
  }

  onDiceRoll() {
    const roll = DiceMethods.rollDiceArray(this.state.diceCount);
    console.log('test');
    this.setState(() => ({
      dice: roll,
      input: roll.join(''),
    }));
  }

  /**
   * Updates the individual dice input that changed.
   * @param {Event} e Dice input event args.
   */
  onDiceInput(e) {
    const val = e.target.value;
    const output = DiceMethods.parseInputString(val);
    this.setState((state) => ({
      dice: output,
      input: val,
      diceCount: val.length,
    }));
  }

  /**
   * Triggered when one of the dice count buttons is clicked.
   * @param {Event} e event args
   */
  onCountClick(e) {
    const buttonKey = e.target.id;
    if (buttonKey !== undefined) {
      if (buttonKey === 'up') {
        this.setState((state) => ({
          diceCount: state.diceCount + 1 <= 20 ? state.diceCount + 1 : 20,
        }));
      } else if (buttonKey === 'dn') {
        this.setState((state) => ({
          diceCount: state.diceCount - 1 >= 1 ? state.diceCount - 1 : 0,
        }));
      } else {
        console.error('Button id doesnt match any known buttons for this function.');
      }
    }
  }

  /**
   * <Dep>
   * Creates an array of DiceDisplay JSX objects.
   */
  initDice() {
    this.setState((state) => ({
      dice: DiceMethods.createDiceArray(state.diceCount),
    }));
  }

  render() {
    // const DiceDisplays = this.state.imges.map((img) => <DiceDisplay number={img} />);
    return (
      <div className="App">
        <CountSelector count={this.state.diceCount} countClick={this.onCountClick} />
        <input type="text" onChange={this.onDiceInput} value={this.state.input} />
        <DiceContainer allDice={this.state.dice} />
        <button type="button" onClick={this.onDiceRoll}>Roll Dice</button>
      </div>
    );
  }
}

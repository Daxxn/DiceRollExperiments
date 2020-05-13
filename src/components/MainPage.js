import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MainPage.css';
import DiceMethods from '../diceroll/dice';
import DiceContainer from './DiceContainer';
import DiceDisplay from './DiceDisplay';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '0000',
      dice: this.initDice(),
    };

    this.onDiceInput = this.onDiceInput.bind(this);
    this.onDiceRoll = this.onDiceRoll.bind(this);
  }

  onDiceRoll() {
    // const newRoll = DiceMethods.rollDiceArray(this.props.diceCount);
    // this.setState({
    //   dice: newRoll,
    // });
    this.setState({
      dice: this.initDice(),
    });
  }

  /**
   * Updates the individual dice input that changed.
   * @param {Event} e Dice input event args.
   */
  onDiceInput(e) {
    const val = e.target.value;
    console.log(val);
    const output = [];
    for (let i = 0; i < val.length; i += 1) {
      const inpNum = Number(val[i]);
      if (DiceMethods.checkDice(inpNum)) {
        output.push(
          <DiceDisplay number={inpNum} id={i} />,
        );
      }
    }
    this.setState((state) => ({
      dice: output,
      input: val,
    }));
  }

  initDice() {
    const output = [];
    for (let i = 0; i < this.props.diceCount; i += 1) {
      output.push(
        <DiceDisplay number={DiceMethods.roll()} id={i} />,
      );
    }
    return output;
  }

  render() {
    // const DiceDisplays = this.state.imges.map((img) => <DiceDisplay number={img} />);
    return (
      <div className="App">
        <input type="text" onChange={this.onDiceInput} value={this.state.input} />
        <DiceContainer allDice={this.state.dice} />
        <button type="button" onClick={this.onDiceRoll}>Roll Dice</button>
      </div>
    );
  }
}
MainPage.propTypes = {
  diceCount: PropTypes.number.isRequired,
};

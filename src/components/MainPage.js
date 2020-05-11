import React from 'react';
import PropTypes from 'prop-types';
import diceSelector from './DiceSelector';
import '../styles/MainPage.css';
import DiceDisplay from './DiceDisplay';
import DiceMethods from '../diceroll/dice';
import Dice from '../diceroll/dice';
import DiceContainer from './DiceContainer';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: [],
      imges: [],
    };

    this.onDiceSelect = this.onDiceSelect.bind(this);
    this.onDiceRoll = this.onDiceRoll.bind(this);
  }

  /**
   * Triggers the dice update.
   * @param {Event} e Event handler input.
   */
  onDiceSelect(e) {
    // let val = Number(e.target.value);

    // val = DiceMethods.checkDice(val);

    // const img = diceSelector(val);

    // this.setState({
    //   dice: val,
    //   imge: img,
    // });
  }

  onDiceRoll() {
    // OLD
    // const roll = DiceMethods.roll();
    // this.setState({
    //   dice: roll,
    //   imge: diceSelector(roll),
    // });
    const newRoll = DiceMethods.rollDiceArray(this.props.diceCount);
    const newDice = DiceMethods.createDiceArray(newRoll);
    this.setState({
      dice: newRoll,
      imges: newDice,
    });
  }

  render() {
    const DiceDisplays = this.state.imges.map((img) => <DiceDisplay imge={img} />);
    return (
      <div className="App">
        <input type="number" onChange={this.onDiceSelect} />
        <DiceContainer allDice={DiceDisplays} />
        <button type="button" onClick={this.onDiceRoll}>Roll Dice</button>
        <p>{this.state.dice}</p>
      </div>
    );
  }
}
MainPage.propTypes = {
  diceCount: PropTypes.number.isRequired,
}

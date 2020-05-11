import React from 'react';
import diceSelector from './DiceSelector';
import '../styles/MainPage.css';
import DiceDisplay from './DiceDisplay';
import DiceMethods from '../diceroll/dice';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: 0,
      imge: diceSelector(0),
    };

    this.onDiceSelect = this.onDiceSelect.bind(this);
    this.onDiceRoll = this.onDiceRoll.bind(this);
  }

  /**
   * Triggers the dice update.
   * @param {Event} e Event handler input.
   */
  onDiceSelect(e) {
    let val = Number(e.target.value);

    val = DiceMethods.checkDice(val);

    const img = diceSelector(val);

    this.setState({
      dice: val,
      imge: img,
    });
  }

  onDiceRoll() {
    const roll = DiceMethods.roll();
    this.setState({
      dice: roll,
      imge: diceSelector(roll),
    });
  }

  render() {
    return (
      <div className="App">
        <input type="number" onChange={this.onDiceSelect} />
        <DiceDisplay imge={this.state.imge} />
        <button type="button" onClick={this.onDiceRoll}>Roll Dice</button>
        <p>{this.state.dice}</p>
      </div>
    );
  }
}

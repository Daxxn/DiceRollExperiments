import React from 'react';
import dice3 from '../diceImg/Dice-3.svg';
import dice1 from '../diceImg/Dice-1.svg';
import Dice from '../diceroll/dice';
import DiceDisplay from './DiceDisplay';
import '../styles/MainPage.css';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: 42,
    };
  }

  triggerDice() {
    this.setState({
      dice: Dice.roll(),
    });
  }

  render() {
    return (
      <div className="App">
        <img src={dice3} id="dice3" alt="" />
        <img src={dice1} id="dice1" alt="" className="dice-spacing" />
        <DiceDisplay dice={this.state.dice} />
      </div>
    );
  }
}

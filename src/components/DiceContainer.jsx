import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DiceDisplay from './DiceDisplay';

export default class DiceContainer extends Component {
  render() {
    const diceData = [];
    for (let i = 0; i < this.props.allDice.length; i += 1) {
      diceData.push(<DiceDisplay key={i} number={this.props.allDice[i]} />);
    }
    return (
      <ul>
        {diceData}
      </ul>
    );
  }
}
DiceContainer.propTypes = {
  allDice: PropTypes.arrayOf(PropTypes.number).isRequired,
};

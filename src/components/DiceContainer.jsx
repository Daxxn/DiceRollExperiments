import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DiceDisplay from './DiceDisplay';

export default class DiceContainer extends Component {
  render() {
    return (
      <ul>
        {this.props.allDice}
      </ul>
    );
  }
}
DiceContainer.propTypes = {
  allDice: PropTypes.arrayOf(DiceDisplay).isRequired,
};
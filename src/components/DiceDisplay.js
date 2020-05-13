import React from 'react';
import PropTypes from 'prop-types';
import '../styles/DiceDisplay.css';
import DiceSelector from './DiceSelector';

export default function DiceDisplay(props) {
  return (
    <img className="dice-image" src={DiceSelector(props.number)} alt="not found." />
  );
}
DiceDisplay.propTypes = {
  number: PropTypes.number.isRequired,
};

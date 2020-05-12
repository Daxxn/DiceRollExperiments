import React from 'react';
import PropTypes from 'prop-types';
import '../styles/DiceDisplay.css';
import DiceSelector from './DiceSelector';

export default function DiceDisplay(props) {
  return (
    <div id={props.id}>
      <img className="dice-image" src={DiceSelector(props.number)} alt="not found." />
    </div>
  );
}
DiceDisplay.propTypes = {
  id: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
};

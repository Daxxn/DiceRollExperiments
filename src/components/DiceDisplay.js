import React from 'react';
import PropTypes from 'prop-types';
import '../styles/DiceDisplay.css';

export default function DiceDisplay(props) {
  return (
    <div>
      <img className="dice-image" src={props.imge} alt="not found." />
    </div>
  );
}
DiceDisplay.propTypes = {
  imge: PropTypes.string.isRequired,
};

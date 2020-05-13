import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CountSelector extends Component {
  render() {
    return (
      <div>
        <p>{this.props.count}</p>
        <button id="up" type="button" onClick={this.props.countClick}>/\</button>
        <button id="dn" type="button" onClick={this.props.countClick}>\/</button>
      </div>
    );
  }
}
CountSelector.propTypes = {
  count: PropTypes.number.isRequired,
  countClick: PropTypes.func.isRequired,
};

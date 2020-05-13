import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/CountSelector.css';

export default class CountSelector extends Component {
  render() {
    return (
      <div>
        {this.props.count}
        <div>
          <button id="dn" type="button" onClick={this.props.countClick}>\/</button>
          <button id="up" type="button" onClick={this.props.countClick}>/\</button>
        </div>
      </div>
    );
  }
}
CountSelector.propTypes = {
  count: PropTypes.number.isRequired,
  countClick: PropTypes.func.isRequired,
};

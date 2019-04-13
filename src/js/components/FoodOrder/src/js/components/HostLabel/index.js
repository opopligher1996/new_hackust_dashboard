import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class HostLabel extends Component {
  render() {
    const { type, text, onClickFunc, size } = this.props;
    if(size)
      return (<button className={type} style={{height: size}} onClick={() => onClickFunc()}> {text} </button>)
    else
      return (<button className={type} onClick={() => onClickFunc()}> {text} </button>)
  }
}

HostLabel.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClickFunc: PropTypes.func.isRequired
};

export default HostLabel;

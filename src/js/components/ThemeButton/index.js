import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import './styles.scss';

class ThemeButton extends Component {
  render() {
    const { type, text, onClickFunc } = this.props;

    return (
      <Button
        className={type}
        type="primary"
        onClick={onClickFunc || null}
      >
        {text}
      </Button>
    )
  }
}

ThemeButton.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClickFunc: PropTypes.func.isRequired
};

export default ThemeButton;

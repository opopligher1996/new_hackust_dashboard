import React, { PureComponent } from 'react';
import './styles.scss';

class Title extends PureComponent {
  render() {
    const { size, text } = this.props;
    return (
      <div className='title'>
        <span
          className='text'
          style={{ fontSize: size }} >
        {text}</span>
        <div className='divider' />
      </div>
    )
  }
}

export default Title;

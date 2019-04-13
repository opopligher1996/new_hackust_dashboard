import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import './styles.scss';

class Reminder extends PureComponent {
  render() {
    return (
      <div className='reminder'>
        <Icon type="exclamation-circle" />
        <span>{this.props.text}</span>
      </div>
    )
  }
}

export default Reminder;

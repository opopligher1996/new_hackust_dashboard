import { DatePicker } from 'antd';
import React, { Component } from 'react';
import './styles.scss';

class ThemeDatePicker extends Component {

  render() {
    let config = {}
    console.log('this.props.onChange', this.props.onChange);
    if(this.props.onChange && this.props.onChange())
      config.onChange = this.prop.onChange;
    return (
      <DatePicker className='theme-datepicker' {...config} />
    )
  }
}

export default ThemeDatePicker;

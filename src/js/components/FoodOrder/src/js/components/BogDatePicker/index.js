import React, { Component } from 'react';
import { find, filter, map } from 'lodash';
import BogInput from '../BogInput';
import { DatePicker } from 'antd';
import './styles.scss'

class BogDatePicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openDatePicker: false,
      date: null,
      dateString: ''
    }
  }

  inputOnClick = () => {
    console.log('inputOnClick');
    this.setState(prevState => ({ openDatePicker: !prevState.openDatePicker }))
  }

  dateOnChange = (date, dateString) => {
    const { onChangeFunc } = this.props;
    console.log('dateOnChange');
    this.setState({ date, dateString });
    if(!!onChangeFunc)
      onChangeFunc(date);
  }

  render() {
    const { dateString, openDatePicker } = this.state;
    return (
        <div
          className='bog-datepicker'
          onClick={this.inputOnClick}>
          <BogInput
            {... this.props}
            readOnly={true}
            suffixIconName='caret-down'
            value={dateString}
          />
            <DatePicker
              className='datepicker'
              disabled
              onChange={this.dateOnChange}
              open={openDatePicker}
             />
        </div>
    )
  }
}

export default BogDatePicker

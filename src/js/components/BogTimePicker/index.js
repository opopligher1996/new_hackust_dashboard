import React, { Component } from 'react';
import { find, filter, map } from 'lodash';
import moment from 'moment';
import { TimePicker } from 'antd';
import BogInput from '../BogInput';
import './styles.scss'

class BogTimePicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openTimePicker: false,
      time: null,
      timeString: ''
    }
  }

  inputOnClick = () => {
    console.log('inputOnClick');
    this.setState(prevState => ({ openTimePicker: !prevState.openTimePicker }))
  }

  timeOnChange = (time, timeString) => {
    const { onChangeFunc } = this.props;
    console.log('dateOnChange');
    this.setState({ time, timeString });
    if(!!onChangeFunc)
      onChangeFunc(time, timeString);
  }

  render() {
    const { time, timeString, openTimePicker } = this.state;
    const { step = 30 } = this.props;
    const format = 'HH:mm';
    return (
        <div
          className='bog-timepicker'
          onClick={this.inputOnClick}>
          <BogInput
            {... this.props}
            readOnly={true}
            suffixIconName='caret-down'
            value={timeString}
          />
            <TimePicker
              defaultValue={moment('19:00', format)}
              format={format}
              open={openTimePicker}
              minuteStep={step}
              onChange={this.timeOnChange}
            />
        </div>
    )
  }
}

export default BogTimePicker

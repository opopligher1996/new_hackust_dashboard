import React, { Component } from 'react';
import { Link } from "react-router-dom";
import FlowLayout from '../../FlowLayout';
import Button from '../../../components/ThemeButton';
import BogInput from '../../../components/BogInput';
import BogDatePicker from '../../../components/BogDatePicker';
import BogTimePicker from '../../../components/BogTimePicker';
import Reminder from '../../../components/Reminder';
import LocationSelector from '../../../components/LocationSelector';
import { Row, Col, Radio } from 'antd';
import './styles.scss';
const RadioGroup = Radio.Group;

class Basics extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      date: '',
      time: '',
      timeString: '',
      pickUp: true
    }
  }

  onSelectPickUp = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      pickUp: e.target.value,
    });
  }

  render() {
    const { title, date, timeString } = this.state;

    return (
      <FlowLayout
        title='Time to be a host'
        description='Let others to be your guests. Proudly introduce your culture to them. Connection established.'
        step='Step 1: Start with some Basic information'
        percent={20}
      >
        <Col span={16} className='listing-basics-container'>
          <Row>
            <BogInput
              placeholder='Name of the event (e.g. Enjoy hotpot with me from Asian!)'
              onChangeFunc={val => {
                this.setState({ title: val });
              }}
            />
          </Row>
          <Row>
            <Col span={12}>
              <BogDatePicker
                placeholder='Date'
                prefixIconName='calendar'
                iconTheme='outlined'
                onChangeFunc={(date) => {
                  this.setState({ date});
                }}
              />
            </Col>
            <Col span={12}>
              <BogTimePicker
                placeholder='Time'
                prefixIconName='clock-circle'
                iconTheme='outlined'
                onChangeFunc={(time, timeString) => {
                  this.setState({ time, timeString });
                }}
              />
            </Col>
          </Row>
          <Row>
            <RadioGroup onChange={this.onSelectPickUp} value={this.state.pickUp}>
              <Row>
                <Radio value={true}>
                  Guest(s) will come to my place directly
                </Radio>
              </Row>
              <Row>
                <Radio value={false}>
                  I will pick up the guest(s)
                </Radio>
              </Row>
            </RadioGroup>
          </Row>
          <Row>
            <Reminder
              text='Your address will be disclosed to the guest(s) who paid and confirmed the booking one day before the event'
            />
          </Row>
          <Row>
            <LocationSelector />
          </Row>
          <Link key={'listing-basics-link'} to={'/listing/experience'}>
            <Button
              type='btn primary'
              text='Continue'
            />
          </Link>
        </Col>
      </FlowLayout>
    )
  }
}

export default Basics;

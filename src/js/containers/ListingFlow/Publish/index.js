import React, { Component } from 'react';
import { Row, Col, Icon, Input } from 'antd';
import { Link } from "react-router-dom";
import Button from '../../../components/ThemeButton';
import FlowLayout from '../../FlowLayout';
import Card from '../../../components/CardView';
import BogDropdown from '../../../components/BogDropdown';
import BogInput from '../../../components/BogInput';
import Reminder from '../../../components/Reminder';
import Title from '../../../components/Title';
import BalanceSheet from '../../../components/BalanceSheet';
import Celebrate from '../../../../public/images/beer.svg';
import './styles.scss';

class Publish extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  valueOnChange = (key, val) => {
    this.setState({
      [key]: val
    })
  }

  render() {
    return (
      <FlowLayout
        title='You are Awesome'
        description='Your event has been published! Anyone around the world can finally have a taste of your culture.'
        step='All set! Your event has been published!'
        percent={100}
      >
        <Row className='publish-container'>
          <img src={Celebrate} className='illustration'/>
          <Link key={'listing-finish-link'} to={'/demo'}>
            <Button
              type='btn primary'
              text='Go to My Listing'
            />
          </Link>
        </Row>
      </FlowLayout>
    )
  }
}

export default Publish;

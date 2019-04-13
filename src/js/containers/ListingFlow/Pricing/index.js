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
import './styles.scss';

class Pricing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slots: 0,
      price: 0,
      currency: 'HKD'
    }
  }

  valueOnChange = (key, val) => {
    this.setState({
      [key]: val
    })
  }

  render() {
    const { slots, price, currency } = this.state;
    const slotsOptions = ['1', '2', '3', '4', '5'];
    const currencyOptions = ['HKD', 'USD', 'Yen'];
    return (
      <FlowLayout
        title='Time to be a host'
        description='Let others to be your guests. Proudly introduce your culture to them. Connection established.'
        step='Step 4: Almost done! Don’t forget to set the price and quota'
        percent={88}
      >
        <Row>
          <Col span={16} className='pricing-container'>
            <Row className='slot-settings-container'>
              <BogDropdown
                items={slotsOptions}
                placeholder='How many guest(s) you want to accommodate'
                prefixIconName='team'
                iconTheme='outlined'
                onChangeFunc={index => this.valueOnChange('slots', parseInt(slotsOptions[index]))}
              />
            </Row>
            <Row className='price-settings-container'>
              <Col sm={24} md={12} className='price-input'>
                <BogInput
                  placeholder='Price per guest'
                  prefixIconName='dollar'
                  iconTheme='outlined'
                  onChangeFunc={val => this.valueOnChange('price', parseFloat(val))}
                />
              </Col>
              <Col sm={24} md={12} className='currency-input'>
                <BogDropdown
                  items={['HKD', 'USD', 'Yen']}
                  placeholder='Currency'
                  prefixIconName='gold'
                  iconTheme='outlined'
                  onChangeFunc={index => this.valueOnChange('currency', currencyOptions[index])}
                />
              </Col>
            </Row>
            <Row className='reminder-container'>
              <Reminder
                text='Other hosts usually set the price range between $200 - $300 HKD'
              />
            </Row>
            <Row>
              <Title
                text='You can earn'
                size={24}
              />
              <BalanceSheet
                items={[
                  {
                    name: 'Net received',
                    net: price * slots,
                    bold: true
                  },
                  {
                    name: 'Transaction Fee (10% per guest)',
                    net: Math.round( -1 * price * 0.1 * slots * 10) / 10,
                    display: Math.round( price * 0.1 * 10) / 10,
                  },
                ]}
                currency={currency}
                sumName='Net profit'
              />
            </Row>
            <Row className='btn-row'>
              <Link className='back-btn' key={'listing-intro-link'} to={'/listing/intro'}>
                <Button
                  type='btn secondary'
                  text='Go Back'
                />
              </Link>
              <Link key={'listing-publish-link'} to={'/listing/publish'}>
                <Button
                  type='btn primary'
                  text='Publish my Event!'
                />
              </Link>
            </Row>
          </Col>
        </Row>
      </FlowLayout>
    )
  }
}

export default Pricing;

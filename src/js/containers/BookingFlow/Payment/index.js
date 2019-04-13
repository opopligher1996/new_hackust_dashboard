import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Radio, Input, Row, Col } from 'antd';
import FlowLayout from '../../FlowLayout';
import Card from '../../../components/CardView';
import Title from '../../../components/Title';
import Button from '../../../components/ThemeButton';
import Visa from '../../../../public/images/visa.svg';
import Master from '../../../../public/images/master_card.svg';
import Paypal from '../../../../public/images/paypal.svg';
import './styles.scss';

const RadioGroup = Radio.Group;

class Payment extends Component {
  constructor(props) {
    super(props);
    console.log('props')
    console.log(props)
    if (props.location.data)
      this.state = { event: props.location.data.event}
    else
      this.state =  { event: {
                'eventid':3,
                'activity_name':'Enjoy hotpot with my Chinese family!',
                'userid':3,
                'rank':'bronze',
                'name':'Simon',
                'duration':180,
                'intro':'hi',
                'date':'20-04-2019',
                'time':'18:00 - 19:00',
                'subjects':['KPOP', 'Music', 'Art'],
                'languages':['Cantonese', 'English'],
                'rating':4.5,
                'price':500,
                'address':'0.2 km away from Shopping mall',
                'year': 'CHEM Year 2, HKUST',
                'location_x': 22.338551,
                'location_y': 114.153585
              }}
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const radioStyle = {
      display: 'block',
      height: '70px',
      lineHeight: '70px',
      width:'800px'
    };

    const event = this.state.event
    return (
      <FlowLayout
        title='Hello! 你好! Bonjour!'
        description='You are now connected with Susan. Just some simple steps to make it real. '
        step='Step 2: Payment'
        percent={40}
      >
      <Col span={16}>
          <div className={`title-div`}>
            <Title
              text={'Choose a Payment Method'}
              size={24}
            />
          </div>
          <div>
            <RadioGroup onChange={this.onChange} value={this.state.value}>
              <Radio style={radioStyle} value={1}>
                <img src={require('../../../../public/images/visa.svg')}/>
                <font className={`radio-description`}><font className={'radio-description-bold'}>Visa</font> <font className='radio-description-small'>Ending with 0018</font> </font><font className={`radio-description-right`}>Expires in 09/19</font>
              </Radio>
              <svg height="10px" width="700px">
                <line x1="0" y1="0" x2="1000" y2="0" style={{stroke:'#dedede'}}/>
              </svg>
              <Radio style={radioStyle} value={2}>
                <img src={Master}/>
                <font className={`radio-description`}><font className={'radio-description-bold'}>MasterCard</font> <font className='radio-description-small'>Ending with 2515</font></font><font className={`radio-description-right`}>Expires in 09/19</font>
              </Radio>
              <svg height="10px" width="700px">
                <line x1="0" y1="0" x2="1000" y2="0" style={{stroke:'#dedede'}}/>
              </svg>
              <Radio style={radioStyle} value={3}>
                <img src={Paypal}/>
                <font className={`radio-description`}><font className={'radio-description-bold'}>Paypal</font> <font className='radio-description-small'>ccsky***@gmail.com</font></font>
              </Radio>
              <svg height="10px" width="700px">
                <line x1="0" y1="0" x2="1000" y2="0" style={{stroke:'#dedede'}}/>
              </svg>
            </RadioGroup>
            <div className='title-div'>
              <font className={`total-div`}>Add a new Payment Method</font><font className='radio-description-right total-amount' style={{left:'550px'}}>Total: ${event.price} HKD</font>
            </div>
            <div className='title-div'>
              <Link key={'listing-basics-link'}
                to={{ pathname: '/booking/detail', data:{event: event} }}
              >
                <Button
                  type = 'btn secondary'
                  text = 'Go back'
                  onClickFunc={this.decrementFunc}
                />
              </Link>
              <Link key={'listing-basics-link'}
                to={{ pathname: '/booking/intro', data:{event: event} }}
                className='button-padding'
              >
                <Button
                  type = 'btn primary'
                  text = 'Confirm and Continue'
                  onClickFunc={this.decrementFunc}
                />
              </Link>
            </div>
          </div>
      </Col>
      <Col span={8} className='title-div'>
        <Card
          name={event.name}
          user={event.userid}
          activity={event.eventid}
          subjects={event.subjects}
          languages={event.languages}
          rating={event.rating}
          address={event.address}
          year={event.year}
          rank={event.rank}
          width='28vw'
        />
      </Col>
      </FlowLayout>
    )
  }
}

export default Payment;

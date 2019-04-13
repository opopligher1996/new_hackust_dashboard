import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Row, Col} from 'antd';
import Icon from 'antd/lib/Icon';
import FlowLayout from '../../FlowLayout';
import Button from '../../../components/ThemeButton';
import Card from '../../../components/CardView';
import Title from '../../../components/Title';
import BogDatePicker from '../../../components/BogDatePicker';
import BogTimePicker from '../../../components/BogTimePicker';
import BogInput from '../../../components/BogInput';
import MapView from '../../../components/MapView';
import Meat from '../../../../public/images/meat.svg';
import Fork from '../../../../public/images/fork.svg';
import Drink from '../../../../public/images/drink.svg';
import Pet from '../../../../public/images/pet.svg';
import NoAlcohol from '../../../../public/images/no-alcohol.svg';
import NoSmoking from '../../../../public/images/no-smoking.svg';
import './styles.scss';

class Detail extends Component {
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

  render() {
    const event = this.state.event
    return (
      <FlowLayout
        title='Hello! 你好! Bonjour!'
        description='You are now connected with Susan. Just some simple steps to make it real. '
        step='Step 1: Confirm some details'
        percent={20}
      >
        <Col span={16}>
          <Row className='padding-row'>
            <Col span={9}>
              <BogInput
                placeholder='Placeholder'
                prefixText='Date'
                suffixIconName='calendar'
                value={event.date}
              />
            </Col>
            <Col span={9} className='button-padding'>
              <BogInput
                placeholder='Placeholder'
                prefixText='Time'
                suffixIconName='clock-circle'
                value={event.time}
              />
            </Col>
          </Row>
          <Row className='padding-row'>
            <Title
              text={'Reception'}
              size={24}
            />
          </Row>
          <Row className='padding-row'>
            <MapView
              defaultZoom = {17}
              usr_lat={event.location_x}
              usr_lng={event.location_y}
              map_height="212px"
              map_width="627px"
              show_price= {false}
            />
          </Row>
          <Row className='padding-row'>
            <Icon type="info-circle" theme="outlined" />
            <font className={'detail-icon-div-font'}>Your host will pick you up at <font className={'font-bold'}>6:45pm</font> at <font className={'font-bold'}>Hong Kong MTR Station</font> on that day</font>
          </Row>
          <Row className='padding-row'>
            <Title
              text={'About the meal'}
              size={24}
            />
          </Row>
          <Row className='padding-row'>
            <div className={'meal-div'}>
              <img src={Fork}/><font className={'meal-div-font'}>Chinese Food</font>
              <img src={Meat} className='icon-padding'/><font className={'meal-div-font'}>Contains meat</font>
              <img src={Drink} className='icon-padding'/><font className={'meal-div-font'}>Drink included</font>
            </div>
          </Row>
          <Row className='padding-row'>
            <Title
              text={'Precautions'}
              size={24}
            />
          </Row>
          <Row className='padding-row'>
            <div className={'precautions-div'}>
              <img src={NoSmoking}/><font className={'precautions-div-font'}>No Smoking</font>
              <img src={NoAlcohol} className='icon-padding'/><font className={'precautions-div-font'}>No Alcohol</font>
              <img src={Pet} className='icon-padding'/><font className={'precautions-div-font'}>Pet inside</font>
            </div>
          </Row>
          <Row className='padding-row'>
            <Link key={'listing-basics-link'}
              to={{ pathname: '/booking/payment', data:{event: event} }}
            >
              <Button
                text='Confirm and Continue'
              />
            </Link>
          </Row>
        </Col>
        <Col>
          <div className='padding-row'>
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
              width='25vw'
            />
          </div>
        </Col>
      </FlowLayout>
    )
  }
}

export default Detail;

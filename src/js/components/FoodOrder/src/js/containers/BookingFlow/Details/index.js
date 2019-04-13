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
import MapView from '../../../components/MapView';
import Meat from '../../../../public/images/meat.svg';
import Fork from '../../../../public/images/fork.svg';
import Drink from '../../../../public/images/drink.svg';
import Pet from '../../../../public/images/pet.svg';
import NoAlcohol from '../../../../public/images/no-alcohol.svg';
import NoSmoking from '../../../../public/images/no-smoking.svg';
import './styles.scss';

class Detail extends Component {
  render() {
    return (
      <FlowLayout
        title='Hello! 你好! Bonjour!'
        description='You are now connected with Susan. Just some simple steps to make it real. '
        step='Step 1: Confirm some details'
        percent={20}
      >
        <Col span={16}>
          <Row className='padding-row'>
            <Col span={8}>
              <BogDatePicker
                placeholder='Date'
                prefixIconName='calendar'
                iconTheme='outlined'
              />
            </Col>
            <Col span={8} className='button-padding'>
              <BogTimePicker/>
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
              usr_lat={22.351082}
              usr_lng={114.199871}
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
            <Link key={'listing-basics-link'} to={'/booking/payment'}>
              <Button
                text='Confirm and Continue'
              />
            </Link>
          </Row>
        </Col>
        <Col>
          <div className='padding-row'>
            <Card
              name={'Tom Tsui'}
              subjects={['Economics', 'Politics', 'Chinese']}
              languages={['Japanes', 'Chinese', 'English']}
              rating={3}
              address={'Tin Shui Wai'}
              year={'Year 3'}
              width={'25vw'}
            />
          </div>
        </Col>
      </FlowLayout>
    )
  }
}

export default Detail;

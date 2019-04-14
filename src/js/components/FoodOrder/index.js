import React, { Component } from 'react';
import { Card } from 'antd';
import { Avatar } from 'antd';
import { Icon } from 'antd';
import { Tag } from 'antd';
import Rating from '../../components/Rating';
import TagView from '../../components/TagView';
import {Row, Col} from 'antd';
import ProgressBar from '../../components/ProgressBar';
import BogAvatar from '../../components/BogAvatar';
import './styles.scss';



class FoodOrder extends Component {
  render(){
    const { id, food, qty, time, company, progressbar, status } = this.props;
    return (
      <Row className="boxsize">
        <Col md={4}>
          <h6>{id}</h6>
        </Col>
        <Col md={7}>
        <div className="food">
          <h6>Food order</h6>
          <div>
          <Col md={7}>
            {food}
          </Col>
          <Col md={7}>
            {qty}
          </Col>
          </div>
        </div>
        </Col>
        <Col md={10} >
          <Row>
          <Col md={8} >
            <div className="time">
              <Row >
              <h6>Time</h6>
              </Row>
              <Row>
              <h6>{time}</h6>
              </Row>
            </div>
          </Col>
          <Col md={8} >
            <div className="borderstyle">
            <BogAvatar
              src={require('./photos/'+company+'.png')}
              size='medium'
            />
            </div>
          </Col>
          <Col md={8} >
            <div className="company">
              <h6>{company}</h6>
            </div>
          </Col>
          </Row>
          <Row>
            <ProgressBar
              percent={progressbar}
              showInfo={true}
            />
            <h6>{status}</h6>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default FoodOrder;

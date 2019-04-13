import React, { Component } from 'react';
import { Card } from 'antd';
import { Avatar } from 'antd';
import { Icon } from 'antd';
import { Tag } from 'antd';
import Rating from '../../components/Rating';
import TagView from '../../components/TagView';
import {Row, Col} from 'antd';
import ProgressBar from '../../components/ProgressBar';
import './styles.scss';

class FoodOrder extends Component {
  render(){
    const { food, time, company, progressbar } = this.props;
    return (
      <Row className="boxsize">
        <Col md={11}>
        <div className="food">
          <h6>Food order</h6>
          <div>
            {food}
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
              <h6>company icon</h6>
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
            <h6>progress bar</h6>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default FoodOrder;

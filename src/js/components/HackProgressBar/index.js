import React, { Component } from 'react';
import { Progress } from 'antd';
import { Avatar , Col, Row} from 'antd';
import './styles.scss';

const HackProgressBar = props => {
  const { showInfo = false, percent, order_id, company_name, place, time, color} = props;
  return (
    <div className="record">
      <Row>
        <Col md={5}>
          <Avatar
            size={48}
            src={require('./photos/'+company_name+'.png')}
          />
        </Col>
        <Col md={19}>
          <div>
            No: {order_id} | {place} | {time}
          </div>
          <Progress
            strokeWidth={14}
            strokeLinecap="square"
            strokeColor={color}
            percent={percent}
            showInfo={showInfo}
          />
        </Col>
      </Row>
    </div>
  )
}

export default HackProgressBar;

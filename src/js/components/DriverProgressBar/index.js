import React, { Component } from 'react';
import { Progress } from 'antd';
import { Avatar , Col, Row} from 'antd';
import './styles.scss';

const DriverProgressBar = props => {
  const { showInfo = false, percent} = props;
  return (
    <div className="record">
      <Row>
        <Col md={5}>
          <Avatar
            size={48}
            src={require('./photos/user1.jpg')}
          />
        </Col>
        <Col md={19}>
          <div>
            No: 1
          </div>
          <Progress
            strokeWidth={14}
            strokeLinecap="square"
            strokeColor="#c7141f"
            percent={percent}
            showInfo={showInfo}
          />
        </Col>
      </Row>
    </div>
  )
}

export default DriverProgressBar;

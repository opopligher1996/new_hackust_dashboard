import React, { Component } from 'react';
import { Row, Col, Icon, Input} from 'antd';
import { Link } from "react-router-dom";
import Button from '../../../components/ThemeButton';
import BogTextArea from '../../../components/BogTextArea';
import FlowLayout from '../../FlowLayout';
import Card from '../../../components/CardView';
import './styles.scss';

class Intro extends Component {

  renderTicks = (items = []) => {
    return items.map((item, index) =>
      <div className='icon-div' key={'tick-item-'+index}>
      <Icon
        type="check-circle"
        theme="filled"
        style={{ fontSize: '24px', color: '#f5a623' }}
      />
      <font className='icon-div-font'>
        {item}
      </font>
    </div>);
  }

  render() {
    const { TextArea } = Input;
    const items = ['Greeting', 'Self introduction', 'Your expectation', 'Transportation advice', 'Anything they need to know'];
    return (
      <FlowLayout
        title='Time to be a host'
        description='Let others to be your guests. Proudly introduce your culture to them. Connection established.'
        step='Step 3: Message to the guest(s)'
        percent={75}
      >
      <div>
        <Row>
          <Col span={16}>
            {this.renderTicks(items)}
            <div className='text-area-div'>
              <BogTextArea rows={4} placeholder='Talk to your guest(s), it is good for them to know more about the event'/>
            </div>
            <div className='row-padding'>
              <Link key={'listing-experience-link'} to={'/listing/experience'}>
                <Button
                  type = 'btn secondary'
                  text = 'Go back'
                  onClickFunc={this.decrementFunc}
                />
              </Link>
              <Link key={'listing-pricing-link'} to={'/listing/pricing'} className='button-padding'>
                <Button
                  type = 'btn primary'
                  text = 'Continue'
                  onClickFunc={this.decrementFunc}
                />
              </Link>
            </div>
          </Col>
        </Row>
      </div>
      </FlowLayout>
    )
  }
}

export default Intro;

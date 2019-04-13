import React, { Component } from 'react';
import { Row, Col, Icon, Input} from 'antd';
import Button from '../../../components/ThemeButton';
import { Link } from "react-router-dom";
import FlowLayout from '../../FlowLayout';
import Card from '../../../components/CardView';
import './styles.scss';

class Intro extends Component {
  render() {
    const { TextArea } = Input;
    return (
      <FlowLayout
        title='Hello! 你好! Bonjour!'
        description='You are now connected with Susan. Just some simple steps to make it real. '
        step='Almost done! Why not introduce yourself to the host?'
        percent={75}
      >
      <div>
        <Row>
          <Col span={16}>
            <div className='first-icon-div'>
              <Icon
                type="check-circle"
                theme="filled"
                style={{ fontSize: '24px', color: '#f5a623' }}
              />
              <font className='icon-div-font'>
                Greeting
              </font>
            </div>
            <div className='icon-div'>
              <Icon
                type="check-circle"
                theme="filled"
                style={{ fontSize: '24px', color: '#f5a623' }}
              />
              <font className='icon-div-font'>
                Self introduction
              </font>
            </div>
            <div className='icon-div'>
              <Icon
                type="check-circle"
                theme="filled"
                style={{ fontSize: '24px', color: '#f5a623' }}
              />
              <font className='icon-div-font'>
                Your expectation
              </font>
            </div>
            <div className='icon-div'>
              <Icon
                type="check-circle"
                theme="filled"
                style={{ fontSize: '24px', color: '#f5a623' }}
              />
              <font className='icon-div-font'>
                Any enquiry
              </font>
            </div>
            <div className='text-area-div'>
              <TextArea rows={6} placeholder="Talk to your host, it is good for them to know more about you"/>
            </div>
            <div className='row-padding'>
              <Link key={'listing-basics-link'} to={'/booking/payment'}>
                <Button
                  type = 'btn secondary'
                  text = 'Go back'
                  onClickFunc={this.decrementFunc}
                />
              </Link>
              <Link key={'listing-basics-link'} to={'/booking/finish'} className='button-padding'>
                <Button
                  type = 'btn primary'
                  text = 'Continue'
                  onClickFunc={this.decrementFunc}
                />
              </Link>
            </div>
          </Col>
          <Col span={8} className='row-padding'>
            <Card
              name={'Tom Tsui'}
              subjects={['Economics', 'Politics', 'Chinese']}
              languages={['Japanes', 'Chinese', 'English']}
              rating={3}
              address={'Tin Shui Wai'}
              year={'Year 3'}
              width='25vw'
            />
          </Col>
        </Row>
      </div>
      </FlowLayout>
    )
  }
}

export default Intro;

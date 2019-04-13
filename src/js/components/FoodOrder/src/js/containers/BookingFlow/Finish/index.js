import React, { Component } from 'react';
import { Row, Col, Icon, Input} from 'antd';
import Button from '../../../components/ThemeButton';
import { Link } from "react-router-dom";
import FlowLayout from '../../FlowLayout';
import Card from '../../../components/CardView';
import BogAvatar from '../../../components/BogAvatar';
import './styles.scss';

class Finish extends Component {
  render() {
    const { TextArea } = Input;
    return (
      <FlowLayout
        title='Thank you! 謝謝! Merci'
        description='You are now reserved a seat in Susan’s place. Let’s enjoy your meal on 19 Oct, 2018 '
        step='All set! Booking confirmed'
        percent={100}
      >
      <div>
          <Col span={16}>
            <Row>
              <Col span={8}/>
              <Col span={8}>
                  <div style={{height:'70px'}}>
                    <div className='overlay-icon'>
                      <BogAvatar
                        src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                        size='large'
                      />
                    </div>

                    <div className='overlay-icon right-icon'>
                      <BogAvatar
                        src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                        size='large'
                      />
                    </div>
                  </div>
              </Col>
            </Row>
            <Row>
              <Col span={5}/>
              <Col span={13}>
                <font className='connect-font'>You and Susan are now connected</font>
              </Col>
            </Row>
            <Row className='padding-div'>
              <font className='big-font'>Let’s wait for the arrival of 19 Oct, 2018 and have fun on that day</font>
            </Row>
            <Row className='padding-div'>
              <font className='medium-font'>You can contact the host via <font className='orange-font'>Message</font> in your dashboard</font>
            </Row>
            <Row>
              <Link key={'listing-basics-link'} to={'/'}>
                <Button
                  text='Confirm and Continue'
                />
              </Link>
            </Row>
          </Col>
          <Col span={8}>
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
      </div>
      </FlowLayout>
    )
  }
}

export default Finish;

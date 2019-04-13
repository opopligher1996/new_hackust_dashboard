import React, { Component } from 'react';
import { Row, Col, Icon, Input} from 'antd';
import Button from '../../../components/ThemeButton';
import { Link } from "react-router-dom";
import FlowLayout from '../../FlowLayout';
import Card from '../../../components/CardView';
import BogAvatar from '../../../components/BogAvatar';
import './styles.scss';

class Finish extends Component {
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
    const { TextArea } = Input;
    const event = this.state.event
    return (
      <FlowLayout
        title='Thank you! 謝謝! Merci'
        description={'You are now reserved a seat in '+event.name+'’s place. Let’s enjoy your meal on 19 Oct, 2018 '}
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
                        src={require('./photos/user'+event.eventid+'.jpg')}
                        size='large'
                      />
                    </div>

                    <div className='overlay-icon right-icon'>
                      <BogAvatar
                        src={require('./photos/user.jpg')}
                        size='large'
                      />
                    </div>
                  </div>
              </Col>
            </Row>
            <Row>
              <Col span={5}/>
              <Col span={13}>
                <font className='connect-font'>You and {event.name} are now connected</font>
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
      </div>
      </FlowLayout>
    )
  }
}

export default Finish;

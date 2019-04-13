import React, { Component } from 'react';
import { Row, Col, Icon, Input} from 'antd';
import Button from '../../../components/ThemeButton';
import { Link } from "react-router-dom";
import FlowLayout from '../../FlowLayout';
import Card from '../../../components/CardView';
import './styles.scss';

class Intro extends Component {
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
    const event =  this.state.event
    return (
      <FlowLayout
        title='Hello! 你好! Bonjour!'
        description={'You are now connected with '+event.name+'. Just some simple steps to make it real. '}
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
              <Link key={'listing-basics-link'} 
                to={{ pathname: '/booking/payment', data:{event: event} }}
              >
                <Button
                  type = 'btn secondary'
                  text = 'Go back'
                  onClickFunc={this.decrementFunc}
                />
              </Link>
              <Link key={'listing-basics-link'}
                to={{ pathname: '/booking/finish', data:{event: event} }}
                className='button-padding'
              >
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
        </Row>
      </div>
      </FlowLayout>
    )
  }
}

export default Intro;

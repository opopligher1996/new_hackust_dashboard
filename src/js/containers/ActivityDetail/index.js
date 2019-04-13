import React, { Component } from 'react';
import { connect } from "react-redux";
import { Row, Col, Icon, Avatar, Tag } from 'antd';
import Title from '../../components/Title';
import Rating from '../../components/Rating';
import HostLabel from '../../components/HostLabel';
import ActivityCard from '../../components/ActivityCard';
import './styles.scss';

class ActivityDetail extends Component {

  constructor(props) {
    super(props);
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
    const event = this.state.event
    const host_label = 'host-btn '+event.rank+'-hold'
    const host_label_text = event.rank.charAt(0).toUpperCase() + event.rank.slice(1) + " Host";
    const event_id = require('./photos/activity'+event.eventid+'.jpeg');
    return (
      <div className="activity-page">
        <Row className="activity-photo-div">
          <img
            src={event_id}
            className="activity-photo"
          />
        </Row>
        <Row className="padding-row">
          <Title
            text={event.activity_name}
            size={24}
          />
        </Row>
        <Row className="padding-row">
          <Col md={14} className="padding-col">
            <Row>
              <Col md={4}>
                <Avatar size={64} src={require('./photos/user'+event.userid+'.jpg')} />
              </Col>
              <Col md={14}>
                <div>
                  <font className="name">{event.name}</font>
                </div>
                <div>
                  <Rating rating={event.rating} />
                  36
                </div>
              </Col>
              <Col md={6}>
                <div className="float-right">
                  <HostLabel
                    size = {36}
                    rank = {event.rank}
                    type = {host_label}
                    text = {host_label_text}
                  />
                </div>
              </Col>
            </Row>
            <Row className="padding-div">
              <div>
                <Icon className={`icon-icon`} type="read" style={{fontSize: '18px', color: 'var(--brown-grey)'}}/>
                <font className="intro">  {event.year}</font>
              </div>
              <div className="padding-div">
                <Icon className={`icon-icon`} type="global" style={{fontSize: '18px', color: 'var(--brown-grey)'}}/>
                <font className="intro">  {event.name} can speak</font>
                {event.languages.map((language, index) =>
                  <Tag className={`tag-padding`} color="#417505">{language}</Tag>
                )}
              </div>
              <div className="padding-div">
                <Icon className={`icon-icon`} type="heart" style={{fontSize: '18px', color: 'var(--brown-grey)'}}/>
                <font className="intro">  {event.name} likes</font>
                {event.subjects.map((subject, index) =>
                  <Tag className={`tag-padding`} color="#f8c81c">{subject}</Tag>
                )}
              </div>
            </Row>
            <Row className="padding-div">
              <Title
                text={'Message from '+event.name}
                size={24}
              />
              <div className="padding-div-13">
                <font className="content">Hello my friend! I am currently an undergraduate in the HKUST. I was borned in Japan but I moved to Hong Kong since I was 9yo. I have been enjoying my life here and I would like to share some funny stuff with the people around the world. Don’t be shy! Come and join us :)</font>
              </div>
            </Row>
            <Row className="padding-div">
              <Title
                text={'About the meal'}
                size={24}
              />
              <div className="padding-div-13">
                <Col md={8}>
                  <font className="intro">
                    <img className="meal-icon" src={require('../../../public/images/restaurant.svg')}/>
                    Chinese Food
                  </font>
                </Col>
                <Col md={8}>
                  <font className="intro">
                    <img className="meal-icon" src={require('../../../public/images/meat.svg')}/>
                    Contains meat
                  </font>
                </Col>
                <Col md={8}>
                  <font className="intro">
                    <img className="meal-icon" src={require('../../../public/images/drink.svg')}/>
                    Drink included
                  </font>
                </Col>
              </div>
              <div className="padding-div-13">
                <font className="content"> I will prepare a lot of raw ingredients for the hot pot such as vegetable, beef, pork and prawn. There will be some soft drink available, just feel free to take it. Soy sause is provided for additional favoring. In case you are not full, we can cook some instant noodle in the hotpot!</font>
              </div>
              <div>
                <div className="padding-div-13">
                  <font className="intro">
                    Photos
                  </font>
                </div>
                <div className="padding-div-13">
                  <Col md={12}>
                    <img className="image" alt="example" src={require('./photos/meal'+event.eventid+'_1.jpeg')}/>
                  </Col>
                  <Col md={12}>
                    <img className="image" alt="example" src={require('./photos/meal'+event.eventid+'_2.jpeg')} />
                  </Col>
                </div>
                <div className="padding-div-13">
                  <font className="organe-font">See more photos ></font>
                </div>
              </div>
            </Row>
            <Row className="padding-div">
              <Title
                text={'Memory'}
                size={24}
              />
              <div className="padding-div-13">
                <Col md={12}>
                  <img className="image" alt="example" src={require('./photos/gathering1.jpeg')}/>
                </Col>
                <Col md={12}>
                  <img className="image" alt="example" src={require('./photos/gathering2.jpeg')}/>
                </Col>
              </div>
              <font className="organe-font">See more photos ></font>
            </Row>
            <Row className="padding-div">
              <div className="padding-div-13">
                <Title
                  text={'Reviews'}
                  size={24}
                  />
              </div>
              <div>
                <Rating rating={3.5} />
                36 Reviews
              </div>
              <div className="rating-div">
                <Col md={6}>
                  <div className="rating-subdiv">
                    <font className="rating-font">Friendliness</font>
                  </div>
                  <div className="rating-subdiv">
                    <font className="rating-font">Hygiene</font>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="rating-subdiv">
                    <Rating rating={5} />
                  </div>
                  <div className="rating-subdiv">
                    <Rating rating={5} />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="rating-subdiv">
                    <font className="rating-font">Taste</font>
                  </div>
                  <div className="rating-subdiv">
                    <font className="rating-font">Communication</font>
                  </div>
                </Col>
                <Col md={6}>
                  <div>
                    <Rating rating={5} />
                  </div>
                  <div>
                    <Rating rating={5} />
                  </div>
                </Col>
              </div>
              <div className="comment-div">
                <div className="comment">
                  <div>
                    <Col md={4}>
                      <Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </Col>
                    <Col md={20}>
                      <div className="comment-name"><font className="intro">Roxanne</font></div>
                      <p>July, 2018</p>
                    </Col>
                  </div>
                  <div className="comment-comment">
                    One of the best host I have ever met! Hotpot is good, I’m lovin it!
                  </div>
                </div>
                <div className="comment">
                  <div>
                    <Col md={4}>
                      <Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </Col>
                    <Col md={20}>
                      <div className="comment-name"><font className="intro">Tom</font></div>
                      <p>Oct, 2018</p>
                    </Col>
                  </div>
                  <div className="comment-comment">
                    Susan 很熱情，食物也太好吃了！我在台灣吃的火鍋都不夠這個好吃！
                  </div>
                </div>
              </div>
            </Row>
          </Col>
          <Col md={10}>
            <ActivityCard
              event={event}
              date={event.date}
              time={event.time}
              address={event.address}
              price={event.price}
              usr_lat={event.location_x}
              usr_lng={event.location_y}
              div_height="600"
              div_width="100%"
              show_price= {false}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default ActivityDetail;

import React, { Component } from 'react';
import { connect } from "react-redux";
import { Row, Col, Icon, Avatar, Tag } from 'antd';
import Title from '../../components/Title';
import Rating from '../../components/Rating';
import HostLabel from '../../components/HostLabel';
import ActivityCard from '../../components/ActivityCard';
import './styles.scss';

class ActivityDetail extends Component {

  render() {
    return (
      <div className="activity-page">
        <Row className="activity-photo-div">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQ_XA5ZBNxih16ecHHzwCf9f6Yu4Vndy9QjcqZIFSoByEJzEPUw"
            className="activity-photo"
          />
        </Row>
        <Row className="padding-row">
          <Title
            text={'Enjoy hotpot with my Chinese family!'}
            size={24}
          />
        </Row>
        <Row className="padding-row">
          <Col md={14} className="padding-col">
            <Row>
              <Col md={4}>
                <Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Col>
              <Col md={14}>
                <div>
                  <font className="name">Susan Wong</font>
                </div>
                <div>
                  <Rating rating={5} />
                  36
                </div>
              </Col>
              <Col md={6}>
                <div className="float-right">
                  <HostLabel
                    size = {36}
                    type = 'host-btn gold-hold'
                    text = 'Gold Host'
                  />
                </div>
              </Col>
            </Row>
            <Row className="padding-div">
              <div>
                <Icon className={`icon-icon`} type="read" style={{fontSize: '18px', color: 'var(--brown-grey)'}}/>
                <font className="intro">  GBus Year 3, HKUST</font>
              </div>
              <div className="padding-div">
                <Icon className={`icon-icon`} type="global" style={{fontSize: '18px', color: 'var(--brown-grey)'}}/>
                <font className="intro">  Susan can speak</font>
                <Tag className={`tag-padding`} color="#417505">Japanese</Tag>
                <Tag className={`tag-padding`} color="#417505">English</Tag>
                <Tag className={`tag-padding`} color="#417505">Chinese</Tag>
              </div>
              <div className="padding-div">
                <Icon className={`icon-icon`} type="heart" style={{fontSize: '18px', color: 'var(--brown-grey)'}}/>
                <font className="intro">  She likes</font>
                <Tag className={`tag-padding`} color="#f8c81c">Economics</Tag>
                <Tag className={`tag-padding`} color="#f8c81c">Politics</Tag>
              </div>
            </Row>
            <Row className="padding-div">
              <Title
                text={'Message from Susan'}
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
                    <img className="image" alt="example" src="https://danjcm2668ozn.cloudfront.net/productive-sales-meeting.jpg" />
                  </Col>
                  <Col md={12}>
                    <img className="image" alt="example" src="https://danjcm2668ozn.cloudfront.net/productive-sales-meeting.jpg" />
                  </Col>
                </div>
                <div className="padding-div-13">
                  See more photos
                </div>
              </div>
            </Row>
            <Row className="padding-div">
              <Title
                text={'Memory'}
                size={24}
              />
              <div>
                <Col md={12}>
                  photo 1
                </Col>
                <Col md={12}>
                  photo 2
                </Col>
              </div>
              See more photos
            </Row>
            <Row className="padding-div">
              <Title
                text={'Reviews'}
                size={24}
              />
              <div>
                <Rating rating={3.5} />
                36 Reviews
              </div>
              <div>
                <Col md={12}>
                  <div>
                    Friendliness
                    <Rating rating={5} />
                  </div>
                  <div>
                    Hygiene
                    <Rating rating={5} />
                  </div>
                </Col>
                <Col md={12}>
                  <div>
                    Taste
                    <Rating rating={5} />
                  </div>
                  <div>
                    Communication
                    <Rating rating={5} />
                  </div>
                </Col>
              </div>
              <Row className="comment">
                <div>
                  <Col md={4}>
                    <Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  </Col>
                  <Col md={20}>
                    <p>Roxanne</p>
                    <p>July, 2018</p>
                  </Col>
                </div>
                <div>
                  One of the best host I have ever met! Hotpot is good, I’m lovin it!
                </div>
              </Row>
              <Row className="comment">
                <div>
                  <Col md={4}>
                    <Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  </Col>
                  <Col md={20}>
                    <p>Roxanne</p>
                    <p>July, 2018</p>
                  </Col>
                </div>
                <div>
                  One of the best host I have ever met! Hotpot is good, I’m lovin it!
                </div>
              </Row>
            </Row>
          </Col>
          <Col md={10}>
            <ActivityCard
              usr_lat={22.351082}
              usr_lng={114.199871}
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

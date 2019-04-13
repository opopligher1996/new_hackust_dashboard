import React, { Component } from 'react';
import { connect } from "react-redux";
import { Row, Col, Icon } from 'antd';
import { Link } from "react-router-dom";
import { requestData } from "./actions";
import { getInitDataSaga } from './saga';
import Banner from '../../components/Banner';
import ActionBox from '../../components/ActionBox';
import Title from '../../components/Title';
import Card from '../../components/CardView';
import FlowLayout from '../FlowLayout';
// import ApolloTest from '../../components/ApolloTest';
import Layout from '../Layout';
import './styles.scss';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          'eventid':2,
          'activity_name':'Enjoy hotpot with my Chinese family!',
          'userid':2,
          'name':'Susan',
          'rank':'gold',
          'duration':180,
          'intro':'hi',
          'date':'2018/11/11',
          'time':'15:00 - 16:00',
          'subjects':['Economics', 'Politics'],
          'languages':['Japanes', 'Chinese', 'English'],
          'rating':5,
          'price':120,
          'address':'0.3 km away from MTR station',
          'year': 'GBus Year 3, HKUST',
          'location_x': 22.351082,
          'location_y': 114.198971
        },
        {
          'eventid':1,
          'activity_name':'Enjoy hotpot with my Chinese family!',
          'userid':1,
          'name':'Tom',
          'rank':'silver',
          'duration':180,
          'intro':'hi',
          'date':'2018/11/11',
          'time':'19:00 - 20:00',
          'subjects':['Engineering', 'Anime'],
          'languages':['Cantonese', 'English'],
          'rating':4.5,
          'price':900,
          'address':'0.1 km away from Bus Terminal',
          'year': 'CSE Year 4,HKUST',
          'location_x': 22.333981,
          'location_y': 114.170361
        },
        {
          'eventid':3,
          'activity_name':'Enjoy hotpot with my Chinese family!',
          'userid':3,
          'rank':'bronze',
          'name':'Simon',
          'duration':180,
          'intro':'hi',
          'date':'2018/11/11',
          'time':'18:00 - 21:00',
          'subjects':['KPOP', 'Music', 'Art'],
          'languages':['Cantonese', 'English'],
          'rating':4.5,
          'price':500,
          'address':'0.2 km away from Shopping mall',
          'year': 'CHEM Year 2, HKUST',
          'location_x': 22.338551,
          'location_y': 114.153585
        }
      ]
    }
  }

  componentDidMount() {
    if(!this.props.data) {
      this.props.requestData();
    }
  }

  valueOnChange = (key, val) => {
    this.setState({ [key]: val });
  }

  render() {
    console.log('loading', this.props.loading);
    console.log('this.state', this.state);
    const { date, location, slot, events } = this.state;
    const images = [
      "https://www.area47.at/website/var/tmp/image-thumbnails/0/139/thumb__bigimg/area47_otztal_partyarea_riverhaus_1.jpeg",
      "https://www.hollandevenementengroep.nl/foto/11902/858/500/!crop!/files/Accent%20Fotos/party2.jpg"
    ];
    return (
      <div>
        <Banner
          images={images}
          height='600px'
        />
        <div className={'action-box-container'}>
          <Row>
            <Col sm={12} md={8}>
              <ActionBox
                title='Your unique experience starts here'
                dateInput={date}
                locationInput={location}
                slotInput={slot}
                valueOnChange={this.valueOnChange}
              />
            </Col>
          </Row>
        </div>
        <Row className='padding-row'>
          <Title
            text={'Nearby'}
            size={30}
          />
          <div className='description'>
            <Col md={20}>
                Description
            </Col>
            <Col md={4}>
              <Icon className={`icon-icon`} type="environment" style={{fontSize: '18px', color: 'var(--brown-grey)'}}/>
              <font className={`icon-font`}>Tin Shui Wai</font>
            </Col>
          </div>
        </Row>
        <Row className='padding-row'>
          <div>
            {events.map((event, index) =>
              <Col md={8}>
                <Link
                 to={{ pathname: '/activity', data:{event: event} }}
                >
                  <Card
                    key={'Card'+index}
                    name={event.name}
                    user={event.userid}
                    activity={event.eventid}
                    subjects={event.subjects}
                    languages={event.languages}
                    rating={event.rating}
                    address={event.address}
                    year={event.year}
                    rank={event.rank}
                    width={'25vw'}
                  />
                </Link>
              </Col>
            )}
          </div>
        </Row>
        <Row className='padding-row'>
          <a href="/search">
            <font className="more-activity">See more than 1200 listings ></font>
          </a>
        </Row>
        <Row className='padding-row'>
          <Title
            text={'Dish'}
            size={30}
          />
          <div className='description'>
            Some of us prefer the food from different countries
          </div>
        </Row>
        <Row className='padding-row'>
          <Col md={12}>
            <Link to={{ pathname: '/search' }}>
              <div>
                <img
                  src={require('./photos/Japnese.jpg')}
                  className="dish-card"
                />
                <div className="dish-card dish-card-overlayer">
                  <span className="dish-card-font">
                    Japanese
                  </span>
                </div>
              </div>
            </Link>
          </Col>
          <Col md={12}>
            <Link to={{ pathname: '/search' }}>
              <div>
                <img
                  src={require('./photos/Chinese.jpg')}
                  className="dish-card"
                />
                <div className="dish-card dish-card-overlayer">
                  <span className="dish-card-font">
                    Chinese
                  </span>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
        <Row className='padding-row'>
          <Col md={12}>
            <Link to={{ pathname: '/search' }}>
              <div>
                <img
                  src={require('./photos/Korea.jpg')}
                  className="dish-card"
                />
                <div className="dish-card dish-card-overlayer">
                  <span className="dish-card-font">
                    Korean
                  </span>
                </div>
              </div>
            </Link>
          </Col>
          <Col md={12}>
            <Link to={{ pathname: '/search' }}>
              <div>
                <img
                  src={require('./photos/Thai.jpg')}
                  className="dish-card"
                />
                <div className="dish-card dish-card-overlayer">
                  <span className="dish-card-font">
                    Thai
                  </span>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapDispatchToProps = {
  requestData
};

const mapStateToProps = ({ home }) => {
  console.log('home', home);
  return {
    succeed: home.succeed,
    data: home.data,
    loading: home.loading
  };
};

Home.requestInitDataSaga = getInitDataSaga;

export default connect(mapStateToProps
  , mapDispatchToProps
)(Home);

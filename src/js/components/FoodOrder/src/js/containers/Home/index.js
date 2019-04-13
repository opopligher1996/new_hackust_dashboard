import React, { Component } from 'react';
import { connect } from "react-redux";
import { Row, Col, Icon } from 'antd';
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
    const { date, location, slot } = this.state;
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
            <Col md={8}>
              <Card
                name={'Tom Tsui'}
                subjects={['Economics', 'Politics', 'Chinese']}
                languages={['Japanes', 'Chinese', 'English']}
                rating={3}
                address={'Tin Shui Wai'}
                year={'Year 3'}
                width={'25vw'}
              />
            </Col>
            <Col md={8}>
              <Card
                name={'Tom Tsui'}
                subjects={['Economics', 'Politics', 'Chinese']}
                languages={['Japanes', 'Chinese', 'English']}
                rating={3}
                address={'Tin Shui Wai'}
                year={'Year 3'}
                width={'25vw'}
              />
            </Col>
            <Col md={8}>
              <Card
                name={'Tom Tsui'}
                subjects={['Economics', 'Politics', 'Chinese']}
                languages={['Japanes', 'Chinese', 'English']}
                rating={3}
                address={'Tin Shui Wai'}
                year={'Year 3'}
                width={'25vw'}
              />
            </Col>
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
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQ_XA5ZBNxih16ecHHzwCf9f6Yu4Vndy9QjcqZIFSoByEJzEPUw"
                className="dish-card"
              />
            </div>
          </Col>
          <Col md={12}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQ_XA5ZBNxih16ecHHzwCf9f6Yu4Vndy9QjcqZIFSoByEJzEPUw"
              className="dish-card"
            />
          </Col>
        </Row>
        <Row className='padding-row'>
          <Col md={12}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQ_XA5ZBNxih16ecHHzwCf9f6Yu4Vndy9QjcqZIFSoByEJzEPUw"
              className="dish-card"
            />
          </Col>
          <Col md={12}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQ_XA5ZBNxih16ecHHzwCf9f6Yu4Vndy9QjcqZIFSoByEJzEPUw"
              className="dish-card"
            />
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

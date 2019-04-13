import React, { Component } from 'react';
import { connect } from "react-redux";
import { Row, Col, Icon } from 'antd';
import { Link } from "react-router-dom";
import { requestData } from "./actions";
import { getInitDataSaga } from './saga';
import Banner from '../../components/Banner';
import ProgressBar from '../../components/ProgressBar';
import HackProgressBar from '../../components/HackProgressBar';
import DriverProgressBar from '../../components/DriverProgressBar';
import BogAvatar from '../../components/BogAvatar';
import ActionBox from '../../components/ActionBox';
import Title from '../../components/Title';
import Card from '../../components/CardView';
import FlowLayout from '../FlowLayout';
import GoogleMapReact from 'google-map-react';
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline } from 'google-maps-react';
// import ApolloTest from '../../components/ApolloTest';
import Layout from '../Layout';
import './style.scss';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orders : [
        {
          order_id: '0190303',
          company_name: 'kfc',
          capacity: 90,
          eta: 15,
          place: 'UST',
          time: '7:00'
        },
        {
          order_id: '0190304',
          company_name: 'pizza_hut',
          capacity: 90,
          eta: 15,
          place: 'Tin Shui Wai',
          time: '7:00'
        },
        {
          order_id: '0190304',
          company_name: 'pizza_hut',
          capacity: 90,
          eta: 15,
          place: 'Tin Shui Wai',
          time: '7:00'
        },
        {
          order_id: '0190304',
          company_name: 'pizza_hut',
          capacity: 90,
          eta: 15,
          place: 'Tin Shui Wai',
          time: '7:30'
        },
        {
          order_id: '0190304',
          company_name: 'pizza_hut',
          capacity: 90,
          eta: 15,
          place: 'Tin Shui Wai',
          time: '7:30'
        }
      ]
    }
  }

  // componentDidMount() {
  //   if(!this.props.data) {
  //     this.props.requestData();
  //   }
  // }

  valueOnChange = (key, val) => {
    this.setState({ [key]: val });
  }

  renderUserPosition = () => {
    var pathCoordinates=[
      {lat:22.298269 , lng: 114.172196},
      {lat:22.298733, lng:114.172150},
      {lat:22.298797, lng:114.172980},
      {lat:22.299283, lng:114.174883},
      {lat:22.299572, lng:114.175921},
      {lat:22.303045, lng:114.177132},
      {lat:22.302254, lng:114.178904}
    ]
    return (
      <Polyline
        path={pathCoordinates}
        options={{
        strokeColor:"#0000FF",
        strokeOpacity: 0.8,
        strokeWeight: 5,
        icons: [{
          icon: "hello",
          offset: '0',
          repeat: '10px'
        }],
      }}
      />
   )
  }

  renderOrderRecords = () => {
    const {orders} = this.state
    return orders.map((order, index) =>
      <HackProgressBar
        key= {'order - '+index}
        percent={80}
        showInfo={true}
        order_id={order.order_id}
        company_name={order.company_name}
        place={order.place}
        time={order.time}
      />
    )
  }

  render() {
    console.log('loading', this.props.loading);
    console.log('this.state', this.state);
    return (
      <div>
        <Row>
          <Col md={3} className="sidebar">
            <div className="icon-div">
              icon
            </div>
            <div className="sidebar-manu">
             <ul>
               <li><Link to="/"><h6> Home</h6></Link></li>
               <li><h6> Map</h6></li>
               <li><Link to="/user"><h6>User</h6></Link></li>
               <li><h6>Report</h6></li>
             </ul>
            </div>
          </Col>
          <Col md={21}>
            <Row className="header">
              <div className="dashboard-name">
                <h4>Dashboard</h4>
              </div>
            </Row>
            <Row>
              <div className="main">
                <Col md={12}>
                  <div className="left-div">
                    <div className="left-center-div">
                      <Map
                        google={this.props.google}
                        zoom={15}
                        initialCenter={{
                          lat: 22.298269,
                          lng: 114.172196
                        }}
                      >
                        { this.renderUserPosition() }
                        <Marker
                          className="icon"
                          key={'minibus-1'}
                          icon={{url: require('./photos/car.png')}}
                          position={{lat: 22.298269 , lng: 114.172196}}
                        />
                      </Map>
                    </div>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="rigth-div">
                    <div className="rigth-inner-div">
                      <div className="order-status-div">
                        <h4>Order Status</h4>
                      </div>
                      {this.renderOrderRecords()}
                    </div>
                  </div>
                </Col>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

// const mapDispatchToProps = {
//   requestData
// };

const mapStateToProps = ({ home }) => {
  console.log('home', home);
  return {
    succeed: home.succeed,
    data: home.data,
    loading: home.loading
  };
};

Home.requestInitDataSaga = getInitDataSaga;

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCCaUGybfZSgG9RRNtjdrJ15ZmhEuB83Mw'
})(Home);

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
import { FaHome, FaMap, FaUsers, FaBars } from 'react-icons/fa';
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
          time: '7:00',
          percent: 90,
          color: "#0000FF"
        },
        {
          order_id: '0190304',
          company_name: 'pizza_hut',
          capacity: 90,
          eta: 15,
          place: 'Tin Shui Wai',
          time: '7:00',
          percent: 95,
          color: "#0000FF"
        },
        {
          order_id: '0190304',
          company_name: 'phd',
          capacity: 90,
          eta: 15,
          place: 'Tin Shui Wai',
          time: '7:00',
          percent: 85,
          color: "#0000FF"
        },
        {
          order_id: '0190304',
          company_name: 'kfc',
          capacity: 90,
          eta: 15,
          place: 'Tin Shui Wai',
          time: '7:30',
          percent: 75,
          color: "#c7141f"
        },
        {
          order_id: '0190304',
          company_name: 'pizza_hut',
          capacity: 90,
          eta: 15,
          place: 'Tin Shui Wai',
          time: '7:30',
          percent: 80,
          color: "#c7141f"
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
      {lat:22.302254, lng:114.178904},
      {lat:22.301758, lng:114.179460},
      {lat:22.301069, lng:114.178864}
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

  renderUserPosition_2 = () => {
    var pathCoordinates=[
      {lat:22.301069, lng:114.178864},
      {lat:22.300028, lng:114.179841},
      {lat:22.298063, lng:114.177536},
      {lat:22.297135, lng:114.176257},
      {lat:22.297239, lng:114.175536},
      {lat:22.295354, lng:114.175160},
      {lat:22.294775, lng:114.172356},
      {lat:22.295538, lng:114.172281},
      {lat:22.295520, lng:114.171236},
      {lat:22.296402, lng:114.171248},
      {lat:22.296472, lng:114.172280},
      {lat:22.298269 , lng: 114.172196}
    ]
    return (
      <Polyline
        path={pathCoordinates}
        options={{
        strokeColor:"#c7141f",
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
        percent={order.percent}
        order_id={order.order_id}
        company_name={order.company_name}
        place={order.place}
        time={order.time}
        color={order.color}
      />
    )
  }

  render() {
    console.log('loading', this.props.loading);
    console.log('this.state', this.state);
    return (
      <div>
        <Row>
          <Col md={2} className="sidebar">
            <div className="icon-div">

            </div>
            <div className="sidebar-manu">
             <ul>
               <li><Link to="/"><h3><FaHome/> Home</h3></Link></li>
               <li><Link to="/heatmap"><h3><FaMap/> Map</h3></Link></li>
               <li><Link to="/user"><h3><FaUsers/>User</h3></Link></li>
             </ul>
            </div>
          </Col>
          <Col md={22}>
            <Row className="header">
              <div className="dashboard-name">
                <h2>Dashboard</h2>
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
                        { this.renderUserPosition_2() }
                        <Marker
                          className="icon"
                          key={'minibus-1'}
                          icon={{url: require('./photos/pizza_hut.png')}}
                          position={{lat: 22.298269 , lng: 114.172196}}
                        />
                        <Marker
                          className="icon"
                          key={'minibus-1'}
                          position={{lat: 22.299562 , lng: 114.175962}}
                        />
                        <Marker
                          className="icon"
                          key={'minibus-1'}
                          position={{lat: 22.302862 , lng: 114.177262}}
                        />
                        <Marker
                          className="icon"
                          key={'minibus-1'}
                          position={{lat: 22.301662 , lng: 114.179362}}
                        />
                        <Marker
                          className="icon"
                          key={'minibus-1'}
                          position={{lat: 22.298162 , lng: 114.177662}}
                        />
                        <Marker
                          className="icon"
                          key={'minibus-1'}
                          position={{lat: 22.295062 , lng: 114.173862}}
                        />
                      </Map>
                    </div>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="rigth-div">
                    <div className="rigth-inner-div">
                      <div className="order-status-div">
                        <h4>Store: Tsim Sha Tsui</h4>
                        <h4>Driver No.: 012</h4>
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

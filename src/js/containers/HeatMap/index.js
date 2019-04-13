import React, { Component } from 'react';
import './styles.scss';
import Title from '../../components/Title';
import FlowLayout from '../FlowLayout';
import BogDatePicker from '../../components/BogDatePicker';
import BogTimePicker from '../../components/BogTimePicker';
import MapView from '../../components/MapView';
import Card from '../../components/CardView';
import BogDropdown from '../../components/BogDropdown';
import ThemeButton from '../../components/ThemeButton';
import ProgressBar from '../../components/ProgressBar';
import FoodOrder from '../../components/FoodOrder';
import { FaHome, FaMap, FaUsers, FaBars } from 'react-icons/fa';
import { Link } from "react-router-dom";
import {Row, Col} from 'antd';
import { Polygon, Map, InfoWindow, Marker, GoogleApiWrapper, Polyline } from 'google-maps-react';

class HeatMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Area_One_Coords: [
        {lat: 22.293142,lng: 114.169586},
        {lat: 22.293362, lng: 114.172512},
        {lat: 22.299380, lng: 114.180777},
        {lat: 22.300112, lng: 114.168281}
      ],
      Area_Two_Coords: [
        {lat: 22.303195, lng: 114.168119},
        {lat: 22.303010, lng: 114.177281},
        {lat: 22.299380, lng: 114.180777},
        {lat: 22.300112, lng: 114.168281}
      ],
      Area_Three_Coords: [
        {lat: 22.303195, lng: 114.168119},
        {lat: 22.305826, lng: 114.167045},
        {lat: 22.305345, lng: 114.171597},
        {lat: 22.306889, lng: 114.174567},
        {lat: 22.305525, lng: 114.178686},
        {lat: 22.306769, lng: 114.180832},
        {lat: 22.304279, lng: 114.183959},
        {lat: 22.300734, lng: 114.184066},
        {lat: 22.299403, lng: 114.180746},
        {lat: 22.302961, lng: 114.177344}
      ],
      Area_Four_Coords: [
        {lat: 22.305826, lng: 114.167045},
        {lat: 22.305345, lng: 114.171597},
        {lat: 22.306889, lng: 114.174567},
        {lat: 22.308668, lng: 114.171230},
        {lat: 22.309128, lng: 114.167716}
      ],
      Area_Five_Coords:[
        {lat: 22.302781, lng: 114.159778 },
        {lat: 22.307286, lng: 114.161492},
        {lat: 22.306416, lng: 114.165227},
        {lat: 22.309129, lng: 114.165144},
        {lat: 22.309077, lng: 114.167855},
        {lat: 22.305929, lng: 114.166998},
        {lat: 22.303140, lng: 114.167994}
      ]
    }
  }

  renderAreaOne(){
    const {Area_One_Coords} = this.state;
    return (
      <Polygon
      paths={Area_One_Coords}
      strokeColor="#0000FF"
      strokeOpacity={0.8}
      strokeWeight={2}
      fillColor="#0000FF"
      fillOpacity={0.35} />)
  }

  renderAreaTwo(){
    const {Area_Two_Coords} = this.state;
    return (
      <Polygon
      paths={Area_Two_Coords}
      strokeColor="#820109"
      strokeOpacity={0.8}
      strokeWeight={2}
      fillColor="#c7141f"
      fillOpacity={0.35} />)
  }

  renderAreaThree(){
    const {Area_Three_Coords} = this.state;
    return (
      <Polygon
      paths={Area_Three_Coords}
      strokeColor="#1D6C1A"
      strokeOpacity={0.8}
      strokeWeight={2}
      fillColor="#50FF4A"
      fillOpacity={0.35} />)
  }

  renderAreaFour(){
    const {Area_Four_Coords} = this.state;
    return (
      <Polygon
      paths={Area_Four_Coords}
      strokeColor="#BDBD25"
      strokeOpacity={0.8}
      strokeWeight={2}
      fillColor="#F3FF7F"
      fillOpacity={0.35} />)
  }

  renderAreaFive(){
    const {Area_Five_Coords} = this.state;
    return (
      <Polygon
      paths={Area_Five_Coords}
      strokeColor="#891E81"
      strokeOpacity={0.8}
      strokeWeight={2}
      fillColor="#F538E8"
      fillOpacity={0.35} />)
  }

  render() {
    const {Area_One_Coords} = this.state;
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
            <Row className="main">
                <div className="map-outer-div">
                  <div className="map-div">
                    <Map
                      google={this.props.google}
                      zoom={15}
                      initialCenter={{
                        lat: 22.298269,
                        lng: 114.172196
                      }}
                    >
                    { this.renderAreaOne() }
                    { this.renderAreaTwo() }
                    { this.renderAreaThree()}
                    { this.renderAreaFour()}
                    { this.renderAreaFive()}
                    </Map>
                  </div>
                </div>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

// const mapStateToProps = ({  }) => {
//
// };
//
// const mapDispatchToProps = {
//
// };

// export default connect(mapStateToProps, mapDispatchToProps)(About);
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCCaUGybfZSgG9RRNtjdrJ15ZmhEuB83Mw'
})(HeatMap);

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
      ],

      Stand_By_One:[
        [
          {lat: 22.293142,lng: 114.169586},
          {lat: 22.293362, lng: 114.172512},
          {lat: 22.299380, lng: 114.180777},
          {lat: 22.300112, lng: 114.168281}
       ],
       [
         {lat: 22.293142,lng: 114.169586},
         {lat: 22.293362, lng: 114.172512},
         {lat: 22.295192, lng: 114.174948},
         {lat: 22.297298, lng: 114.175526},
         {lat: 22.298035, lng: 114.168868}
       ],
       [
         {lat: 22.293942,lng: 114.169086},
         {lat: 22.293962, lng: 114.175012},
         {lat: 22.299080, lng: 114.180277},
         {lat: 22.299812, lng: 114.168481}
       ]
      ],

      Stand_By_Two:[
        [
          {lat: 22.303195, lng: 114.168119},
          {lat: 22.303010, lng: 114.177281},
          {lat: 22.299380, lng: 114.180777},
          {lat: 22.300112, lng: 114.168281}
        ],
        [
          {lat: 22.303195, lng: 114.168119},
          {lat: 22.303010, lng: 114.177281},
          {lat: 22.299380, lng: 114.180777},
          {lat: 22.296128, lng: 114.175309},
          {lat: 22.297298, lng: 114.175490},
          {lat: 22.297933, lng: 114.168770}
        ],
        [
         {lat: 22.303095, lng: 114.168319},
         {lat: 22.302810, lng: 114.177001},
         {lat: 22.299080, lng: 114.180270},
         {lat: 22.299812, lng: 114.168461}
       ]
      ],

      Stand_By_Three:[
        [
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
        [
          {lat: 22.309049, lng: 114.183530},
          {lat: 22.310532, lng: 114.191033},
          {lat: 22.301568, lng: 114.191397},
          {lat: 22.299403, lng: 114.180746},
          {lat: 22.302961, lng: 114.177344}
        ],
        [
          {lat: 22.303005, lng: 114.170619},
          {lat: 22.305226, lng: 114.169045},
          {lat: 22.304365, lng: 114.171597},
          {lat: 22.307089, lng: 114.175567},
          {lat: 22.307025, lng: 114.179086},
          {lat: 22.307569, lng: 114.181032},
          {lat: 22.304779, lng: 114.184459},
          {lat: 22.299534, lng: 114.185066},
          {lat: 22.298653, lng: 114.180746},
          {lat: 22.302791, lng: 114.177144}
        ]
      ],

      Stand_By_Four:[
        [
          {lat: 22.305826, lng: 114.167045},
          {lat: 22.305345, lng: 114.171597},
          {lat: 22.306889, lng: 114.174567},
          {lat: 22.308668, lng: 114.171230},
          {lat: 22.309128, lng: 114.167716}
        ],
        [
          {lat: 22.305826, lng: 114.167045},
          {lat: 22.303117, lng: 114.167977},
          {lat: 22.303050, lng: 114.177119},
          {lat: 22.305713, lng: 114.178649},
          {lat: 22.306889, lng: 114.174567},
          {lat: 22.308668, lng: 114.171230},
          {lat: 22.309128, lng: 114.167716}
        ],
        [
          {lat: 22.305226, lng: 114.169045},
          {lat: 22.304365, lng: 114.171597},
          {lat: 22.306889, lng: 114.175367},
          {lat: 22.309568, lng: 114.176530},
          {lat: 22.310028, lng: 114.168316}
        ]
      ],

      Stand_By_Five:[
        [
          {lat: 22.302781, lng: 114.159778 },
          {lat: 22.307286, lng: 114.161492},
          {lat: 22.306416, lng: 114.165227},
          {lat: 22.309129, lng: 114.165144},
          {lat: 22.309077, lng: 114.167855},
          {lat: 22.305929, lng: 114.166998},
          {lat: 22.303140, lng: 114.167994}
        ],
        [
          {lat: 22.302781, lng: 114.159778 },
          {lat: 22.307286, lng: 114.161492},
          {lat: 22.306416, lng: 114.165227},
          {lat: 22.309129, lng: 114.165144},
          {lat: 22.309077, lng: 114.167855},
          {lat: 22.305929, lng: 114.166998},
          {lat: 22.303140, lng: 114.167994}
        ],
        [
          {lat: 22.303386, lng: 114.160092},
          {lat: 22.309016, lng: 114.161027},
          {lat: 22.309729, lng: 114.165644},
          {lat: 22.310477, lng: 114.168155},
          {lat: 22.305229, lng: 114.169098},
          {lat: 22.303040, lng: 114.170494}
        ]
      ],

      Stand_By_i: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeArea(), 2000);
  }

  changeArea(){
    console.log('changeArea')
    var {Stand_By_One, Stand_By_Two, Stand_By_Three, Stand_By_Four, Stand_By_Five, Stand_By_i} = this.state
    Stand_By_i ++
    if(Stand_By_i == 3){
      Stand_By_i = 0
    }
    this.setState({
      Stand_By_i: Stand_By_i,
      Area_One_Coords: Stand_By_One[Stand_By_i],
      Area_Two_Coords: Stand_By_Two[Stand_By_i],
      Area_Three_Coords: Stand_By_Three[Stand_By_i],
      Area_Four_Coords: Stand_By_Four[Stand_By_i],
      Area_Five_Coords: Stand_By_Five[Stand_By_i]
    })
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

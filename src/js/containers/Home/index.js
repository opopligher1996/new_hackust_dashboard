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
import './style.scss';

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
    const { date, location, slot, events } = this.state;
    const images = [
      "https://www.area47.at/website/var/tmp/image-thumbnails/0/139/thumb__bigimg/area47_otztal_partyarea_riverhaus_1.jpeg",
      "https://www.hollandevenementengroep.nl/foto/11902/858/500/!crop!/files/Accent%20Fotos/party2.jpg"
    ];
    return (
      <div>
        <Row>
          <Col md={3} className="sidebar">
            <div className="icon-div">
              icon
            </div>
            <div className="sidebar-manu">
             <ul>
               <li><h6> Home</h6></li>
               <li><Link to="/"><h6> Map</h6></Link></li>
               <li><h6>User</h6></li>
             </ul>
            </div>
          </Col>
          <Col md={21}>
            <Row className="header">
              <div className="dashboard-name">
                <h4>Dashboard</h4>
              </div>
            </Row>
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

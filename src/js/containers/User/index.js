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
import { Link } from "react-router-dom";
import {Row, Col} from 'antd';

class User extends Component {

  constructor(props) {
    super(props);
  }

  render() {
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

// const mapStateToProps = ({  }) => {
//
// };
//
// const mapDispatchToProps = {
//
// };

// export default connect(mapStateToProps, mapDispatchToProps)(About);
export default User;

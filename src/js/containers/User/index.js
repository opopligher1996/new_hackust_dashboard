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

class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orders : [
        {
          id: '0043851',
          food: 'Seafood Rice Doria',
          qty:'x4',
          time: '11:00',
          company: 'Pizza Hut',
          progressbar: '20',
        },
        {
          id: '0043852',
          food: 'Popcorn Crispy Chicken',
          qty:'x3',
          time: '12:00',
          company: 'KFC',
          progressbar: '88',
        },
        {
          id: '0043853',
          food: 'Seafood Supreme',
          qty:'x5',
          time: '14:00',
          company: 'Pizza Hut',
          progressbar: '65',
        }

      ]
    }
  }
  renderOrderRecords = () => {
    const {orders} = this.state
    return orders.map((order, index) =>
      <FoodOrder
        id= {order.id}
        food={order.food}
        qty={order.qty}
        time={order.time}
        company={order.company}
        progressbar={order.progressbar}
      />
    )
  }

  districtChange(event) {
    console.log(event.target.value);
  }
  render() {
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
              <div className="user-outer-div">
                <div className="user-div">
                  <div className="lineup">
                    <div>
                      <input type="radio" value="Easter" name="district"/> Easter &emsp;
                      <input type="radio" value="Southern" name="district"/> Southern &emsp;
                      <input type="radio" value="North" name="district"/> North &emsp;
                      <input type="radio" value="Sha Tin" name="district"/> Sha Tin &emsp;
                      <input type="radio" value="Tai Po" name="district"/> Tai Po &emsp;
                      <input type="radio" value="Tsuen Wan" name="district"/> Tsuen Wan &emsp;
                      <input type="radio" value="Tuen Mun" name="district"/> Tuen Mun &emsp;
                      <input type="radio" value="Kwun Tong" name="district"/> Kwun Tong &emsp;
                      <input type="radio" value="Yuen Long" name="district"/> Yuen Long &emsp;
                    </div>
                  </div>
                  <div>
                    {this.renderOrderRecords()}
                  </div>
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
export default User;

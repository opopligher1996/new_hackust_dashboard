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
import { Link } from "react-router-dom";
import {Row, Col} from 'antd';

class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orders : [
        {
          id: '1234567',
          food: 'Seafood Rice Doria',
          qty:'x4',
          time: '11:00',
          company: 'Pizza Hut',
          progressbar: '20',
        },
        {
          id: '7654321',
          food: 'Popcorn Crispy Chicken',
          qty:'x3',
          time: '12:00',
          company: 'KFC',
          progressbar: '88',
        },
        {
          id: '1234568',
          food: 'Seafood Supreme',
          qty:'x5',
          time: '14:00',
          company: 'Pizza Hut',
          progressbar: '65',
        },
        {
          id: '4352761',
          food: 'Mushroom Rice',
          qty:'x2',
          time: '15:00',
          company: 'KFC',
          progressbar: '30',
        },
        {
          id: '3627154',
          food: 'Zinger Burger',
          qty:'x3',
          time: '15:00',
          company: 'KFC',
          progressbar: '25',
        },

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

  setGender(event) {
    console.log(event.target.value);
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
            <Row className="header">
              <div className="dashboard-name">
                <h1>User Order</h1>
              </div>
            </Row>
            <Row className="header">
              <div className="lineup">
                <div onChange={this.setGender.bind(this)}>
                  <input type="radio" value="Easter" name="district"/> Easter
                  <input type="radio" value="Southern" name="district"/> Southern
                  <input type="radio" value="North" name="district"/> North
                </div>
              </div>
            </Row>

            <Row>
              <div>
              {this.renderOrderRecords()}
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

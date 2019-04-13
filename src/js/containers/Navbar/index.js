import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu, Col, Row, Icon } from 'antd';
const { Header } = Layout;
import { withRouter } from 'react-router-dom';
import routes from '../../routes';
import LocationSearch from '../../components/LocationSearch';
import ThemeButton from '../../components/ThemeButton';
import './styles.scss';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }

  onLocationChange = (address, location) => {
    this.setState({
      address,
      location
    });
  }

  render() {
    const routesOnNav = routes.filter(item => item.showOnNav);
    return (
      <div>
      </div>
    )
  }
}

export default withRouter(Navbar);

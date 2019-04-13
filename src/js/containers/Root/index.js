import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from "react-router-dom";
import { Layout as AntdLayout } from 'antd';
const { Content } = AntdLayout;
import Router from '../Router';
import Layout from '../Layout';
import Navbar from '../Navbar';
import routes from '../../routes';
import './styles.scss';

class Root extends Component {

  render() {
    //TODO: implement react-loadable
    const { context, url } = this.props;
    return (
      <Router context={context} location={url}>
        <Layout>
          <Navbar />
          <Switch>
            <Content>
              {routes.map((route, i) => <Route key={i} {...route} />)}
            </Content>
          </Switch>
        </Layout>
      </Router>
    )
  }
}

export default Root;

import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from '../Navbar';
import { Layout as AntdLayout } from 'antd';

// const Layout = ({component: Component, ...rest}) => {
//   console.log('component', Component);
//   return (
//     <Route {...rest} render={matchProps => (
//       <div className="DefaultLayout">
//         <Navbar />
//         {!!Component ? <Component {...matchProps} /> : <div>Nth</div>}
//         <div className="Footer">Footer</div>
//       </div>
//     )} />
//   )
// };
//
class Layout extends Component {
  render() {
    return (
      <AntdLayout>
        {this.props.children}
      </AntdLayout>
    )
  }
}

export default Layout;

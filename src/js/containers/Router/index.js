import React, { Component } from 'react';
import { BrowserRouter, StaticRouter } from 'react-router-dom'

class Router extends Component {
  renderRouter = () => {
    if(typeof window !== 'undefined') {
      return(
        <BrowserRouter>
          {this.props.children}
        </BrowserRouter>
      )
    } else {
      return(
        <StaticRouter location={this.props.url} context={this.props.context}>
          {this.props.children}
        </StaticRouter>
      )
    }
  }

  render() {
    return(this.renderRouter())
  }
}

export default Router;

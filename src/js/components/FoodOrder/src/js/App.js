import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import { Provider } from 'react-redux'
import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from 'react-apollo';
import configureStore from '../redux/configureStore';
import 'Styles/App.scss';

export const store = configureStore();
export const dispatch = store.dispatch;

// const client = new ApolloClient({
//   uri: 'https://nx9zvp49q7.lp.gql.zone/graphql'
// });

class App extends Component {
  render() {
    return (
      <Provider store={store} >
          <Root />
      </Provider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

import React, { Component } from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '../redux/configureStore';
import Root from '../js/containers/Root';
import 'babel-polyfill';

const store = configureStore();

render(
  <Provider store={store} >
     <Root />
  </Provider>,
  document.querySelector('#app'))

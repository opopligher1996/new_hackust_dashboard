import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux'
import Loadable from 'react-loadable';
import configureStore from '../redux/configureStore';
import Root from '../js/containers/Root';
import 'babel-polyfill';

const state = window.__STATE__;
delete window.__STATE__;
const store = configureStore(state);

Loadable.preloadReady().then(() => {
  hydrate(
    <Provider store={store} >

       <Root />

    </Provider>,
    document.querySelector('#app')
  )
});

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import configureStore, { sagaMiddleware } from '../redux/configureStore';
import { StaticRouter } from "react-router-dom";
import Root from '../js/containers/Root';
import rootSaga from '../js/containers/Home/saga';
import 'babel-polyfill';
import { getBundles } from 'react-loadable/webpack'

//https://medium.freecodecamp.org/server-side-rendering-your-react-app-in-three-simple-steps-7a82b95db82e

module.exports = function render(initialState, context, url, stats) {

  const store = configureStore(initialState);

  let modules = [];

  let content = renderToString(
    <Provider store={store} >
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <Root context={context} url={url} />
      </Loadable.Capture>

    </Provider>
  );

  console.log('modules' ,modules);

  let bundles = getBundles(stats, modules);

  return { content, store, bundles };
}

import express from 'express';
import fs from 'fs';
import template from '../js/template';
import path from 'path';
import 'babel-polyfill';
import 'isomorphic-fetch';
import { matchPath } from "react-router-dom";
import routes from "../js/routes";
import configureStore from '../redux/configureStore';
import Loadable from 'react-loadable';
import stats from '../../dist/react-loadable.json';

const app = express();
// Serving static files
// app.use('/assets', express.static(path.resolve(__dirname, '../../assets')));
app.use('/public', express.static(path.resolve(__dirname, '../public')));
app.use('/media', express.static(path.resolve(__dirname, '../../media')));

// hide powered by express
app.disable('x-powered-by');
// start the server

//https://medium.com/bucharestjs/upgrading-a-create-react-app-project-to-a-ssr-code-splitting-setup-9da57df2040a
Loadable.preloadAll().then(() => {
    app.listen(process.env.PORT || 8080, (error) => {
        // ...
        console.log("listening on " + process.env.PORT || 8080 + "...");
    });
});
// app.listen();

//https://medium.com/@navgarcha7891/react-server-side-rendering-with-simple-redux-store-hydration-9f77ab66900a
//https://medium.com/@michielwesterbeek/serverless-server-side-rendering-with-redux-saga-a0cf267dc795

let initialState = {
  total: 0
}

//SSR function import
const ssr = require('../../views/server');

//https://irisschaffer.com/webpack--express--compressed-static-assets
const serveGzipped = contentType => (req, res, next) => {
  // does browser support gzip? does the file exist?
  const rootFolder = path.resolve(__dirname, '../../');
  const acceptedEncodings = req.acceptsEncodings()
  console.log('gzipped', `${rootFolder}${req.url}.gz`);
  if (
    acceptedEncodings.indexOf('gzip') === -1
    || !fs.existsSync(`${rootFolder}${req.url}.gz`)
  ) {
    console.log('gzip failed');
    next()
    return
  }

  // update request's url
  req.url = `${req.url}.gz`

  // set correct headers
  res.set('Content-Encoding', 'gzip')
  res.set('Content-Type', contentType)
  // let express.static take care of the updated request
  next()
}

app.get('*.js', serveGzipped('text/javascript')) // !
app.get('*.css', serveGzipped('text/css')) // !
app.use('/assets', express.static(path.resolve(__dirname, '../../assets'), {
  immutable : true,
  maxAge    : '1h' // caching!
}))

// server rendered home page
app.get('*', (req, res) => {
  const context = { };
  console.log('req.url', req.url);
  const { store, content, bundles }  = ssr(initialState, context, req.url, stats);
  const preloadedState = store.getState();
  const currentRoute = routes.find(route => matchPath(req.url, route));
  console.log('currentRoute', currentRoute);

  const requestInitDataSaga = currentRoute
                          && currentRoute.component.requestInitDataSaga
                          && currentRoute.component.requestInitDataSaga();

  if(!!requestInitDataSaga) {
    store.runSaga(() => requestInitDataSaga).done.then(() => {
      console.log('requestInitDataSaga done');
      const reduxState = store.getState();
      const response = template("Server Rendered Page", reduxState, content, bundles);
      res.setHeader('Cache-Control', 'assets, max-age=604800');
      res.send(response);
    });
    ssr(store.getState(), context, req.url, stats);
    store.close();
  } else {
    const response = template("Server Rendered Page", preloadedState, content, bundles);
    res.setHeader('Cache-Control', 'assets, max-age=604800');
    res.send(response);
  }


});

// Pure client side rendered page
app.get('/client', (req, res) => {
  let response = template('Client Side Rendered page')
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});

// tiny trick to stop server during local development

  app.get('/exit', (req, res) => {
    if(process.env.PORT) {
      res.send("Sorry, the server denies your request")
    } else {
      res.send("shutting down")
      process.exit(0)
    }

  });

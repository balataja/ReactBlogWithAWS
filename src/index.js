import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './routes.js';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import { Router, browserHistory } from 'react-router';

const store = configureStore();
// ToDo: Get the favicon.ico working. Check against create-react-app, should have a working version.
ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

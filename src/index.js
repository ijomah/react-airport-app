import React from 'react';
import { createRoot } from "react-dom/client";
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.css';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { requestFlights, searchFlights } from './reducers'

import './index.css';

const logger = createLogger() 

const rootReducers = combineReducers({requestFlights, searchFlights})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

const root = createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-0zrhohozrf3syio6.us.auth0.com"
    clientId="I2rFaaLW1bq0vkEclHbxQPSiVHwMM0J2"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
      <Router>
        {/* <Routes> */}
          {/* <Route Component={App} /> */}
          <App />
        {/* </Routes> */}
      </Router>
    </Provider>
  </Auth0Provider>
);

registerServiceWorker();

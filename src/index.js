import React from 'react';
import { createRoot } from "react-dom/client";
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0ProviderWithNavigate } from "./auth/auth0-provider-with-navigate"; 
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.css';

//import { Auth0ProviderWithHistory } from './auth/auth0-provider-with-history';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { requestFlights, searchFlights } from './reducers'

import './index.css';

const logger = createLogger() 

const rootReducers = combineReducers({requestFlights, searchFlights})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

const root = createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <Router>
      <Auth0ProviderWithNavigate>
        <App/>
      </Auth0ProviderWithNavigate>
    </Router>
  </Provider>
);

registerServiceWorker();

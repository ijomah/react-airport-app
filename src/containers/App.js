import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlaneArrival, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";

import { setSearchField, requestFlights } from '../actions';

import Navigation from './../components/nav/navBar';
import Home from '../components/home/homePage';
import CallbackPage from '../auth/callBack'; 
import NotFoundPage from '../components/errorFolder/NotFoundPage';
import Dashboard from '../components/dashboard';
// import Auth from '../auth/auth';


import './App.css';

library.add(faPlaneArrival, faPlaneDeparture);

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    searchField: state.searchFlights.searchField,
    flights: state.requestFlights.flights,
    isPending: state.requestFlights.isPending
  }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from reducers.
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestFlights: () => dispatch(requestFlights('https://opensky-network.org/api/states/all'))
    // onRequestFlightsByTime: (val) => dispatch(requestFlights(`https://opensky-network.org/api/flights/all?begin=${val.Beg}&end=${val.End}`))
  }
}

class App extends Component {
  // constructor(props) {
  //   super(props)
  //  // this.auth = new Auth(this.props.history);
  //   // console.log("props history check from router ", this.props.history)
  //   console.log("props check form store ", this.props)
  // }
  componentDidMount() { 
    this.props.onRequestFlights();
  }

  render() {
    const { flights, searchField } = this.props;
    const filteredFlights = flights.filter(flight => {
      return flight[2].toLowerCase().includes(searchField.toLowerCase());
    })

    return (
      <div className='w-100 tc'>
          <Routes>
            <Route 
              path='' element={ <Navigation 
              //auth={this.auth} 
              />}
            >
              <Route path='/home'
              exact 
              element={<Home />}
              // render={props => <Home 
              //  auth={this.auth} {...props} 
              // />} 
              />        
              <Route path='/dashboard' element={<Dashboard filteredFlight = {filteredFlights} />} />
              <Route path='/callback' render={props => <CallbackPage auth={this.auth} {...props} />} /> 
              <Route path='*' element={<NotFoundPage />} />
            </Route>
          </Routes>
      </div>
    );
  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)

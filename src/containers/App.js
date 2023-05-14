import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlaneArrival, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";

// import { WithAuthenticationRequiredOptions } from '@auth0/auth0-react';

import { setSearchField, requestFlights } from '../actions';
// import PlaneList from './../components/PlaneList';
// import SearchBox from '../components/SearchBox';
// import ErrorBoundary from '../components/ErrorBoundary';
import Navigation from './../components/nav/navBar';
import Home from '../components/home/homePage';
//import FlightTime from '../components/flightTime';
import { CallbackPage } from '../auth/callBack'; 
import NotFoundPage from '../components/errorFolder/NotFoundPage';
import Profile from '../components/profile';


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
    onRequestFlights: () => dispatch(requestFlights('https://opensky-network.org/api/states/all')),
    onRequestFlightsByTime: (val) => dispatch(requestFlights(`https://opensky-network.org/api/flights/all?begin=${val.Beg}&end=${val.End}`)),
    // onPassTimeDateField: (event) => dispatch(passTimeDateField(event.target.value)),
    //onAuth0: () => dispatch(useAuth0())
  }
}

class App extends Component {
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
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />        
            <Route path='/profile' element={<Profile filteredFlight = {filteredFlights} />} />
            <Route path='/callback' element={<CallbackPage />} /> 
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
        <h1 className='f1 pa4'>World Flights Record</h1>
        <img className='background-image' style={{width:'70em', height:'30em', margin:'.4em'} } src='dashboard-img.jpg' alt='A landed Aircraft' />  
      </div>
    );
  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlaneArrival, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";

import { setSearchField, requestFlights } from '../actions';
import PlaneList from './../components/PlaneList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import Navigation from './../components/nav/navBar';
import LoginButton from '../components/loginButton';
import Home from '../components/home/homePage'

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
    onRequestFlights: () => dispatch(requestFlights()),
    onPassTimeDateField: (event) => dispatch(passTimeDateField(event.target.value)),
    onRequestFlightsByTime: () => dispatch(requestFlightsByTime(event.target.value))
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestFlights();
  }

  render() {
    const { flights, searchField, onSearchChange, isPending } = this.props;
    const filteredFlights = flights.filter(flight => {
      return flight[2].toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div className='w-100 tc'>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            {/* <Route path='shop' element={<Shop />} />
            <Route path='/preferences' element={<Preferences />} /> */}
            <Route path='/dashboard' element={<LoginButton />} /> 
          </Route>
        </Routes>
        <LoginButton />
        <h1 className='f1'>World Flights Record </h1>
        <SearchBox searchChange={onSearchChange}/>
        <div>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundary>
              <PlaneList flights={filteredFlights} />
              {/* <PlaneList flights={flights} /> */}
            </ErrorBoundary>
          }
        </div>
      </div>
    );
  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)

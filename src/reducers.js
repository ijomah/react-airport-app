
import {
  CHANGE_TIMEDATEFIELD,
  CHANGE_SEARCHFIELD,
  REQUEST_FLIGHTS_PENDING,
  REQUEST_FLIGHTS_SUCCESS,
  REQUEST_FLIGHTS_FAILED
 } from './constants';

const initialStateSearch = {
  searchField: ''
}

export const searchFlights = (state=initialStateSearch, action={}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, {searchField: action.payload})
    default:
      return state
  }
}

const initialStateFlights = {
  flights: [],
  isPending: true
}

export const requestFlights = (state=initialStateFlights, action={}) => {
  switch (action.type) {
    case REQUEST_FLIGHTS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_FLIGHTS_SUCCESS:
      return Object.assign({}, state, {flights: action.payload, isPending: false})
    case REQUEST_FLIGHTS_FAILED:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}

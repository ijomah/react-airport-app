import { apiCall } from './api/api'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_FLIGHTS_PENDING,
  REQUEST_FLIGHTS_SUCCESS,
  REQUEST_FLIGHTS_FAILED
 } from './constants'


export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

export const requestFlights = (url) => (dispatch) => {
  dispatch({ type: REQUEST_FLIGHTS_PENDING })
  apiCall(url)
    .then(data => {
      console.log(data);
      return dispatch({ type: REQUEST_FLIGHTS_SUCCESS, payload: data.states })
    })
    .catch(error => dispatch({ type: REQUEST_FLIGHTS_FAILED, payload: error }))
}

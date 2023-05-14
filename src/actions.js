import { apiCall } from './api/api'
import {
  CHANGE_SEARCHFIELD,
  CHANGE_TIMEDATEFIELD,
  REQUEST_FLIGHTS_PENDING,
  REQUEST_FLIGHTS_SUCCESS,
  REQUEST_FLIGHTS_FAILED
 } from './constants'


export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

export const passTimeDateField = (timeDate) => ({type: CHANGE_TIMEDATEFIELD, paload: timeDate})

export const requestFlights = (url) => (dispatch) => {
  dispatch({ type: REQUEST_FLIGHTS_PENDING })
  apiCall(url)
    .then(data => {
      console.log(data);
      return dispatch({ type: REQUEST_FLIGHTS_SUCCESS, payload: data.states })
    })
    .catch(error => dispatch({ type: REQUEST_FLIGHTS_FAILED, payload: error }))
}

const stringDateTimeConversion = (dateVal, timeVal ) => {
  const year = parseInt(dateVal.slice(0, 4));
  const month = parseInt(dateVal.slice(5, 7));
  const day = parseInt(dateVal.slice(8));
  const hour = parseInt(timeVal.slice(0, 2));
  const minute = parseInt(timeVal.slice(3));

  let dateTimeNo = Date.UTC(year, month, day, hour, minute);
  let dateTimeInSeconds =  dateTimeNo / 1000;
  console.log('Unix Epoc in Seconds', dateTimeInSeconds);
  return dateTimeInSeconds;
}
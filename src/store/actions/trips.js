// import { window } from "browser-monads"
import {
  GET_TRIPS,
  SET_TRIP,
  GET_SEARCH_DATA,
  ASYNC_START,
  RESET_TRIPS,
  SET_PASSENGERS,
} from "../types"
import { Trips } from "../../services"

const getTrips = data => ({
  type: GET_TRIPS,
  data,
})

export const setTrip = (data, state) => ({
  type: SET_TRIP,
  [state]: data,
})

export const setPassengers = passengers => ({
  type: SET_PASSENGERS,
  passengers,
})

export const getSearchData = searchData => ({
  type: GET_SEARCH_DATA,
  searchData,
})

export const resetTrips = dataSet => ({
  type: RESET_TRIPS,
  dataSet,
})

const asyncStart = identifier => ({
  type: ASYNC_START,
  identifier,
})

export const fetchTripsRequest = params => async (dispatch, getState) => {
  const {
    trips: { identifier },
  } = getState()

  dispatch(asyncStart(identifier))
  try {
    const data = await Trips.get(params)
    return dispatch(getTrips(data))
  } catch (error) {
    throw error
  }
}

export const searchTripsRequest = params => async (dispatch, getState) => {
  const {
    trips: { identifier, searchData },
  } = getState()

  dispatch(asyncStart(identifier))
  try {
    const data = await Trips.search({ ...searchData, ...params })
    return dispatch(getTrips(data))
  } catch (error) {
    throw error
  }
}

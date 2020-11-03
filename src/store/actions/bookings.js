import {
  ASYNC_START,
  SET_BOOKED_TRIP,
  RESET_BOOKINGS,
  GET_BOOKINGS,
  GET_UNAUTH_BOOKINGS,
  SET_UNAUTH_BOOKED_TRIP,
} from "../types"
import { BookingsRequestService } from "../../services"
import { resetTrips } from "./trips"

const getBookings = data => ({
  type: GET_BOOKINGS,
  data,
})
const setUnAuthBookings = bookedTrip => ({
  type: SET_UNAUTH_BOOKED_TRIP,
  bookedTrip,
})
const getUnAuthBookings = data => ({
  type: GET_UNAUTH_BOOKINGS,
  data,
})
const setBookedTrip = bookedTrip => ({
  type: SET_BOOKED_TRIP,
  bookedTrip,
})

const asyncStart = identifier => ({
  type: ASYNC_START,
  identifier,
})

export const resetBookings = dataSet => dispatch =>
  dispatch({
    type: RESET_BOOKINGS,
    dataSet,
  })

export const fetchBookingsRequest = params => async (dispatch, getState) => {
  const {
    bookings: { identifier },
  } = getState()

  dispatch(asyncStart(identifier))
  try {
    const data = await BookingsRequestService.list(params)
    dispatch(getBookings(data))
    return data
  } catch (error) {
    dispatch(getBookings([]))
    throw error
  }
}
export const fetchUnAuthBookingsRequest = body => async (
  dispatch,
  getState
) => {
  const {
    bookings: { identifier },
  } = getState()

  dispatch(asyncStart(identifier))
  try {
    const data = await BookingsRequestService.passenger(body)

    dispatch(getUnAuthBookings(data))
    return data
  } catch (error) {
    dispatch(getUnAuthBookings([]))
    throw error
  }
}
export const unAuthBookTripRequest = body => async (dispatch, getState) => {
  const {
    bookings: { identifier },
  } = getState()

  dispatch(asyncStart(identifier))
  try {
    const [data] = await BookingsRequestService.unAuthBook(body)
    console.log(data)
    dispatch(setUnAuthBookings(data))
    dispatch(resetTrips())
    return data
  } catch (error) {
    const data = error.response.data
    dispatch(setUnAuthBookings(data))
    throw error
  }
}

export const bookTripRequest = body => async (dispatch, getState) => {
  const {
    bookings: { identifier },
  } = getState()

  dispatch(asyncStart(identifier))
  try {
    const [data] = await BookingsRequestService.book(body)
    console.log(data)
    dispatch(setBookedTrip(data))
    dispatch(resetTrips())
    return data
  } catch (error) {
    dispatch(setBookedTrip({}))
    throw error
  }
}

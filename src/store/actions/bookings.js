import {
  ASYNC_START,
  SET_BOOKED_TRIP,
  RESET_BOOKINGS,
  GET_BOOKINGS,
} from "../types"
import { BookingsRequestService } from "../../services"
import { resetTrips } from "./trips"

const getBookings = data => ({
  type: GET_BOOKINGS,
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

export const bookTripRequest = body => async (dispatch, getState) => {
  const {
    bookings: { identifier },
  } = getState()

  dispatch(asyncStart(identifier))
  try {
    const [data] = await BookingsRequestService.book(body)
    dispatch(setBookedTrip(data))
    dispatch(resetTrips())
    return data
  } catch (error) {
    dispatch(setBookedTrip({}))
    throw error
  }
}

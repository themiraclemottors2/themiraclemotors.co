import { ASYNC_START, SET_BOOKED_TRIP } from "../types"
import { BookingsRequestService } from "../../services"

const setBookedTrip = bookedTrip => ({
  type: SET_BOOKED_TRIP,
  bookedTrip,
})

const asyncStart = identifier => ({
  type: ASYNC_START,
  identifier,
})

export const bookTripRequest = body => async (dispatch, getState) => {
  const {
    bookings: { identifier },
  } = getState()

  dispatch(asyncStart(identifier))
  try {
    const [data] = await BookingsRequestService.book(body)
    console.log(data)
    return dispatch(setBookedTrip(data))
  } catch (error) {
    dispatch(setBookedTrip({}))
    throw error
  }
}

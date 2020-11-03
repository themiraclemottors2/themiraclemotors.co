import {
  ASYNC_START,
  UPDATE_PAGINATION,
  UPDATE_FILTER,
  SET_BOOKED_TRIP,
  RESET_BOOKINGS,
  GET_BOOKINGS,
  GET_UNAUTH_BOOKINGS,
  SET_UNAUTH_BOOKED_TRIP,
} from "../types"

const initState = {
  data: [],
  pagination: { page: 1, limit: 50 },
  filters: {},
  loading: false,
  identifier: "bookings",
  bookedTrip: {},
}

export default (
  state = initState,
  { type, data, filters, page, identifier, bookedTrip, dataSet }
) => {
  switch (type) {
    case GET_BOOKINGS:
      return {
        ...state,
        data,
        loading: false,
      }
    case SET_BOOKED_TRIP:
      return {
        ...state,
        bookedTrip,
        loading: false,
      }
    case SET_UNAUTH_BOOKED_TRIP:
      return {
        ...state,
        bookedTrip,
        loading: false,
      }
    case GET_UNAUTH_BOOKINGS:
      return {
        ...state,
        data,
        loading: false,
      }
    case RESET_BOOKINGS:
      if (dataSet) {
        return {
          ...state,
          ...dataSet,
        }
      }
      return {
        ...initState,
      }
    case ASYNC_START:
      if (identifier === initState.identifier)
        return {
          ...state,
          loading: true,
        }
      return state
    case UPDATE_FILTER:
      if (identifier === initState.identifier)
        return {
          ...state,
          filters: { ...state.filters, ...filters },
          pagination: { ...initState.pagination },
        }
      return state
    case UPDATE_PAGINATION:
      if (identifier === initState.identifier)
        return {
          ...state,
          pagination: {
            ...state.pagination,
            page,
          },
        }
      return state
    default:
      return state
  }
}

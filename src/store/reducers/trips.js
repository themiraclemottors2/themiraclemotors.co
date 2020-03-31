import {
  ASYNC_START,
  GET_TRIPS,
  SET_TRIP,
  GET_SEARCH_DATA,
  UPDATE_PAGINATION,
  UPDATE_FILTER,
  RESET_TRIPS,
  SET_PASSENGERS,
} from "../types"
import moment from "moment"

const initState = {
  data: [],
  searchData: {
    departureTerminalId: "",
    arrivalTerminalId: "",
    departureTimestamp: moment().format("YYYY-MM-DDTHH:mm"),
    returnTimestamp: moment().format("YYYY-MM-DDTHH:mm"),
    numberOfTravellers: "",
    bookingType: "one_way",
  },
  pagination: { page: 1, limit: 50 },
  filters: {},
  loading: false,
  identifier: "trips",
  outgoingTrip: { seats: [] },
  returnTrip: { seats: [] },
  passengers: [],
}

export default (
  state = initState,
  {
    type,
    data,
    searchData,
    filters,
    page,
    identifier,
    dataSet,
    returnTrip,
    outgoingTrip,
    passengers,
  }
) => {
  switch (type) {
    case GET_TRIPS:
      return {
        ...state,
        data,
        loading: false,
      }
    case SET_TRIP:
      return {
        ...state,
        outgoingTrip: { ...state.outgoingTrip, ...outgoingTrip },
        returnTrip: { ...state.returnTrip, ...returnTrip },
        loading: false,
      }
    case SET_PASSENGERS:
      return {
        ...state,
        passengers,
      }
    case RESET_TRIPS:
      if (dataSet) {
        return {
          ...state,
          ...dataSet,
        }
      }
      return {
        ...initState,
      }
    case GET_SEARCH_DATA:
      return {
        ...state,
        searchData,
        loading: false,
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

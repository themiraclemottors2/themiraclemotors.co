// import { window } from "browser-monads"
import { GET_TERMINALS, ASYNC_START } from "../types"
import { TerminalsRequestService } from "../../services"
import { randomItemFromArray } from "lib"

const getTerminals = (data, popularTrips) => ({
  type: GET_TERMINALS,
  data,
  popularTrips,
})

const asyncStart = identifier => ({
  type: ASYNC_START,
  identifier,
})

const getPopularTrips = terminals => {
  return Array(12)
    .fill()
    .map(() => {
      let departure = randomItemFromArray(terminals)
      let arrival = randomItemFromArray(terminals)
      if (departure.id === arrival.id) {
        arrival = randomItemFromArray(terminals)
        departure = randomItemFromArray(terminals)
      }
      return { departure, arrival }
    })
}

export const fetchTerminalsRequest = () => async (dispatch, getState) => {
  const {
    terminals: { identifier, data },
  } = getState()
  if (!data.length) {
    dispatch(asyncStart(identifier))
  }
  try {
    const data = await TerminalsRequestService.get()
    const popularTrips = getPopularTrips(data)
    return dispatch(getTerminals(data, popularTrips))
  } catch (error) {
    dispatch(getTerminals([]))
    throw error
  }
}

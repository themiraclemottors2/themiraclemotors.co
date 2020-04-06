// import { window } from "browser-monads"
import { GET_TERMINALS, ASYNC_START } from "../types"
import { TerminalsRequestService } from "../../services"

const getTerminals = data => ({
  type: GET_TERMINALS,
  data,
})

const asyncStart = identifier => ({
  type: ASYNC_START,
  identifier,
})

export const fetchTerminalsRequest = () => async (dispatch, getState) => {
  const {
    terminals: { identifier },
  } = getState()

  dispatch(asyncStart(identifier))
  try {
    const data = await TerminalsRequestService.get()
    return dispatch(getTerminals(data))
  } catch (error) {
    dispatch(getTerminals([]))
    throw error
  }
}

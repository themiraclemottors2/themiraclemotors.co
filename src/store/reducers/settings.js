import { ASYNC_START, GET_SETTINGS } from "../types"

const initState = {
  loading: false,
  identifier: "settings",
  serviceCharge: 0,
}

export default (state = initState, { type, identifier, settings }) => {
  switch (type) {
    case GET_SETTINGS:
      return {
        ...state,
        ...settings,
        loading: false,
      }

    case ASYNC_START:
      if (identifier === initState.identifier)
        return {
          ...state,
          loading: true,
        }
      return state
    default:
      return state
  }
}

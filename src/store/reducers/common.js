import { APP_LOAD, REDIRECT, LOGOUT } from "../types"

const initState = {
  appLoaded: false,
  redirectTo: null,
}

export default (state = initState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        appLoaded: true,
      }
    case REDIRECT:
      return {
        ...state,
        redirectTo: null,
      }
    case LOGOUT:
      return {
        ...initState,
      }
    default:
      return state
  }
}

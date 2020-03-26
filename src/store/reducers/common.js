import { APP_LOAD, REDIRECTED, REDIRECT, LOGOUT, LOGIN } from "../types"

const initState = {
  appLoaded: false,
  isAuthenticated: false,
  redirectTo: null,
  error: null,
}

export default (
  state = initState,
  { type, isAuthenticated, redirectTo, error }
) => {
  switch (type) {
    case APP_LOAD:
      return {
        ...state,
        appLoaded: true,
        isAuthenticated,
        redirectTo,
      }
    case REDIRECTED:
      return {
        ...state,
        redirectTo: null,
      }
    case REDIRECT:
      return {
        ...state,
        redirectTo,
      }
    case LOGIN:
      return {
        ...state,
        isAuthenticated,
        redirectTo,
        error: null,
      }
    case LOGOUT:
      return {
        ...initState,
        redirectTo: "/",
      }
    default:
      return state
  }
}

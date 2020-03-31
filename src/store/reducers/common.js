import { APP_LOAD, REDIRECTED, REDIRECT, LOGOUT, LOGIN } from "../types"

const initState = {
  appLoaded: false,
  isAuthenticated: false,
  redirectTo: null,
  error: null,
  user: {},
}

export default (
  state = initState,
  { type, isAuthenticated, redirectTo, user }
) => {
  switch (type) {
    case APP_LOAD:
      return {
        ...state,
        appLoaded: true,
        isAuthenticated,
        user,
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
        user,
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

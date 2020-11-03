import {
  APP_LOAD,
  REDIRECTED,
  REDIRECT,
  LOGOUT,
  LOGIN,
  UPDATE_USER,
  GET_TERMINALS,
  CREATE_USER,
} from "../types"

const initState = {
  appLoaded: false,
  isAuthenticated: false,
  redirectTo: null,
  error: null,
  user: {},
  popularTrips: [],
}

export default (
  state = initState,
  { type, isAuthenticated, redirectTo, user, popularTrips }
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
    case GET_TERMINALS:
      return {
        ...state,
        popularTrips,
      }
    case UPDATE_USER:
      return {
        ...state,
        user,
      }
    case CREATE_USER:
      return {
        ...state,
        user,
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
        redirectTo: "/sign-in",
      }
    default:
      return state
  }
}

import { window } from "browser-monads"
import { APP_LOAD, REDIRECTED } from "../types"
import { setToken } from "../../lib"

export const onAppLoad = () => dispatch => {
  const accessToken = window.localStorage.getItem("accessToken")
  const user = window.localStorage.getItem("user")
  let isAuthenticated = false
  if (accessToken) {
    setToken(accessToken)
    isAuthenticated = true
  }
  return dispatch({
    type: APP_LOAD,
    isAuthenticated,
    user: JSON.parse(user),
  })
}

export const onRedirect = () => dispatch => dispatch({ type: REDIRECTED })

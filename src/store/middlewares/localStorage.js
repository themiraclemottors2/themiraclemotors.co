import { window } from "browser-monads"
import { setToken } from "../../lib"
import { LOGIN, LOGOUT, RESET_TOKEN } from "../types"

const localStorageMiddleware = store => next => action => {
  const { type, accessToken, refreshToken, user, error } = action
  if (type === LOGIN) {
    if (!error) {
      window.localStorage.setItem("accessToken", accessToken)
      window.localStorage.setItem("refreshToken", refreshToken)
      window.localStorage.setItem("user", JSON.stringify(user))
      setToken(accessToken)
    }
  } else if (type === RESET_TOKEN) {
    if (!error) {
      window.localStorage.setItem("accessToken", accessToken)
      window.localStorage.setItem("refreshToken", refreshToken)
      setToken(accessToken)
    }
  } else if (type === LOGOUT) {
    window.localStorage.removeItem("accessToken")
    window.localStorage.removeItem("refreshToken")
    window.localStorage.removeItem("user")
    setToken("")
  }

  next(action)
}

export default localStorageMiddleware

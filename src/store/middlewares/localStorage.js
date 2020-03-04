import { window } from "browser-monads"
import { setToken } from "../../lib"
import { LOGIN, LOGOUT } from "../types"

const localStorageMiddleware = store => next => action => {
  if (action.type === LOGIN) {
    let token
    if (!action.error) {
      token = action.token
      window.localStorage.setItem("jwt", token)
      setToken(token)
    }
  } else if (action.type === LOGOUT) {
    window.localStorage.removeItem("jwt")
    setToken("")
  }

  next(action)
}

export default localStorageMiddleware

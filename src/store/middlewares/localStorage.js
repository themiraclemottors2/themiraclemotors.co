import { LOGIN, LOGOUT, RESET_TOKEN, UPDATE_USER } from "../types"
import { LocalStorageService } from "../../services"

const localStorageMiddleware = store => next => action => {
  const { type, accessToken, refreshToken, user, error } = action
  if (type === LOGIN) {
    if (!error) {
      LocalStorageService.setToken({ accessToken, refreshToken })
      LocalStorageService.setUser(user)
    }
  }
  if (type === UPDATE_USER) {
    if (!error) {
      LocalStorageService.setUser(user)
    }
  } else if (type === RESET_TOKEN) {
    if (!error) {
      LocalStorageService.setToken({ accessToken, refreshToken })
    }
  } else if (type === LOGOUT) {
    LocalStorageService.clearStorage()
  }

  next(action)
}

export default localStorageMiddleware

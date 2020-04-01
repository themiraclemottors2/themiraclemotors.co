import { APP_LOAD, REDIRECTED } from "../types"
import { LocalStorageService } from "../../services"

export const onAppLoad = () => dispatch => {
  const token = LocalStorageService.getAccessToken()
  const user = LocalStorageService.getUser()
  let isAuthenticated = false
  if (token) {
    isAuthenticated = true
  }
  return dispatch({
    type: APP_LOAD,
    isAuthenticated,
    user,
  })
}

export const onRedirect = () => dispatch => dispatch({ type: REDIRECTED })

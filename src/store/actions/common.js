import { APP_LOAD, REDIRECTED, UPDATE_USER } from "../types"
import { LocalStorageService, ProfileRequestService } from "../../services"
import pick from "../../../node_modules/lodash/pick"

export const onAppLoad = () => dispatch => {
  const token = LocalStorageService.getAccessToken()
  let user = LocalStorageService.getUser()
  user = {
    ...pick(user, ["firstName", "lastName", "email", "phoneNumber", "gender"]),
    ...pick(user.profile, ["address", "kinFullName", "kinPhoneNumber"]),
  }
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

const updateUser = user => ({
  type: UPDATE_USER,
  user,
})

export const onRedirect = () => dispatch => dispatch({ type: REDIRECTED })

export const updateProfileRequest = params => async dispatch => {
  try {
    const data = await ProfileRequestService.update(params)
    return dispatch(updateUser(data))
  } catch (error) {
    throw error
  }
}

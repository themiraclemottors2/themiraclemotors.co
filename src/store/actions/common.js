import { APP_LOAD, REDIRECTED, UPDATE_USER, CREATE_USER } from "../types"
import { LocalStorageService, ProfileRequestService } from "../../services"
import pick from "../../../node_modules/lodash/pick"

export const onAppLoad = () => dispatch => {
  const token = LocalStorageService.getAccessToken()
  let user = LocalStorageService.getUser()
  if (user)
    user = {
      ...pick(user, [
        "firstName",
        "lastName",
        "email",
        "phoneNumber",
        "gender",
        "id",
      ]),
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
export const createUser = user => ({
  type: CREATE_USER,
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
export const CreateUser = body => async dispatch => {
  try {
    const data = await ProfileRequestService.create(body)

    return dispatch(createUser(data))
  } catch (error) {
    throw error
  }
}

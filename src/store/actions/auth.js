// import { window } from "browser-monads"
import { LOGIN, LOGOUT, REDIRECT } from "../types"
import { AuthRequestService } from "../../services"

const login = data => ({
  type: LOGIN,
  ...data,
  isAuthenticated: true,
})

const register = redirectTo => ({
  type: REDIRECT,
  redirectTo,
})

export const loginRequest = (body, redirectTo = null) => async dispatch => {
  try {
    const data = await AuthRequestService.signIn(body)
    return dispatch(login({ ...data, redirectTo }))
  } catch (error) {
    throw error
  }
}

export const registerRequest = body => async dispatch => {
  try {
    await AuthRequestService.signUp(body)
    return dispatch(register("/"))
  } catch (error) {
    throw error
  }
}

export const logout = () => dispatch => {
  return dispatch({ type: LOGOUT })
}

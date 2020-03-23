// import { window } from "browser-monads"
import { LOG_ERROR, LOGIN, LOGOUT, REDIRECT } from "../types"
import { Auth } from "../../services"

const login = data => ({
  type: LOGIN,
  ...data,
  isAuthenticated: true,
})

const register = redirectTo => ({
  type: REDIRECT,
  redirectTo,
})

const logError = error => ({
  type: LOG_ERROR,
  error,
})

export const loginRequest = (body, redirectTo = null) => async dispatch => {
  try {
    const data = await Auth.signIn(body)
    return dispatch(login({ ...data, redirectTo }))
  } catch (error) {
    let err = "Something went wrong, please try again"
    if (error.response) {
      err = error.response.data.message
    }
    dispatch(logError(err))
    throw error
  }
}

export const registerRequest = body => async dispatch => {
  try {
    const data = await Auth.signUp(body)
    return dispatch(register("/sign-in"))
  } catch (error) {
    let err = "Something went wrong, please try again"
    if (error.response) {
      err = error.response.data.message
    }
    dispatch(logError(err))
    throw error
  }
}

export const logout = () => dispatch => {
  return dispatch({ type: LOGOUT })
}

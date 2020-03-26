// import { window } from "browser-monads"
import { LOGIN, LOGOUT, REDIRECT } from "../types"
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

export const loginRequest = (body, redirectTo = null) => async dispatch => {
  try {
    const data = await Auth.signIn(body)
    return dispatch(login({ ...data, redirectTo }))
  } catch (error) {
    throw error
  }
}

export const registerRequest = body => async dispatch => {
  try {
    await Auth.signUp(body)
    return dispatch(register("/sign-in"))
  } catch (error) {
    throw error
  }
}

export const logout = () => dispatch => {
  return dispatch({ type: LOGOUT })
}

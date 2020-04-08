import axios from "axios"
import { serviceRoot } from "./constants"
import { LocalStorageService, AuthRequestService } from "../services"
import { navigate } from "gatsby"

export const serviceInstance = axios.create({
  baseURL: serviceRoot,
  headers: {
    // "Access-Control-Allow-Origin": "*",
    post: {
      "Content-Type": "application/json",
    },
  },
})

serviceInstance.interceptors.request.use(
  config => {
    const token = LocalStorageService.getAccessToken()
    if (token) {
      config.headers["Authorization"] = "Bearer " + token
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

serviceInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config
    console.log(originalRequest)
    if (!error.response) return Promise.reject(error)
    if (
      (error.response.status === 401 || error.response.status === 404) &&
      originalRequest.url === `${serviceRoot}/auth/refresh-token`
    ) {
      LocalStorageService.clearStorage()
      navigate("/sign-in")
      return Promise.reject(error)
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const refreshToken = LocalStorageService.getRefreshToken()
      const accessToken = LocalStorageService.getAccessToken()
      return serviceInstance
        .post(
          `${serviceRoot}/auth/refresh-token`,
          {
            refreshToken: refreshToken,
          },
          {
            headers: {
              Authorization: "",
            },
          }
        )
        .then(res => {
          if (res.status === 201) {
            LocalStorageService.setToken(res.data.data)
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer  + ${accessToken}`
            return axios(originalRequest)
          }
        })
    }
    return Promise.reject(error)
  }
)

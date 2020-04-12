import axios from "axios"
import { serviceRoot } from "./constants"
import { LocalStorageService } from "../services"
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

const refreshTokenUrl = "/auth/refresh-token"

serviceInstance.interceptors.request.use(
  config => {
    const token = LocalStorageService.getAccessToken()
    if (token && config.url !== refreshTokenUrl) {
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
    if (
      error.response &&
      error.response.status === 401 &&
      originalRequest.url === refreshTokenUrl
    ) {
      LocalStorageService.clearStorage()
      navigate("/sign-in")
      return Promise.reject(error)
    }

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true
      const refreshToken = LocalStorageService.getRefreshToken()
      try {
        return serviceInstance
          .post(refreshTokenUrl, {
            refreshToken: refreshToken,
          })
          .then(res => {
            if (res.status === 200) {
              LocalStorageService.setToken(res.data.data)
              return serviceInstance(originalRequest)
            }
          })
      } catch (err) {
        Promise.reject(error)
      }
    }
    return Promise.reject(error)
  }
)

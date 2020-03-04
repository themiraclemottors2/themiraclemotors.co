import axios from "axios"
import {
  serviceRoot
} from "./constants"

export const serviceInstance = axios.create({
  baseURL: serviceRoot,
  headers: {
    // "Access-Control-Allow-Origin": "*",
    post: {
      "Content-Type": "application/json",
    },
  },
})

export const setToken = (token) => {
  if (token) {
    serviceInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`
  } else {
    delete serviceInstance.defaults.headers.common["Authorization"]
  }
}
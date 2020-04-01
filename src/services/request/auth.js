import { serviceInstance, serviceRoot } from "lib"
import axios from "axios"

export default {
  signIn: body =>
    serviceInstance
      .post(`/auth/signin`, { ...body })
      .then(({ data: { data } }) => data),
  signUp: body =>
    serviceInstance
      .post(`/auth/signup`, body)
      .then(({ data: { data } }) => data),
  refreshToken: body => axios.post(`${serviceRoot}/auth/refresh-token`, body),
}

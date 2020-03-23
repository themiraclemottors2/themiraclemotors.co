import { serviceInstance } from "../lib"

export default {
  signIn: body =>
    serviceInstance
      .post(`/auth/signin`, { ...body })
      .then(({ data: { data } }) => data),
  signUp: body =>
    serviceInstance
      .post(`/auth/signup`, body)
      .then(({ data: { data } }) => data),
  refreshToken: body =>
    serviceInstance
      .post(`/auth/refresh-token`, body)
      .then(({ data: { data } }) => data),
}

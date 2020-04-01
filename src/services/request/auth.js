import { serviceInstance, serviceRoot } from "lib"
import axios from "axios"

export default (function() {
  var _service
  function _getService() {
    if (!_service) {
      _service = this
      return _service
    }
    return _service
  }

  const _signIn = body =>
    serviceInstance
      .post(`/auth/signin`, { ...body })
      .then(({ data: { data } }) => data)

  const _signUp = body =>
    serviceInstance
      .post(`/auth/signup`, body)
      .then(({ data: { data } }) => data)

  const _refreshToken = body =>
    axios
      .post(`${serviceRoot}/auth/refresh-token`, body)
      .then(({ data: { data } }) => data)

  return {
    getService: _getService,
    signIn: _signIn,
    signUp: _signUp,
    refreshToken: _refreshToken,
  }
})()

import { serviceInstance } from "lib"

export default (function() {
  var _service
  function _getService() {
    if (!_service) {
      _service = this
      return _service
    }
    return _service
  }

  const _updateUser = body =>
    serviceInstance
      .put(`/profiles/me`, { ...body })
      .then(({ data: { data } }) => data)

  return {
    getService: _getService,
    updateUser: _updateUser,
  }
})()

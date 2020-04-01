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

  const _getTerminals = params =>
    serviceInstance
      .get(`/terminals`, { params })
      .then(({ data: { data } }) => data)

  return {
    getService: _getService,
    getTerminals: _getTerminals,
  }
})()

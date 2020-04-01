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

  const _getTrips = params =>
    serviceInstance.get(`/trips`, { params }).then(({ data: { data } }) => data)

  const _searchTrips = params =>
    serviceInstance
      .get(`/trips/search`, { params })
      .then(({ data: { data } }) => data)

  return {
    getService: _getService,
    getTrips: _getTrips,
    searchTrips: _searchTrips,
  }
})()

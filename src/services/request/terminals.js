import { serviceInstance } from "lib"

export default (function() {
  const _getTerminals = params =>
    serviceInstance
      .get(`/terminals`, { params })
      .then(({ data: { data } }) => data)

  return {
    getTerminals: _getTerminals,
  }
})()

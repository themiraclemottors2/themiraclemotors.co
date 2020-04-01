import { serviceInstance } from "lib"

export default {
  get: params =>
    serviceInstance
      .get(`/trips`, { params })
      .then(({ data: { data } }) => data),
  search: params =>
    serviceInstance
      .get(`/trips/search`, { params })
      .then(({ data: { data } }) => data),
}

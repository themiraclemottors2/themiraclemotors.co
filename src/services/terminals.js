import { serviceInstance } from "../lib"

export default {
  get: params =>
    serviceInstance
      .get(`/terminals`, { params })
      .then(({ data: { data } }) => data),
}

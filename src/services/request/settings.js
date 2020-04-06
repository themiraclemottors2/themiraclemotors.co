import { serviceInstance } from "lib"

export default {
  get: () =>
    serviceInstance.get(`/settings`).then(({ data: { data } }) => data),
}

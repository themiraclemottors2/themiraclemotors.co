import { serviceInstance } from "../lib"

export default {
  get: () => serviceInstance.get(`...`).then(({ data }) => data),
}

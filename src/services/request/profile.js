import { serviceInstance } from "lib"

export default {
  update: body =>
    serviceInstance
      .put(`/profiles/me`, { ...body })
      .then(({ data: { data } }) => data),
  create: body =>
    serviceInstance
      .post(`/profiles`, { ...body })
      .then(({ data: { data } }) => data),
}

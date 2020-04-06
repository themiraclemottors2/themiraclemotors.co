import { serviceInstance } from "lib"

export default {
  book: body =>
    serviceInstance
      .post(`/bookings`, { ...body })
      .then(({ data: { data } }) => data),
  list: (id, params) =>
    serviceInstance
      .get(`/bookings/${id}`, { params })
      .then(({ data: { data } }) => data),
}

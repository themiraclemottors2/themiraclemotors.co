import { serviceInstance } from "lib"

export default {
  book: body =>
    serviceInstance
      .post(`/bookings`, { ...body })
      .then(({ data: { data } }) => data),
  list: (userId, params) =>
    serviceInstance
      .get(`/bookings/${userId}`, { params })
      .then(({ data: { data } }) => data),
}

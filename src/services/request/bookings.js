import { serviceInstance } from "lib"

export default {
  book: body =>
    serviceInstance
      .post(`/bookings`, { ...body })
      .then(({ data: { data } }) => data),
  list: params =>
    serviceInstance
      .get(`/bookings/me`, { params })
      .then(({ data: { data } }) => data),
}

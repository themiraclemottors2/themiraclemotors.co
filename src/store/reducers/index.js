import { combineReducers } from "redux"
import common from "./common"
import terminals from "./terminals"
import trips from "./trips"
import bookings from "./bookings"
import settings from "./settings"

export default combineReducers({
  common,
  terminals,
  trips,
  bookings,
  settings,
})

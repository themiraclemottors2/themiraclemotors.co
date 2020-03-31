import { combineReducers } from "redux"
import common from "./common"
import terminals from "./terminals"
import trips from "./trips"

export default combineReducers({
  common,
  terminals,
  trips,
})

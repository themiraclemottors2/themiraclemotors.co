import { ASYNC_START, GET_SETTINGS } from "../types"
import { SettingsRequestService } from "../../services"
import omit from "../../../node_modules/lodash/omit"

const getSettings = settings => ({
  type: GET_SETTINGS,
  settings,
})

const asyncStart = identifier => ({
  type: ASYNC_START,
  identifier,
})

export const settingsRequest = () => async (dispatch, getState) => {
  const {
    settings: { identifier },
  } = getState()

  dispatch(asyncStart(identifier))
  try {
    const data = await SettingsRequestService.get()
    return dispatch(getSettings(omit(data, ["updatedAt", "createdAt"])))
  } catch (error) {
    dispatch(getSettings({}))
    console.log(error)
  }
}

import { window } from "browser-monads"

const _setMultipleItems = storageItems => {
  storageItems.map(item => window.localStorage.setItem(item[0], item[1]))
}

// const _getMultipleItems = storageItems => {
//   return storageItems.map(item => window.localStorage.getItem(item))
// }

const _chearMultipleItems = storageItems => {
  storageItems.map(item => window.localStorage.removeItem(item))
}

export default {
  setToken: tokenObj =>
    _setMultipleItems([
      ["accessToken", tokenObj.accessToken],
      ["refreshToken", tokenObj.refreshToken],
    ]),
  setUser: userObject =>
    window.localStorage.setItem("user", JSON.stringify(userObject)),
  getAccessToken: () => window.localStorage.getItem("accessToken"),
  getRefreshToken: () => window.localStorage.getItem("refreshToken"),
  getUser: () => JSON.parse(window.localStorage.getItem("user")),
  clearStorage: () =>
    _chearMultipleItems(["accessToken", "refreshToken", "user"]),
}

import { window } from "browser-monads"

export default (function() {
  var _service
  function _getService() {
    if (!_service) {
      _service = this
      return _service
    }
    return _service
  }

  const _setMultipleItems = storageItems => {
    storageItems.map(item => window.localStorage.setItem(item[0], item[1]))
  }

  //   const _getMultipleItems = storageItems => {
  //     return storageItems.map(item => window.localStorage.getItem(item))
  //   }

  const _chearMultipleItems = storageItems => {
    storageItems.map(item => window.localStorage.removeItem(item))
  }

  function _setToken(tokenObj) {
    return _setMultipleItems([
      ["accessToken", tokenObj.accessToken],
      ["refreshToken", tokenObj.refreshToken],
    ])
  }

  const _setUser = userObject => {
    window.localStorage.setItem("user", JSON.stringify(userObject))
  }

  const _getAccessToken = () => {
    return window.localStorage.getItem("accessToken")
  }

  const _getRefreshToken = () => {
    return window.localStorage.getItem("refreshToken")
  }

  const _getUser = () => {
    return window.localStorage.getItem("user")
  }

  const _clearStorage = () => {
    _chearMultipleItems(["accessToken", "refreshToken", "user"])
  }

  return {
    getService: _getService,
    setToken: _setToken,
    getAccessToken: _getAccessToken,
    getRefreshToken: _getRefreshToken,
    clearStorage: _clearStorage,
    setUser: _setUser,
    getUser: _getUser,
  }
})()

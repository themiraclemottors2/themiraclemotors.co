import React, { Component } from "react"

const UnAuthContext = React.createContext()
class UnAuthContextProvider extends Component {
  state = {
    email: null,
    kin: null,
    address: null,
    phoneNumber: null,
    handleData: () => {},
  }

  render() {
    return (
      <UnAuthContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </UnAuthContext.Provider>
    )
  }
}
export { UnAuthContextProvider, UnAuthContext }

import React from "react"
import Layout from "./layout"

const AuthenticatedLayout = props => {
  return <Layout {...props} type="authenticated" />
}

export default AuthenticatedLayout

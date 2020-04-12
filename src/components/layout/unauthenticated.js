import React from "react"
import Layout from "./layout"

const UnauthenticatedLayout = props => {
  return <Layout {...props} type="unauthenticated" />
}

export default UnauthenticatedLayout

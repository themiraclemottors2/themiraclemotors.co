import React from "react"
import Layout from "./layout"

const UnauthenticatedLayout = ({ children, location }) => {
  return (
    <Layout location={location} type="unauthenticated">
      {children}
    </Layout>
  )
}

export default UnauthenticatedLayout

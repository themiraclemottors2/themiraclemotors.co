import React from "react"
import Layout from "./layout"

const AuthenticatedLayout = ({ children, location }) => {
  return (
    <Layout location={location} type="authenticated">
      {children}
    </Layout>
  )
}

export default AuthenticatedLayout

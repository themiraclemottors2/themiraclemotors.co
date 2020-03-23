import React from "react"
import Layout from "./layout"

const AppliedLayout = ({ children, location }) => {
  return (
    <Layout location={location} type="applied">
      {children}
    </Layout>
  )
}

export default AppliedLayout

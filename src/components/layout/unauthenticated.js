import React, { useEffect } from "react"
import Layout from "./layout"
import { useSelector } from "react-redux"
import { navigate } from "gatsby"

const UnauthenticatedLayout = ({ children, location }) => {
  const isAuthenticated = useSelector(
    ({ common: { isAuthenticated } }) => isAuthenticated
  )

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/")
    }
  }, [isAuthenticated])

  return (
    <Layout location={location} type="unauthenticated">
      {children}
    </Layout>
  )
}

export default UnauthenticatedLayout

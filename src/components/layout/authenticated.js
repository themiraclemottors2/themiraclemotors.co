import React, { useEffect } from "react"
import Layout from "./layout"
import { useSelector } from "react-redux"
import { navigate } from "gatsby"
import { window } from "browser-monads"

const AuthenticatedLayout = ({ children, location }) => {
  const isAuthenticated = useSelector(
    ({ common: { isAuthenticated } }) => isAuthenticated
  )

  const pathname = window.location.pathname

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(`/sign-in?redirect=${pathname}`)
    }
  }, [navigate, isAuthenticated, pathname])

  return (
    <Layout location={location} type="authenticated">
      {children}
    </Layout>
  )
}

export default AuthenticatedLayout

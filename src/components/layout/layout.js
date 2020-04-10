/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react"
import { StickyContainer } from "react-sticky"
import Footer from "../footer"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { connect } from "react-redux"
import { navigate } from "gatsby"
import * as actions from "store/actions/common"
import { settingsRequest } from "store/actions/settings"
import { fetchTerminalsRequest } from "store/actions/terminals"
import Header from "../header"
import styles from "./layout.module.scss"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { window } from "browser-monads"

class Layout extends Component {
  componentDidUpdate(prevProps, prevState) {
    this._handleRedirect(prevProps.redirectTo)
  }

  componentDidMount() {
    this._handleAppLoading()
  }

  _handleToastConfig = () => {
    toast.configure({
      autoClose: 3000,
      draggable: false,
      pauseOnHover: true,
    })
  }

  _handleRedirect = redirectTo => {
    const pathname = window.location.pathname
    const { isAuthenticated, type, onRedirect } = this.props

    if (redirectTo) {
      navigate(redirectTo)
      return onRedirect()
    }

    if (isAuthenticated && type === "unauthenticated") {
      navigate("/")
      return null
    }

    if (!isAuthenticated && type === "authenticated") {
      navigate(`/sign-in?redirect=${pathname}`)
      return null
    }
  }

  _handleAppLoading = () => {
    const {
      onAppLoad,
      appLoaded,
      settingsRequest,
      isAuthenticated,
      fetchTerminalsRequest,
    } = this.props
    if (!appLoaded) {
      onAppLoad()
      fetchTerminalsRequest()
    }

    if (isAuthenticated) settingsRequest()
  }

  render() {
    const { children, type } = this.props

    return (
      <StickyContainer className={styles.Layout}>
        <Header {...this.props} layout={type} />
        <main>
          {children}
          {type === "applied" && <Footer />}
          <ToastContainer />
        </main>
      </StickyContainer>
    )
  }
}

const mapStateToProps = ({ common }) => ({
  ...common,
})

export default connect(mapStateToProps, {
  ...actions,
  settingsRequest,
  fetchTerminalsRequest,
})(Layout)

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
import Header from "../header"
import styles from "./layout.module.scss"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

class Layout extends Component {
  componentWillReceiveProps(nextProps) {
    const { onRedirect } = this.props
    if (nextProps.redirectTo) {
      navigate(nextProps.redirectTo)
      onRedirect()
    }
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

  _handleAppLoading = () => {
    const { onAppLoad, appLoaded } = this.props
    if (!appLoaded) {
      onAppLoad()
    }
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

export default connect(mapStateToProps, actions)(Layout)

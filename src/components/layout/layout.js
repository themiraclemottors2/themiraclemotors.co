/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { StickyContainer } from "react-sticky"
import Footer from "../footer"

import Header from "../header"
import styles from "./layout.module.scss"

const Layout = ({ children, location }) => {
  return (
    <StickyContainer className={styles.Layout}>
      <Header location={location} />
      <div>
        <main> {children} </main>
        {location.pathname === "/" && <Footer />}
      </div>
    </StickyContainer>
  )
}

export default Layout

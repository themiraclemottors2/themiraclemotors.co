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

const Layout = ({ children }) => {
  return (
    <StickyContainer className={styles.Layout}>
      <Header />
      <div>
        <main> {children} </main>
        <Footer />
      </div>
    </StickyContainer>
  )
}

export default Layout

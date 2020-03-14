import React from "react"

import Layout from "../components/layout"
import Home from "../components/home"
import SEO from "../components/seo"

const IndexPage = prop => (
  <Layout {...prop}>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage

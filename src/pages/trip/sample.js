import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

const Sample = props => (
  <Layout {...props}>
    <SEO title="Sample" />
    <div style={{ paddingTop: "100px" }}>
      <h2>Sample</h2>
    </div>
  </Layout>
)

export default Sample

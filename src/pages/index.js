import React from "react"
import { AppliedLayout } from "components/layout"
import Home from "../components/home"
import SEO from "../components/seo"

const IndexPage = props => {
  return (
    <AppliedLayout {...props}>
      <SEO title="Home" />
      <Home />
    </AppliedLayout>
  )
}

export default IndexPage

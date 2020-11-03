import React from "react"
import { AppliedLayout } from "components/layout"
import Home from "../components/home"
import SEO from "../components/seo"
import { UnAuthContextProvider } from "../context"

const IndexPage = props => {
  return (
    <AppliedLayout {...props} topOffset={500} isHome={true}>
      <SEO title="Home" />
      <UnAuthContextProvider>
        <Home />
      </UnAuthContextProvider>
    </AppliedLayout>
  )
}

export default IndexPage

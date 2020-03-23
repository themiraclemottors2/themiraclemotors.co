import React from "react"
import { AppliedLayout } from "components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <AppliedLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </AppliedLayout>
)

export default NotFoundPage

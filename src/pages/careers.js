import React from "react"
import { AppliedLayout } from "components/layout"
import SEO from "components/seo"

const Careers = props => {
  const title = "Careers"
  return (
    <AppliedLayout {...props}>
      <SEO title={title} />
      <div style={{ width: "100%", height: "546px" }}></div>
    </AppliedLayout>
  )
}

export default Careers

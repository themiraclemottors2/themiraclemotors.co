import React from "react"
import { AppliedLayout } from "components/layout"
import SEO from "components/seo"

const About = props => {
  const title = "About"
  return (
    <AppliedLayout {...props}>
      <SEO title={title} />
      <div style={{ width: "100%", height: "546px" }}></div>
    </AppliedLayout>
  )
}

export default About

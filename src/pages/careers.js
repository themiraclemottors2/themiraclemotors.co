import React from "react"
import { AppliedLayout } from "components/layout"
import SEO from "components/seo"
import { PageContainer } from "components/static"

const Careers = props => {
  const title = "Careers"
  return (
    <AppliedLayout {...props}>
      <SEO title={title} />
      <PageContainer title={title} header="Join us in revolutionizing road transport across Africa." text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." >
      <div style={{ width: "100%", height: "546px" }}></div>
      </PageContainer>
    </AppliedLayout>
  )
}

export default Careers

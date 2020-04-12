import React from "react"
import { AppliedLayout } from "components/layout"
import SEO from "components/seo"
import { PageContainer, Content } from "components/static"

const PrivacyPolicy = props => {
  const title = "Privacy Policy"
  return (
    <AppliedLayout {...props}>
      <SEO title={title} />
      <PageContainer
        title={title}
        header="We are driven by respect for our customer’s privacy."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
      >
        <Content />
      </PageContainer>
    </AppliedLayout>
  )
}

export default PrivacyPolicy

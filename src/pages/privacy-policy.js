import React from "react"
import { AppliedLayout } from "components/layout"
import SEO from "components/seo"
import { PageContainer, Content } from "components/static"
import { policy } from "assets/data"

const PrivacyPolicy = props => {
  const title = "Privacy Policy"
  return (
    <AppliedLayout {...props}>
      <SEO title={title} />
      <PageContainer
        title={title}
        header="We are driven by respect for our customer’s privacy."
        text=""
      >
        <Content data={policy} contact />
      </PageContainer>
    </AppliedLayout>
  )
}

export default PrivacyPolicy

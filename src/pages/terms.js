import React from "react"
import { AppliedLayout } from "components/layout"
import SEO from "components/seo"
import { PageContainer, Content } from "components/static"
import { terms } from "assets/data"

const Terms = props => {
  const title = "Terms & Conditions"
  return (
    <AppliedLayout {...props}>
      <SEO title={title} />
      <PageContainer
        title={title}
        header="These terms are designed to protect our mutual interests as we serve you."
        text=""
      >
        <Content data={terms} />
      </PageContainer>
    </AppliedLayout>
  )
}

export default Terms

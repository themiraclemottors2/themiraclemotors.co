import React from "react"
import { AppliedLayout } from "components/layout"
import SEO from "components/seo"
import { PageContainer, Content } from "components/static"

const Careers = props => {
  const title = "Careers"
  return (
    <AppliedLayout {...props}>
      <SEO title={title} />
      <PageContainer
        title={title}
        header="Join us in revolutionizing road transport across Africa."
        text="(Update coming soon..)"
      >
        <Content data={[]} />
      </PageContainer>
    </AppliedLayout>
  )
}

export default Careers

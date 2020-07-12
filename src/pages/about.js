import React from "react"
import { AppliedLayout } from "components/layout"
import SEO from "components/seo"
import { PageContainer, Content } from "components/static"
import { about } from "assets/data"

const About = props => {
  const title = "About"
  return (
    <AppliedLayout {...props}>
      <SEO title={title} />
      <PageContainer
        title={title}
        header="Helping people explore the world conveniently in a New way."
        text=""
      >
        <Content data={about} contact />
      </PageContainer>
    </AppliedLayout>
  )
}

export default About

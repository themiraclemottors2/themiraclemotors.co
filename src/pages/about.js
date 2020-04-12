import React from "react"
import { AppliedLayout } from "components/layout"
import SEO from "components/seo"
import { PageContainer } from "components/static"

const About = props => {
  const title = "About"
  return (
    <AppliedLayout {...props}>
      <SEO title={title} />
      <PageContainer
        title={title}
        header="Helping people explore the world conveniently in a lmao way."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </PageContainer>
    </AppliedLayout>
  )
}

export default About

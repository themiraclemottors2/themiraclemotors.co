import React from "react"
import Layout from "components/layout/layout"
import SEO from "components/seo"
import { ResultWrapper, BookHeader, ProfileContent } from "components/trip"

const Profile = props => {
  return (
    <Layout {...props}>
      <SEO title="Profile" />
      <BookHeader stage={0} breadCrumbs={["Edit Profile"]} />
      <ResultWrapper>
        <ProfileContent />
      </ResultWrapper>
    </Layout>
  )
}

export default Profile

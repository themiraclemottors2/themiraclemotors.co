import React from "react"
import { AuthenticatedLayout } from "components/layout"
import SEO from "components/seo"
import { ResultWrapper, BookHeader, ProfileContent } from "components/trip"

const Profile = props => {
  return (
    <AuthenticatedLayout {...props}>
      <SEO title="Profile" />
      <BookHeader stage={0} breadCrumbs={["Edit Profile"]} />
      <ResultWrapper>
        <ProfileContent />
      </ResultWrapper>
    </AuthenticatedLayout>
  )
}

export default Profile

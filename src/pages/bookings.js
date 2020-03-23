import React from "react"
import { AuthenticatedLayout } from "components/layout"
import SEO from "components/seo"
import { ResultWrapper, BookHeader, BookingsContent } from "components/trip"

const Bookings = props => {
  return (
    <AuthenticatedLayout {...props}>
      <SEO title="Bookings" />
      <BookHeader stage={0} breadCrumbs={["Bookings"]} />
      <ResultWrapper>
        <BookingsContent />
      </ResultWrapper>
    </AuthenticatedLayout>
  )
}

export default Bookings

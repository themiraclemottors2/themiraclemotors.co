import React from "react"
import { UnauthenticatedLayout } from "components/layout"
import SEO from "components/seo"
import { BookingCompleteContent } from "components/trip"

const UnAuthComplete = props => {
  return (
    <UnauthenticatedLayout {...props}>
      <SEO title="Booking Completed" />
      <BookingCompleteContent />
    </UnauthenticatedLayout>
  )
}

export default UnAuthComplete

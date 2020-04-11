import React from "react"
import { AuthenticatedLayout } from "components/layout"
import SEO from "components/seo"
import { BookingCompleteContent } from "components/trip"

const BookingComplete = props => {
  return (
    <AuthenticatedLayout {...props}>
      <SEO title="Booking Completed" />
      <BookingCompleteContent />
    </AuthenticatedLayout>
  )
}

export default BookingComplete

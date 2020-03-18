import React from "react"
import Layout from "components/layout/layout"
import SEO from "components/seo"
import { ResultWrapper, BookHeader, BookingsContent } from "components/trip"

const Bookings = props => {
  return (
    <Layout {...props}>
      <SEO title="Bookings" />
      <BookHeader stage={0} breadCrumbs={["Bookings"]} />
      <ResultWrapper>
        <BookingsContent />
      </ResultWrapper>
    </Layout>
  )
}

export default Bookings

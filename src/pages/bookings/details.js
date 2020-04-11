import React, { useEffect } from "react"
import { AuthenticatedLayout } from "components/layout"
import SEO from "components/seo"
import { ResultWrapper, BookHeader } from "components/trip"
import { navigate } from "gatsby"
import { useSelector, shallowEqual } from "react-redux"

const Details = props => {
  const {
    location: { state },
  } = props
  const stateExtractor = ({ bookings: { data: bookings } }) => ({ bookings })
  const { bookings: bookingsList } = useSelector(stateExtractor, shallowEqual)
  const booking =
    state && state.bookingId
      ? bookingsList.find(item => item.id === state.bookingId)
      : {}
  console.log(booking)

  useEffect(() => {
    if (!state || !state.bookingId) {
      navigate("/bookings")
    }
  }, [state])

  return (
    <AuthenticatedLayout {...props}>
      <SEO title="Booking Details" />
      <BookHeader stage={0} breadCrumbs={["Booking Details"]} />
      <ResultWrapper>
        <p>{(props.location.state && props.location.state.bookingId) || ""}</p>
      </ResultWrapper>
    </AuthenticatedLayout>
  )
}

Details.defaultProps = {
  location: {
    state: {},
  },
}

export default Details

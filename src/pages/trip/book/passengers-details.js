import React, { Component } from "react"
import { AuthenticatedLayout } from "components/layout"
import SEO from "components/seo"
import {
  ResultWrapper,
  BookHeader,
  BookSidebar,
  PassengerDetailsContent,
  CompletingBookingContent,
  BookingFooter,
} from "components/trip"
import { connect } from "react-redux"
import omit from "../../../../node_modules/lodash/omit"
import isEmpty from "../../../../node_modules/lodash/isEmpty"
import { extractTerminalName } from "../../../lib"
import { navigate } from "gatsby"
import { setPassengers } from "../../../store/actions/trips"
import { bookTripRequest } from "../../../store/actions/bookings"
import { toast } from "react-toastify"

class PassengersDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stage: 0,
      paymentMethod: "card",
      breadCrumbs: ["Passengers Details", "Complete Booking"],
      bookings: [],
      numberOfTravellers: 0,
      type: "",
      trip: {},
    }
  }

  componentDidMount() {
    const {
      searchData: { departureTerminalId },
    } = this.props
    this._prepStateFromProps()
    if (!departureTerminalId.length) {
      navigate("../")
      return null
    }
  }

  _prepStateFromProps = () => {
    const {
      outgoingTrip,
      returnTrip,
      searchData: { bookingType, ...searchData },
      terminals,
      serviceCharge,
    } = this.props
    const outgoingBooking = omit(outgoingTrip, [
      "departureTimestamp",
      "price",
    ]) || { seats: [] }
    let numberOfTravellers = outgoingTrip.seats.length
    const bookings = [outgoingBooking]
    const trip = {
      serviceCharge,
      ticketsCount: numberOfTravellers,
      ticketsCost: outgoingTrip.seats.length * Number(outgoingTrip.price),
      outgoing: {
        seatsCount: outgoingTrip.seats.length,
        price: outgoingTrip.seats.length * Number(outgoingTrip.price),
        departureTimestamp: outgoingTrip.departureTimestamp,
        departureTerminal: extractTerminalName(
          terminals,
          searchData.departureTerminalId
        ),
        arrivalTerminal: extractTerminalName(
          terminals,
          searchData.arrivalTerminalId
        ),
      },
    }

    if (bookingType === "round_trip") {
      const returnBooking = omit(returnTrip, ["departureTimestamp", "price"])
      trip.return = {
        seatsCount: returnTrip.seats.length,
        price: returnTrip.seats.length * Number(returnTrip.price),
        departureTimestamp: returnTrip.departureTimestamp,
        arrivalTerminal: extractTerminalName(
          terminals,
          searchData.departureTerminalId
        ),
        departureTerminal: extractTerminalName(
          terminals,
          searchData.arrivalTerminalId
        ),
      }
      trip.ticketsCount = numberOfTravellers * 2
      trip.ticketsCost =
        trip.ticketsCost + returnTrip.seats.length * Number(returnTrip.price)
      bookings.push(returnBooking)
    }

    return this.setState({
      bookings,
      numberOfpersonsTravelling,
      trip,
      type: bookingType,
    })
  }

  _handleStateChange = (state, value) => {
    return this.setState({
      [state]: value,
    })
  }

  changeStage = stage => {
    return this._handleStateChange("stage", stage)
  }

  changePaymentMethod = method => {
    return this._handleStateChange("paymentMethod", method)
  }

  _handlePassengerDetails = async passengers => {
    await this.props.setPassengers(passengers)
  }

  _handleBooking = async paymentResponse => {
    const {
      passengers,
      bookTripRequest: bookTrip,
      bookings: bookingsFromGlobalState,
    } = this.props
    const { bookings, numberOfTravellers, paymentMethod, type } = this.state

    if (bookingsFromGlobalState.loading) {
      return null
    }
    const requestBody = {
      passengers,
      bookings,
      numberOfTravellers,
      type,
      paymentType: paymentMethod === "card" ? "online" : "offline",
    }
    if (paymentResponse && paymentMethod === "card") {
      requestBody.paymentRef = paymentResponse.reference
    }
    try {
      const bookingResp = await bookTrip(requestBody)
      if (bookingResp) return navigate("/trip/book/complete")
    } catch (error) {
      toast.error(
        (error.response && error.response.data.message) ||
          "Sorry, your booking not successful"
      )
    }
  }

  _renderFooter = () => {
    const {
      breadCrumbs,
      stage,
      paymentMethod,
      trip,
      numberOfTravellers,
    } = this.state
    const { passengers, bookings } = this.props
    const paymentConfig = {
      publicKey: process.env.GATSBY_PAYSTACK_PUBLIC_KEY,
      email: passengers[0].email,
      amount: (trip.ticketsCost + trip.serviceCharge) * 100,
      channels: ["card"],
    }

    return (
      <BookingFooter
        paymentMethod={paymentMethod}
        makeBooking={this._handleBooking}
        paymentConfig={paymentConfig}
        payBtn={stage === breadCrumbs.length - 1}
        completeBookingBtn={numberOfTravellers === passengers.length}
        onCompleteBookingClick={() => this.changeStage(1)}
        loading={bookings.loading}
      />
    )
  }

  render() {
    const {
      breadCrumbs,
      stage,
      paymentMethod,
      trip,
      numberOfTravellers,
    } = this.state
    const { user, passengers } = this.props

    return (
      <AuthenticatedLayout {...this.props}>
        <SEO title={breadCrumbs[stage]} />
        <BookHeader stage={stage} breadCrumbs={breadCrumbs} />
        <ResultWrapper
          sidebar={!isEmpty(trip) ? <BookSidebar trip={trip} /> : null}
          footer={this._renderFooter()}
        >
          {stage === 0 && (
            <PassengerDetailsContent
              user={user}
              numberOfTravellers={numberOfTravellers}
              onDone={this._handlePassengerDetails}
            />
          )}
          {stage === 1 && (
            <CompletingBookingContent
              paymentMethod={paymentMethod}
              changePaymentMethod={this.changePaymentMethod}
              passengers={passengers}
            />
          )}
        </ResultWrapper>
      </AuthenticatedLayout>
    )
  }
}

const mapStateToProps = ({
  common: { user },
  trips: { returnTrip, outgoingTrip, searchData, passengers },
  terminals: { data: terminals },
  settings: { serviceCharge },
  bookings,
}) => ({
  user: {
    ...omit(user, [
      "id",
      "refreshToken",
      "roles",
      "createdAt",
      "updatedAt",
      "profile",
    ]),
    ...omit(user.profile, ["id", "createdAt", "updatedAt"]),
  },
  outgoingTrip,
  returnTrip,
  searchData,
  terminals,
  passengers,
  bookings,
  serviceCharge,
})

export default connect(mapStateToProps, { setPassengers, bookTripRequest })(
  PassengersDetails
)

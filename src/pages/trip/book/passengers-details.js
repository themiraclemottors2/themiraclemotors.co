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
    const serviceCharge = 450
    const {
      outgoingTrip,
      returnTrip,
      searchData: { bookingType, ...searchData },
      terminals,
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
      numberOfTravellers,
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
    return this.changeStage(1)
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

    const paymentConfig = {
      publicKey: "pk_test_eb313e7bdda49dc2cb9e93617350bb4f3ee0b8a3",
      email: user.email,
      amount: (trip.ticketsCost + trip.serviceCharge) * 100,
      channels: ["card"],
    }

    return (
      <AuthenticatedLayout {...this.props}>
        <SEO title={breadCrumbs[stage]} />
        <BookHeader stage={stage} breadCrumbs={breadCrumbs} />
        <ResultWrapper
          sidebar={!isEmpty(trip) ? <BookSidebar trip={trip} /> : null}
          footer={
            stage === breadCrumbs.length - 1 && (
              <BookingFooter
                paymentMethod={paymentMethod}
                onClick={() => null}
                paymentConfig={paymentConfig}
                onPaymentSuccess={response => console.log(response)}
              />
            )
          }
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
})

export default connect(mapStateToProps, { setPassengers })(PassengersDetails)

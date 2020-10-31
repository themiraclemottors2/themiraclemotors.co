import React, { Component } from "react"
import SEO from "components/seo"
import Header from "components/header"
import { StickyContainer } from "react-sticky"

import UnAuthResultWrapper from "../../../components/trip/unauth-result"

import { connect } from "react-redux"
import omit from "../../../../node_modules/lodash/omit"
import isEmpty from "../../../../node_modules/lodash/isEmpty"
import { extractTerminalName } from "../../../lib"
import { navigate } from "gatsby"
import { setPassengers } from "../../../store/actions/trips"
import { bookTripRequest } from "../../../store/actions/bookings"
import { toast } from "react-toastify"
import Grid from "@material-ui/core/Grid"

import withStyles from "@material-ui/core/styles/withStyles"

import BookSide from "../../../components/trip/book-side"
import { CompletingBookingContent, BookingFooter } from "components/trip"
import UnAuthPassengerDetails from "../../../components/trip/unauth-passenger-details"

const style = theme => ({
  grid: {
    position: "relative",
    top: "8rem",
    [theme.breakpoints.down("sm")]: {
      margin: "0",
    },
  },
  side: {
    marginLeft: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      marginLeft: "1rem",
      marginRight: ".5rem",
      marginBottom: "1rem",
    },
  },
})
class UnAuthPassenger extends Component {
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
      email: null,
      fullName: null,
      details: {},
      open: false,
    }
  }

  componentDidMount() {
    const {
      searchData: { departureTerminalId },
    } = this.props
    this.setState({ stage: 0 })
    this._prepStateFromProps()
    if (!departureTerminalId.length) {
      navigate("/")
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
          searchData.arrivalTerminalId
        ),
        arrivalTerminal: extractTerminalName(
          terminals,
          searchData.departureTerminalId
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
          searchData.arrivalTerminalId
        ),
        departureTerminal: extractTerminalName(
          terminals,
          searchData.departureTerminalId
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
    const name = `${passengers.firstName} ${passengers.lastName}`
    let mail = passengers.map(item => item.email)
    let info = { ...passengers }
    console.log(mail)
    this.setState({
      email: passengers[0].email,
      fullName: name,

      details: info,
    })
    console.log(this.state.details)
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
  openModal = data => {
    if (data) {
      this.setState({ open: true })
    }
  }

  _renderFooter = () => {
    const {
      breadCrumbs,
      stage,
      paymentMethod,
      trip,
      numberOfTravellers,
      fullName,
    } = this.state
    let { passengers, bookings } = this.props

    const paymentConfig = {
      // publicKey: process.env.GATSBY_PAYSTACK_PUBLIC_KEY,
      publicKey: "pk_test_d8b15464638f89fcdfb8d554f6b9d68e075170ee",
      email: this.state.email,
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
        details={this.state.details}
        open={this.state.open}
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

    const { classes, passengers } = this.props

    return (
      <StickyContainer>
        <SEO title={breadCrumbs[stage]} />
        <Header />
        <Grid container className={classes.grid}>
          <Grid item xs={12} md={5} className={classes.side}>
            {!isEmpty(trip) ? <BookSide trip={trip} /> : null}
          </Grid>
          <Grid item xs={12} md={5} className={classes.side}>
            {stage === 0 && (
              <UnAuthPassengerDetails
                numberOfTravellers={numberOfTravellers}
                onDone={this._handlePassengerDetails}
                open={this.openModal}
              />
            )}
            {stage === 1 && (
              <CompletingBookingContent
                paymentMethod={paymentMethod}
                changePaymentMethod={this.changePaymentMethod}
                passengers={passengers}
              />
            )}
          </Grid>
        </Grid>
        <UnAuthResultWrapper footer={this._renderFooter()} />
      </StickyContainer>
    )
  }
}

const mapStateToProps = ({
  trips: { returnTrip, outgoingTrip, searchData, passengers },
  terminals: { data: terminals },
  settings: { serviceCharge },
  bookings,
}) => ({
  outgoingTrip,
  returnTrip,
  searchData,
  terminals,
  passengers,
  bookings,
  serviceCharge,
})

export default connect(mapStateToProps, { setPassengers, bookTripRequest })(
  withStyles(style)(UnAuthPassenger)
)

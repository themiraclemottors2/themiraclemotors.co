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
import { CreateUser } from "../../../store/actions/common"
import {
  unAuthBookTripRequest,
  fetchUnAuthBookingsRequest,
} from "../../../store/actions/bookings"
import { toast } from "react-toastify"
import Grid from "@material-ui/core/Grid"

import withStyles from "@material-ui/core/styles/withStyles"

import BookSide from "../../../components/trip/book-side"
import {
  UnAuthBookingFooter,
  UnAuthCompleteBookingContent,
} from "components/trip"
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
      error: "",
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
    const name = `${passengers[0].firstName} ${passengers[0].lastName}`
    let mail = passengers.map(item => item.email).join()
    let info = { ...passengers }

    this.setState({
      email: mail,
      fullName: name,
      details: info,
    })

    const Passengers = {
      name,
      email: passengers[0].email,
      address: passengers[0].address,
      phoneNumber: passengers[0].phoneNumber,
      gender: passengers[0].gender,
      ageBracket: "adult",
      booking: this.state.bookings,
    }
    const profile = {
      kinFullName: passengers[0].kinFullName,
      kinPhoneNumber: passengers[0].KinPhoneNumber,
      address: passengers[0].address,
    }
    await this.props.CreateUser(profile)

    await this.props.fetchUnAuthBookingsRequest(Passengers)
  }

  _handleBooking = async paymentResponse => {
    const {
      data,
      unAuthBookTripRequest,
      bookings: bookingsFromGlobalState,
    } = this.props

    const { bookings, numberOfTravellers, paymentMethod, type } = this.state

    if (bookingsFromGlobalState.loading) {
      return null
    }
    const requestBody = {
      passengers: data,
      bookings,
      numberOfTravellers,
      type,
      paymentType: paymentMethod === "card" ? "online" : "offline",
    }

    console.log(requestBody)
    if (paymentResponse && paymentMethod === "card") {
      requestBody.paymentRef = paymentResponse.reference
    }
    try {
      const bookingResp = await unAuthBookTripRequest(requestBody)
      if (bookingResp) return navigate("/trip/book/unAuthcomplete")
    } catch (error) {
      toast.error(
        (error.response && error.response.data.message) ||
          "Sorry, your booking was not successful"
      )
      this.setState({
        error: error.response.data.message,
      })
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
    } = this.state
    let { passengers, bookings } = this.props

    const paymentConfig = {
      publicKey: process.env.GATSBY_PAYSTACK_PUBLIC_KEY,
      // publicKey: "pk_test_d8b15464638f89fcdfb8d554f6b9d68e075170ee",
      email: this.props.data.email,
      amount: (trip.ticketsCost + trip.serviceCharge) * 100,
      channels: ["card"],
    }

    return (
      <UnAuthBookingFooter
        paymentMethod={paymentMethod}
        makeBooking={this._handleBooking}
        paymentConfig={paymentConfig}
        payBtn={stage === breadCrumbs.length - 1}
        completeBookingBtn={numberOfTravellers === passengers.length}
        onCompleteBookingClick={() => this.changeStage(1)}
        loading={bookings.loading}
        details={this.state.details}
        open={this.state.open}
        error={this.state.error}
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

    const { classes, data } = this.props
    console.log(this.state.error)
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
              <UnAuthCompleteBookingContent
                paymentMethod={paymentMethod}
                changePaymentMethod={this.changePaymentMethod}
                passengers={data}
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
  bookings: { data, bookedTrip },
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
  data,
  bookedTrip,
})

export default connect(mapStateToProps, {
  setPassengers,
  unAuthBookTripRequest,
  fetchUnAuthBookingsRequest,
  CreateUser,
})(withStyles(style)(UnAuthPassenger))

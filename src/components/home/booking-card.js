import React, { useState } from "react"
// import PropTypes from "prop-types"
import styles from "./home.module.scss"
import cx from "classnames"
import { Toggle } from "../common"
import SeatBookingForm from "./seat-booking-form"
import HireBusForm from "./hire-bus-form"
import FormContainer from "../common/form-container"

const BookingCard = props => {
  const [activeTab, setActiveTab] = useState("seat")
  const [roundTrip, setRoundTrip] = useState(false)
  return (
    <FormContainer
      className={styles.BookingCard}
      header="Make a booking for your next trip."
    >
      <div className={styles.BookingCard__Tab}>
        <button
          onClick={() => {
            setActiveTab("seat")
            setRoundTrip(false)
          }}
          className={cx(styles.BookingCard__Tab__button, {
            [styles.BookingCard__Tab__button__active]: activeTab === "seat",
          })}
        >
          Book a seat
        </button>
        <button
          onClick={() => {
            setActiveTab("bus")
            setRoundTrip(false)
          }}
          className={cx(styles.BookingCard__Tab__button, {
            [styles.BookingCard__Tab__button__active]: activeTab === "bus",
          })}
        >
          Hire a bus
        </button>
      </div>
      <Toggle
        checked={roundTrip}
        onChange={() => setRoundTrip(!roundTrip)}
        label="Round Trip?"
        className={styles.BookingCard__Toggle}
      />
      {activeTab === "seat" && <SeatBookingForm roundTrip={roundTrip} />}
      {activeTab === "bus" && <HireBusForm roundTrip={roundTrip} />}
    </FormContainer>
  )
}

BookingCard.propTypes = {}

export default BookingCard

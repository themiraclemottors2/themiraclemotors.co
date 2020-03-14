import React from "react"
import PropTypes from "prop-types"
import styles from "./home.module.scss"
import { Input, Select, Button } from "../common"
import { Locator, Calendar } from "../../assets/svg"

const SeatBookingForm = ({ roundTrip }) => {
  return (
    <form action="" onSubmit={e => e.preventDefault()}>
      <Input
        icon={Locator}
        className={styles.BookingCard__Input}
        placeholder="Departure Terminal"
      />
      <Input
        icon={Locator}
        className={styles.BookingCard__Input}
        placeholder="Arrival Terminal"
      />
      <Input
        icon={Calendar}
        className={styles.BookingCard__Input}
        placeholder="Departure Date"
        type="date"
      />
      {roundTrip && (
        <Input
          icon={Calendar}
          className={styles.BookingCard__Input}
          placeholder="Return Date"
          type="date"
        />
      )}
      <div className={styles.BookingCard__Passanger}>
        <Select
          className={styles.BookingCard__Passanger__select}
          options={[{ text: "1 Adult", value: "1" }]}
        />
        <Select
          className={styles.BookingCard__Passanger__select}
          options={[{ text: "0 Children", value: "0" }]}
        />
      </div>
      <Button className={styles.BookingCard__Submit}>Search</Button>
    </form>
  )
}

SeatBookingForm.propTypes = {
  roundTrip: PropTypes.bool.isRequired,
}

export default SeatBookingForm

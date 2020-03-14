import React from "react"
import PropTypes from "prop-types"
import styles from "./home.module.scss"
import { Input, Button } from "../common"
import { Locator, Calendar } from "../../assets/svg"

const HireBusForm = ({ roundTrip }) => {
  return (
    <form action="" onSubmit={e => e.preventDefault()}>
      <Input
        icon={Locator}
        className={styles.BookingCard__Input}
        placeholder="Departure Point"
      />
      <Input
        icon={Locator}
        className={styles.BookingCard__Input}
        placeholder="Destination"
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
      <Button className={styles.BookingCard__Submit}>Continue</Button>
    </form>
  )
}

HireBusForm.propTypes = {
  roundTrip: PropTypes.bool.isRequired,
}

export default HireBusForm

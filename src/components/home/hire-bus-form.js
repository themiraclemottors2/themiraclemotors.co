import React from "react"
import PropTypes from "prop-types"
import styles from "./home.module.scss"
import { Button, Select, DatePicker } from "../common"
import { Locator, Calendar } from "../../assets/svg"
import { capitalize } from "lib"

const HireBusForm = ({ roundTrip, terminals }) => {
  terminals = terminals.map(item => ({
    text: capitalize(item.name),
    value: item.id,
  }))
  return (
    <form action="" onSubmit={e => e.preventDefault()}>
      <Select
        className={styles.BookingCard__Input}
        options={terminals}
        label="Departure Point"
        icon={Locator}
      />
      <Select
        className={styles.BookingCard__Input}
        options={terminals}
        label="Destination"
        icon={Locator}
      />
      <DatePicker
        icon={Calendar}
        className={styles.BookingCard__Input}
        label="Departure Date"
      />
      {roundTrip && (
        <DatePicker
          icon={Calendar}
          className={styles.BookingCard__Input}
          label="Return Date"
        />
      )}
      <Button className={styles.BookingCard__Submit}>Continue</Button>
    </form>
  )
}

HireBusForm.defaultProps = {
  roundTrip: false,
  terminals: [],
}

HireBusForm.propTypes = {
  roundTrip: PropTypes.bool.isRequired,
  terminals: PropTypes.array,
}

export default HireBusForm

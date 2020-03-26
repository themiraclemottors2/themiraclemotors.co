import React, { useState } from "react"
import PropTypes from "prop-types"
import styles from "./home.module.scss"
import { Input, Select, Button } from "../common"
import { Locator, Calendar, User } from "../../assets/svg"
import { capitalize } from "lib"
import { toast } from "react-toastify"

const SeatBookingForm = ({ roundTrip, terminals, onSubmit }) => {
  terminals = terminals.map(item => ({
    text: capitalize(item.name),
    value: item.id,
  }))

  const [departureTerminalId, setDepartureTerminalId] = useState("")
  const [arrivalTerminalId, setArrivalTerminalId] = useState("")
  const [departureTimestamp, setDepartureTimestamp] = useState("")
  const [returnTimestamp, setReturnTimestamp] = useState("")
  const [numberOfTravellers, setNumberOfTravellers] = useState(1)

  const handleSubmit = e => {
    e.preventDefault()
    if (
      departureTerminalId.length <= 0 ||
      arrivalTerminalId.length <= 0 ||
      departureTimestamp.length <= 0
    ) {
      return toast.warn("Field(s) can not be empty")
    }
    return onSubmit({
      departureTerminalId,
      arrivalTerminalId,
      departureTimestamp,
      returnTimestamp,
      numberOfTravellers,
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <Select
        className={styles.BookingCard__Input}
        options={terminals}
        label="Departure Terminal"
        icon={Locator}
        onChange={value => setDepartureTerminalId(value)}
      />
      <Select
        className={styles.BookingCard__Input}
        options={terminals}
        label="Arrival Terminal"
        icon={Locator}
        onChange={value => setArrivalTerminalId(value)}
      />
      <Input
        icon={Calendar}
        className={styles.BookingCard__Input}
        label="Departure Date"
        type="datetime-local"
        onChange={({ target }) =>
          setDepartureTimestamp(new Date(target.value).toISOString())
        }
      />
      {roundTrip && (
        <Input
          icon={Calendar}
          className={styles.BookingCard__Input}
          label="Return Date"
          type="datetime-local"
          onChange={({ target }) =>
            setReturnTimestamp(new Date(target.value).toISOString())
          }
        />
      )}
      <Select
        className={styles.BookingCard__Input}
        options={Array(6)
          .fill(1)
          .map((item, index) => {
            const value = item + index
            return { text: `${value} Passenger${value > 1 ? "s" : ""}`, value }
          })}
        label="Passengers"
        onChange={value => setNumberOfTravellers(value)}
        icon={User}
      />
      <Button onClick={() => null} className={styles.BookingCard__Submit}>
        Search
      </Button>
    </form>
  )
}

SeatBookingForm.defaultProps = {
  roundTrip: false,
  terminals: [],
}

SeatBookingForm.propTypes = {
  roundTrip: PropTypes.bool.isRequired,
  terminals: PropTypes.array,
}

export default SeatBookingForm

import React, { useState } from "react"
import PropTypes from "prop-types"
import styles from "./home.module.scss"
import { Select, Button, DatePicker } from "../common"
import { Locator, Calendar, User } from "../../assets/svg"
import { capitalize } from "lib"
import { toast } from "react-toastify"
import moment from "moment"

const SeatBookingForm = ({ roundTrip, terminals, onSubmit, searchData }) => {
  terminals = terminals.map(item => ({
    text: capitalize(item.name),
    value: item.id,
  }))

  const [departureTerminalId, setDepartureTerminalId] = useState(
    searchData.departureTerminalId
  )
  const [arrivalTerminalId, setArrivalTerminalId] = useState(
    searchData.arrivalTerminalId
  )
  const [departureTimestamp, setDepartureTimestamp] = useState(
    searchData.departureTimestamp
  )
  const [returnTimestamp, setReturnTimestamp] = useState(
    searchData.returnTimestamp
  )
  const [numberOfTravellers, setNumberOfTravellers] = useState(
    searchData.numberOfTravellers
  )

  const passengersInputData = Array(6)
    .fill(1)
    .map((item, index) => {
      const value = item + index
      return { text: `${value} Passenger${value > 1 ? "s" : ""}`, value }
    })

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
        value={searchData.departureTerminalId || departureTerminalId}
      />
      <Select
        className={styles.BookingCard__Input}
        options={terminals}
        label="Arrival Terminal"
        icon={Locator}
        onChange={value => setArrivalTerminalId(value)}
        value={arrivalTerminalId}
      />
      <DatePicker
        icon={Calendar}
        className={styles.BookingCard__Input}
        label="Departure Date"
        onChange={date =>
          setDepartureTimestamp(moment(date).format("YYYY-MM-DDTHH:mm"))
        }
        value={departureTimestamp}
      />
      {roundTrip && (
        <DatePicker
          icon={Calendar}
          className={styles.BookingCard__Input}
          label="Return Date"
          onChange={date =>
            setReturnTimestamp(moment(date).format("YYYY-MM-DDTHH:mm"))
          }
          value={returnTimestamp}
        />
      )}
      <Select
        className={styles.BookingCard__Input}
        options={passengersInputData}
        label="Passengers"
        onChange={value => setNumberOfTravellers(value)}
        icon={User}
        value={numberOfTravellers}
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

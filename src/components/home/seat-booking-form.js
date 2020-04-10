import React, { Component } from "react"
import PropTypes from "prop-types"
import styles from "./home.module.scss"
import { Select, Button, DatePicker } from "../common"
import { Locator, Calendar, User } from "../../assets/svg"
import { capitalize } from "lib"
import { toast } from "react-toastify"
import moment from "moment"
import isEqual from "../../../node_modules/lodash/isEqual"

class SeatBookingForm extends Component {
  state = {
    departureTerminalId: "",
    arrivalTerminalId: "",
    departureTimestamp: "",
    returnTimestamp: "",
    numberOfTravellers: "",
  }

  componentDidMount() {
    this.setState({ ...this.props.searchData })
  }

  componentDidUpdate(prevProps, prevSate) {
    if (!isEqual(prevProps.searchData, this.props.searchData)) {
      this.setState({ ...this.props.searchData })
    }
  }

  _handleSubmit = e => {
    e.preventDefault()
    const {
      departureTerminalId,
      arrivalTerminalId,
      departureTimestamp,
      returnTimestamp,
      numberOfTravellers,
    } = this.state
    const { onSubmit } = this.props
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

  _handleInputChange = data => this.setState({ ...data })

  render() {
    const {
      departureTerminalId,
      arrivalTerminalId,
      departureTimestamp,
      returnTimestamp,
      numberOfTravellers,
    } = this.state
    let { roundTrip, terminals } = this.props
    terminals = terminals.map(item => ({
      text: capitalize(item.name),
      value: item.id,
    }))
    const passengersInputData = Array(6)
      .fill(1)
      .map((item, index) => {
        const value = item + index
        return { text: `${value} Passenger${value > 1 ? "s" : ""}`, value }
      })

    return (
      <form onSubmit={this._handleSubmit}>
        <Select
          className={styles.BookingCard__Input}
          options={terminals}
          label="Departure Terminal"
          icon={Locator}
          onChange={value =>
            this._handleInputChange({ departureTerminalId: value })
          }
          value={departureTerminalId}
        />
        <Select
          className={styles.BookingCard__Input}
          options={terminals}
          label="Arrival Terminal"
          icon={Locator}
          onChange={value =>
            this._handleInputChange({ arrivalTerminalId: value })
          }
          value={arrivalTerminalId}
        />
        <DatePicker
          icon={Calendar}
          className={styles.BookingCard__Input}
          label="Departure Date"
          onChange={date =>
            this._handleInputChange({
              departureTimestamp: moment(date).format("YYYY-MM-DDTHH:mm"),
            })
          }
          value={departureTimestamp}
        />
        {roundTrip && (
          <DatePicker
            icon={Calendar}
            className={styles.BookingCard__Input}
            label="Return Date"
            onChange={date =>
              this._handleInputChange({
                returnTimestamp: moment(date).format("YYYY-MM-DDTHH:mm"),
              })
            }
            value={returnTimestamp}
          />
        )}
        <Select
          className={styles.BookingCard__Input}
          options={passengersInputData}
          label="Passengers"
          onChange={value =>
            this._handleInputChange({ numberOfTravellers: value })
          }
          icon={User}
          value={numberOfTravellers}
        />
        <Button onClick={() => null} className={styles.BookingCard__Submit}>
          Search
        </Button>
      </form>
    )
  }
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

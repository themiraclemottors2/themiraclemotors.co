import React, { Component } from "react"
import PropTypes from "prop-types"
import styles from "./home.module.scss"
import { Select, Button, DatePicker, DateKeyBoard } from "../common"
import { Locator, Calendar, User } from "../../assets/svg"
import { capitalize } from "lib"
import { toast } from "react-toastify"
import moment from "moment"
import isEqual from "../../../node_modules/lodash/isEqual"
import withStyles from "@material-ui/core/styles/withStyles"

const style = theme => ({
  date: {
    width: "99%",
    margin: " 0  0 2rem 0",
    background: "#f1f2f6",
    borderColor: "#425486",
    "& input": {
      padding: "2rem",
      color: "#425486",
      borderColor: "#425486",
    },

    "& label": {
      color: "#425486",
    },
    "& button": {
      color: "rgb(161, 169, 195)",
    },
  },
})

class SeatBookingForm extends Component {
  static defaultProps = {
    roundTrip: false,
    terminals: [],
  }

  static propTypes = {
    roundTrip: PropTypes.bool.isRequired,
    terminals: PropTypes.array,
  }

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
    if (
      this.props.searchData &&
      !isEqual(prevProps.searchData, this.props.searchData)
    ) {
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
  handleDateChange = date => {
    this.setState({
      departureTimestamp: moment(date._d).format("YYYY-MM-DDTHH:mm"),
    })
  }

  _handleInputChange = data => {
    console.log(this.props.terminals, this.props.search)
    this.setState({ ...data })
  }
  render() {
    const {
      departureTerminalId,
      arrivalTerminalId,
      returnTimestamp,
      numberOfTravellers,
    } = this.state
    let { roundTrip, terminals, search } = this.props
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
        <DateKeyBoard data={this.handleDateChange} />

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

export default withStyles(style)(SeatBookingForm)

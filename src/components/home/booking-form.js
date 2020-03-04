import React, { useState } from "react"
// import PropTypes from "prop-types"
import styles from "./home.module.scss"
import cx from "classnames"
import { Input, Select, Button } from "../../components/common"
import { Locator, Calendar } from "../../assets/svg"

const BookingForm = props => {
  const [activeTab, setActiveTab] = useState("seat")
  return (
    <div className={styles.BookingForm}>
      <h2 className={styles.BookingForm__Heading}>
        Make a booking for your next trip.
      </h2>
      <div className={styles.BookingForm__Tab}>
        <button
          onClick={() => setActiveTab("seat")}
          className={cx(styles.BookingForm__Tab__button, {
            [styles.BookingForm__Tab__button__active]: activeTab === "seat",
          })}
        >
          Book a seat
        </button>
        <button
          onClick={() => setActiveTab("bus")}
          className={cx(styles.BookingForm__Tab__button, {
            [styles.BookingForm__Tab__button__active]: activeTab === "bus",
          })}
        >
          Hire a bus
        </button>
      </div>

      <form action="" onSubmit={e => e.preventDefault()}>
        <Input
          icon={Locator}
          className={styles.BookingForm__Input}
          placeholder="Departure Terminal"
        />
        <Input
          icon={Locator}
          className={styles.BookingForm__Input}
          placeholder="Arrival Terminal"
        />
        <Input
          icon={Calendar}
          className={styles.BookingForm__Input}
          placeholder="Departure Date"
          type="date"
        />
        <div className={styles.BookingForm__Passanger}>
          <Select
            className={styles.BookingForm__Passanger__select}
            options={[{ text: "1 Adult", value: "1" }]}
          />
          <Select
            className={styles.BookingForm__Passanger__select}
            options={[{ text: "0 Children", value: "0" }]}
          />
        </div>
        <Button className={styles.BookingForm__Submit}>Search</Button>
      </form>
    </div>
  )
}

BookingForm.propTypes = {}

export default BookingForm

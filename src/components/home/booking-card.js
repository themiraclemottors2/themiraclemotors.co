import React, { useState, useEffect } from "react"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import styles from "./home.module.scss"
import cx from "classnames"
import { navigate } from "gatsby"
import { Toggle } from "../common"
import SeatBookingForm from "./seat-booking-form"
import HireBusForm from "./hire-bus-form"
import FormContainer from "../common/form-container"
import { fetchTerminalsRequest } from "store/actions/terminals"
import BookingCardLoader from "./booking-card-loader"

const BookingCard = props => {
  const dispatch = useDispatch()
  const {
    data: terminalsList,
    loading: terminalsListLoading,
    isAuthenticated,
  } = useSelector(
    ({ terminals, common: { isAuthenticated } }) => ({
      ...terminals,
      isAuthenticated,
    }),
    shallowEqual
  )
  const [activeTab, setActiveTab] = useState("seat")
  const [roundTrip, setRoundTrip] = useState(false)

  useEffect(() => {
    dispatch(fetchTerminalsRequest())
  }, [dispatch])

  const handleSubmit = formDate => {
    if (!isAuthenticated && activeTab === "seat")
      return navigate("/sign-in?redirect=/trip/search-results")
    console.log(formDate)
  }

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
      {activeTab === "seat" && !terminalsListLoading && (
        <SeatBookingForm
          roundTrip={roundTrip}
          terminals={terminalsList}
          onSubmit={handleSubmit}
        />
      )}
      {activeTab === "bus" && !terminalsListLoading && (
        <HireBusForm
          roundTrip={roundTrip}
          terminals={terminalsList}
          onSubmit={handleSubmit}
        />
      )}
      {terminalsListLoading && <BookingCardLoader />}
    </FormContainer>
  )
}

BookingCard.propTypes = {}

export default BookingCard

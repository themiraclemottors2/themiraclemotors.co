import React, { useState, useContext } from "react"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import styles from "./home.module.scss"
import cx from "classnames"
import { navigate } from "gatsby"
import { Toggle } from "../common"
import SeatBookingForm from "./seat-booking-form"
import HireBusForm from "./hire-bus-form"
import FormContainer from "../common/form-container"
import BookingCardLoader from "./booking-card-loader"
import { getSearchData } from "../../store/actions/trips"

const BookingCard = ({ search }) => {
  const stateExtractor = ({
    terminals,
    common: { isAuthenticated },
    trips: { searchData },
  }) => ({
    ...terminals,
    isAuthenticated,
    searchData,
  })
  const dispatch = useDispatch()
  const {
    data: terminalsList,
    loading: terminalsListLoading,
    isAuthenticated,
    searchData,
  } = useSelector(stateExtractor, shallowEqual)
  const [activeTab, setActiveTab] = useState("seat")
  const [bookingType, setBookingType] = useState(
    (searchData.bookingType && searchData.bookingType) || ""
  )
  const handleSubmit = async formData => {
    if (!isAuthenticated && activeTab === "seat") {
      await dispatch(getSearchData({ ...formData, bookingType }))
      return navigate("/sign-in?redirect=/trip/search-results")
    }

    if (activeTab === "seat") {
      await dispatch(getSearchData({ ...formData, bookingType }))
      return navigate("/trip/search-results")
    }
  }

  const handleBookingType = () => {
    if (bookingType === "one_way") return setBookingType("round_trip")
    if (bookingType === "round_trip") return setBookingType("one_way")
  }

  return (
    <FormContainer
      className={styles.BookingCard}
      header="Make a booking for your next trip here."
    >
      <div className={styles.BookingCard__Tab}>
        <button
          onClick={() => {
            setActiveTab("seat")
            handleBookingType()
          }}
          className={cx(styles.BookingCard__Tab__button, {
            [styles.BookingCard__Tab__button__active]: activeTab === "seat",
          })}
        >
          Book a seat
        </button>
        <button
          onClick={() => {
            // setActiveTab("bus")
            // handleBookingType()
            return null
          }}
          className={cx(styles.BookingCard__Tab__button, {
            [styles.BookingCard__Tab__button__active]: activeTab === "bus",
          })}
        >
          Hire a bus
        </button>
      </div>
      <Toggle
        checked={bookingType === "round_trip"}
        onChange={handleBookingType}
        label="Round Trip?"
        className={styles.BookingCard__Toggle}
      />
      {activeTab === "seat" && !terminalsListLoading && (
        <SeatBookingForm
          roundTrip={bookingType === "round_trip"}
          terminals={terminalsList}
          onSubmit={handleSubmit}
          searchData={searchData}
          search={search}
        />
      )}
      {activeTab === "bus" && !terminalsListLoading && (
        <HireBusForm
          roundTrip={bookingType === "round_trip"}
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

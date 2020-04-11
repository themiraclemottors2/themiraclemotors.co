import React, { useEffect } from "react"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { navigate } from "gatsby"
import isEmpty from "../../../node_modules/lodash/isEmpty"
import { Survey } from "assets/svg"
import { Button } from "components/common"
import { resetBookings } from "store/actions/bookings"
import styles from "./trip.module.scss"

const BookingCompleteContent = () => {
  const stateExtractor = ({ bookings: { bookedTrip } }) => ({ bookedTrip })
  const { bookedTrip } = useSelector(stateExtractor, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isEmpty(bookedTrip)) navigate("/")
  }, [bookedTrip])

  const handleReturnHome = e => {
    e.preventDefault()
    dispatch(resetBookings())
    navigate("/")
    return null
  }

  return (
    <div className={styles.BookingCompleteContent}>
      <div className={styles.BookingCompleteContent__wrapper}>
        <Survey />
        <h4>Booking Successful.</h4>
        <p>
          We have received your order and have begun processing it. You will
          receive a confirmation mail containing the details of your booking
          within 24 hours.
        </p>
        <Button onClick={handleReturnHome}>Return Home</Button>
      </div>
    </div>
  )
}

export default BookingCompleteContent

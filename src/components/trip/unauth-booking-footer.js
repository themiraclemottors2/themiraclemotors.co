import React from "react"
import styles from "./trip.module.scss"
import { Button } from "../common"
import { usePaystackPayment } from "react-paystack"
import { toast } from "react-toastify"

const UnAuthBookingFooter = ({
  makeBooking,
  paymentMethod,
  paymentConfig,
  completeBookingBtn,
  payBtn,
  onCompleteBookingClick,
  loading,
  details,
  open,
  error,
}) => {
  const buttonTextRender = () => {
    if (paymentMethod === "card" && payBtn) return "Pay Now"
    if (paymentMethod === "arrival" && payBtn) return "Finish Booking"
    return "Complete Booking"
  }
  const initializePayment = usePaystackPayment(paymentConfig)
  const handleOnClick = e => {
    e.preventDefault()

    if (completeBookingBtn && !payBtn) {
      onCompleteBookingClick()
      return
    }
    if (paymentMethod === "card" && payBtn) {
      initializePayment(makeBooking)
      return null
    }
    if (paymentMethod === "arrival" && payBtn) {
      makeBooking()
      console.log(makeBooking())
      console.log("hello")
      return null
    }
  }

  return (
    completeBookingBtn && (
      <div className={styles.BookingFooter}>
        {(!completeBookingBtn || payBtn) && (
          <p>
            <strong>By clicking "{buttonTextRender()}":</strong>
            <br />- I accept the terms and conditions of The Miracle Motors.
          </p>
        )}
        {open && (
          <Button
            className={styles.BookingFooter__button}
            onClick={handleOnClick}
            id={completeBookingBtn && !payBtn ? "complete-booking-btn" : ""}
            loading={loading}
          >
            {buttonTextRender()}
          </Button>
        )}
        {error && <p>{error}</p>}
      </div>
    )
  )
}
export default UnAuthBookingFooter

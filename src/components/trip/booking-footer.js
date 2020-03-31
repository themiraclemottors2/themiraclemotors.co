import React from "react"
import styles from "./trip.module.scss"
import { Button } from "../common"
import { usePaystackPayment } from "react-paystack"

const BookingFooter = ({
  onClick,
  paymentMethod,
  paymentConfig,
  onPaymentSuccess,
  onPaymentClose,
}) => {
  const buttonText = paymentMethod === "card" ? "Pay Now" : "Finish Booking"
  const initializePayment = usePaystackPayment(paymentConfig)
  const handleOnClick = e => {
    e.preventDefault()
    if (paymentMethod === "card") {
      return initializePayment(onPaymentSuccess, onPaymentClose)
    }

    return onClick()
  }
  return (
    <div className={styles.BookingFooter}>
      <p>
        <strong>By clicking "{buttonText}":</strong>
        <br />- I accept the terms and conditions of The Miracle Motors.
      </p>
      <Button className={styles.BookingFooter__button} onClick={handleOnClick}>
        {buttonText}
      </Button>
    </div>
  )
}

export default BookingFooter

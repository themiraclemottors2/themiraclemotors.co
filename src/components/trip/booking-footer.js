import React from "react"
import styles from "./trip.module.scss"
import { Button } from "../common"

const BookingFooter = ({ onClick, buttonText }) => {
  return (
    <div className={styles.BookingFooter}>
      <p>
        <strong>By clicking "{buttonText}":</strong>
        <br />- I accept the terms and conditions of The Miracle Motors.
      </p>
      <Button className={styles.BookingFooter__button} onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  )
}

export default BookingFooter

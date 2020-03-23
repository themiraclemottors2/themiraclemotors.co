import React from "react"
import styles from "./trip.module.scss"
import { AlarmClock } from "../../assets/svg"
import { Button } from "../common"

const BookItem = () => {
  return (
    <div className={styles.BookItem}>
      <div className={styles.BookItem__Details}>
        <div className={styles.BookItem__Details__bus}>
          <p>TOYOTA SIENNA</p>
          <h3>NGN 3,999</h3>
          <div className={styles.BookItem__Details__time}>
            <AlarmClock />
            <p>8:00AM</p>
          </div>
        </div>

        <div className={styles.BookItem__Details__booking}>
          <h3>NGN 3,999</h3>
          <p>4 seat(s)</p>
          <Button onClick={() => null} className={styles.BookItem__button}>
            View Details
          </Button>
        </div>
      </div>
    </div>
  )
}

export default BookItem

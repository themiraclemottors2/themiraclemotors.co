import React from "react"
import styles from "./trip.module.scss"
import cx from "classnames"

const BookSidebar = () => {
  return (
    <div className={styles.BookSidebar}>
      <div className={styles.BookSidebar__Card}>
        <div className={styles.BookSidebar__TripDetails}>
          <h2>OUTGOING</h2>
          <h3>Thurs, March 12, 2020 - 8:00AM</h3>
          <p>Benin - Lagos</p>
        </div>
        <div className={styles.BookSidebar__TripDetails}>
          <h2>RETURN</h2>
          <h3>Thurs, March 12, 2020 - 8:00AM</h3>
          <p>Lagos - Benin</p>
        </div>
      </div>
      <div className={styles.BookSidebar__Card}>
        <div className={styles.BookSidebar__Cost}>
          <div>
            <p>Tickets(1 Adult)</p>
            <p>NGN 3,999</p>
          </div>
          <div>
            <p>Service Fee</p>
            <p>NGN 450</p>
          </div>
        </div>
        <div className={styles.BookSidebar__Cost}>
          <div>
            <p>
              Total
              <br />
              <span>(tax included)</span>
            </p>
            <p>NGN 3,999</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookSidebar

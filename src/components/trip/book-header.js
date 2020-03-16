import React from "react"
import PropTypes from "prop-types"
import styles from "./trip.module.scss"
import { ChevronRight } from "assets/svg"
import cx from "classnames"

const BookHeader = ({ stage }) => {
  return (
    <div className={styles.BookHeader}>
      <p
        className={cx({
          [`${styles.BookHeader__ActiveStage}`]: true,
        })}
      >
        Passengers Details
      </p>
      <ChevronRight />
      <p
        className={cx({
          [`${styles.BookHeader__ActiveStage}`]: stage === "book",
        })}
      >
        Complete Booking
      </p>
    </div>
  )
}

BookHeader.propTypes = {
  stage: PropTypes.string,
}

export default BookHeader

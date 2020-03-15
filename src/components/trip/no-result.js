import React from "react"
import styles from "./trip.module.scss"
import { Road } from "../../assets/svg"

const NoResult = () => {
  return (
    <div className={styles.NoResult}>
      <Road />
      <div className={styles.NoResult__Textbox}>
        <h4>There are no trips available at this time.</h4>
        <p>
          You can contact support for help with making your booking at an
          available time.
        </p>
      </div>
    </div>
  )
}

export default NoResult

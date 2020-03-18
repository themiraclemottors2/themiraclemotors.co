import React from "react"
import styles from "./trip.module.scss"

const NoResult = ({ svg: Svg, header, text }) => {
  return (
    <div className={styles.NoResult}>
      <Svg />
      <div className={styles.NoResult__Textbox}>
        <h4>{header}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default NoResult

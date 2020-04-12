import React from "react"
import styles from "./static.module.scss"

const AboveFold = ({ header, title, text }) => {
  return (
    <div className={styles.AboveFold}>
      <h5>{title}</h5>
      <h2>{header}</h2>
      <p>{text}</p>
    </div>
  )
}

export default AboveFold

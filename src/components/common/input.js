import React from "react"
import styles from "./common.module.scss"
import cx from "classnames"

const Input = ({ className, icon: I, label, ...rest }) => {
  const rando = Math.floor(Math.random() * 1000)

  return (
    <div className={cx(styles.Input, className)}>
      {I && <I />}
      <div className={styles.Input__wrapper}>
        <input id={`${rando}-input`} {...rest} />
        <label htmlFor={`${rando}-input`}>{label}</label>
      </div>
    </div>
  )
}

Input.defaultProps = { type: "text" }

export default Input

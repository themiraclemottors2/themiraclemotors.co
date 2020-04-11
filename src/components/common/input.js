import React from "react"
import styles from "./common.module.scss"
import cx from "classnames"

const Input = ({ className, icon: I, label, value, ...rest }) => {
  const rando = Math.floor(Math.random() * 1000)
  value = value || ""
  return (
    <div className={cx(styles.Input, className)}>
      {I && <I />}
      <div className={styles.Input__wrapper}>
        <input id={`${rando}-input`} value={value} {...rest} />
        <label htmlFor={`${rando}-input`}>{label}</label>
      </div>
    </div>
  )
}

Input.defaultProps = { type: "text", onChange: () => null }

export default Input

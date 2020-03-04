import React from "react"
import styles from "./common.module.scss"
import cx from "classnames"

const Button = ({ className, onClick, children, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className={cx(styles.Button, className)}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button

import React from "react"
import styles from "./common.module.scss"
import cx from "classnames"

const Input = ({ className, icon: I, ...rest }) => {
  return (
    <div className={cx(styles.Input, className)}>
      {I && <I />}
      <input {...rest} />
    </div>
  )
}

Input.defaultProps = { type: "text" }

export default Input

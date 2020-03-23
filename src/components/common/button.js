import React from "react"
import styles from "./common.module.scss"
import cx from "classnames"
import Loader from "react-loader-spinner"

const Button = ({
  className,
  disabled,
  onClick,
  children,
  loading,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={cx(styles.Button, className, {
        [`${styles.Button__disabled}`]: disabled,
      })}
      disabled={disabled}
      {...rest}
    >
      {!loading && children}
      {loading && <Loader type="Oval" color="#fff" height={27} width={27} />}
    </button>
  )
}

export default Button

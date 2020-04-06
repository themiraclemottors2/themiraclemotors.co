import React from "react"
import styles from "./common.module.scss"
import cx from "classnames"
import Loader from "react-loader-spinner"

const Button = ({
  className,
  onClick,
  children,
  loading,
  disabled,
  id,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={cx(styles.Button, className, {
        [`${styles.Button__disabled}`]: disabled,
        [`${styles.Button__loading}`]: loading,
      })}
      disabled={disabled}
      id={id}
      {...rest}
    >
      {!loading && children}
      {loading && <Loader type="Oval" color="#fff" height={27} width={27} />}
    </button>
  )
}

export default Button

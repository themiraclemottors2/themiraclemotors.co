import React from "react"
import PropTypes from "prop-types"
import styles from "./common.module.scss"
import cx from "classnames"

const Toggle = ({ label, className, ...rest }) => {
  const rando = Math.floor(Math.random() * 1000)
  return (
    <div className={cx(styles.Toggle, className)}>
      <input type="checkbox" id={`toggle-${rando}`} {...rest} />
      <label htmlFor={`toggle-${rando}`}>{label}</label>
    </div>
  )
}

Toggle.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default Toggle

import React from "react"
import PropTypes from "prop-types"
import styles from "./common.module.scss"
import cx from "classnames"

const RadioButton = ({ label, className, ...rest }) => {
  const rando = Math.floor(Math.random() * 1000)
  return (
    <div className={cx(styles.RadioButton, className)}>
      <input type="radio" id={`RadioButton-${rando}`} {...rest} />
      <label htmlFor={`RadioButton-${rando}`}>{label}</label>
    </div>
  )
}

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default RadioButton

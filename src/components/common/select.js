import React, { useState } from "react"
import styles from "./common.module.scss"
import cx from "classnames"
import { ChevronDown } from "../../assets/svg"

const OPTIONS = [{ text: "Select", value: "" }]

const Select = ({ className, options, value, onChange }) => {
  const [selectedValue, setSelectedValue] = useState(value)
  const [showOptions, setShowOptions] = useState(false)
  const selectedOption = [...OPTIONS, ...options].find(
    ({ value: optionValue }) => optionValue === selectedValue
  )
  const _handleOnChenge = value => {
    setSelectedValue(value)
    return onChange(value)
  }
  return (
    <div
      onClick={() => setShowOptions(!showOptions)}
      className={cx(styles.Select, className)}
    >
      <span>{selectedOption.text}</span>
      <ChevronDown />
      {showOptions && (
        <div className={styles.Select__options}>
          {options.map(({ text, value }, index) => (
            <span
              key={index}
              className={styles.Select__option}
              onClick={() => _handleOnChenge(value)}
            >
              {text}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
Select.defaultProps = {
  options: OPTIONS,
  value: OPTIONS[0].value,
  onChange: () => null,
}

export default Select

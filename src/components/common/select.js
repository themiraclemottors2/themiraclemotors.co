import React, { Component } from "react"
import styles from "./common.module.scss"
import cx from "classnames"
import { ChevronDown } from "../../assets/svg"
import ReactDOM from "react-dom"
import { document } from "browser-monads"

class Select extends Component {
  static defaultProps = {
    options: [],
    onChange: () => null,
  }

  constructor(props) {
    super(props)
    this.state = {
      selectedValue: null,
      showOptions: false,
    }
  }

  componentDidMount() {
    if (this.props.value) this.setState({ selectedValue: this.props.value })

    document.addEventListener("mousedown", this._handleClickOutside)
    if (this.props.value && (this.props.value.length || this.props.value)) {
      this.setState({ selectedValue: this.props.value })
    }
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this._handleClickOutside)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value)
      this.setState({ selectedValue: this.props.value })
  }

  _handleClickOutside = event => {
    const domNode = ReactDOM.findDOMNode(this)

    if (!domNode || !domNode.contains(event.target)) {
      this.setState({
        showOptions: false,
      })
    }
  }

  _handleOnChange = value => {
    this.setState({ selectedValue: value })
    return this.props.onChange(value)
  }

  _handleShowOption = () => {
    this.setState(({ showOptions }) => ({ showOptions: !showOptions }))
  }

  render() {
    const { className, options, icon: I, label, value } = this.props
    const { selectedValue, showOptions } = this.state

    const selectedOption = [...options].find(
      ({ value: optionValue }) => optionValue === selectedValue
    )
    return (
      <div
        onClick={() => this._handleShowOption()}
        onKeyPress={() => null}
        aria-expanded="true"
        role="listbox"
        tabIndex="0"
        className={cx(styles.Select, className)}
      >
        <select
          style={{
            visibility: "hidden",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          name={this.props.name}
          value={selectedOption && selectedOption.value}
        >
          {options.map(({ text, value }, index) => {
            return (
              <option
                key={index}
                value={value}
                selected={selectedOption && selectedOption.value === value}
              >
                {text}
              </option>
            )
          })}
        </select>
        <div className={styles.Select__value}>
          {I && <I />}
          <div className={styles.Select__value__wrapper}>
            <span
              className={cx(styles.Select__label, {
                [`${styles.Select__label__filled}`]: !!selectedOption,
              })}
            >
              {label}
            </span>
            <span className={styles.Select__text}>
              {selectedOption && selectedOption.text}
            </span>
          </div>
        </div>
        <ChevronDown />
        {showOptions && (
          <div className={styles.Select__options}>
            {options.map(({ text, value }, index) => (
              <span
                key={index}
                className={cx(styles.Select__option, {
                  [`${styles.Select__option__active}`]:
                    selectedOption && value === selectedOption.value,
                })}
                onClick={() => this._handleOnChange(value)}
                onKeyPress={() => null}
                role="option"
                aria-selected={selectedOption && value === selectedOption.value}
                tabIndex={index}
              >
                {text}
              </span>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default Select

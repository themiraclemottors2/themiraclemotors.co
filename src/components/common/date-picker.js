import React, { Component, createRef } from "react"
import styles from "./common.module.scss"
import cx from "classnames"
import "react-dates/initialize"
import { DayPicker } from "react-dates"
import "react-dates/lib/css/_datepicker.css"
import ReactDOM from "react-dom"
import moment from "moment"

class DatePicker extends Component {
  static defaultProps = { type: "text" }
  constructor(props) {
    super(props)
    this.state = {
      showPicker: false,
      value: moment(),
    }
    this.pickerRef = createRef()
  }

  componentDidMount() {
    if (this.props.value) this.setState({ value: moment(this.props.value) })
    document.addEventListener("mousedown", this._handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this._handleClickOutside)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value)
      this.setState({ value: moment(this.props.value) })
  }

  _handleClickOutside = event => {
    const domNode = ReactDOM.findDOMNode(this)

    if (!domNode || !domNode.contains(event.target)) {
      this.setState({
        showPicker: false,
      })
    }
  }

  _handleShowPicker = () => {
    return this.setState({ showPicker: true })
  }

  _handleDatePick = date => {
    this.setState({ value: date, showPicker: false })
    if (this.props.onChange) return this.props.onChange(date)
  }

  render() {
    const { className, icon: I, label } = this.props
    const { showPicker, value } = this.state
    const rando = Math.floor(Math.random() * 1000)

    return (
      <div
        onClick={this._handleShowPicker}
        className={cx(styles.DatePicker, className)}
      >
        {I && <I />}
        <div className={styles.DatePicker__wrapper}>
          <input
            id={`${rando}-input`}
            value={moment(value).format("DD/MM/YYYY")}
            disabled
          />
          <label htmlFor={`${rando}-input`}>{label}</label>
        </div>
        {showPicker && (
          <div
            onClick={e => {
              e.stopPropagation()
            }}
            className={styles.DatePicker__DayPicker}
          >
            <DayPicker
              date={value}
              onDayClick={this._handleDatePick}
              numberOfMonths={1}
            />
          </div>
        )}
      </div>
    )
  }
}

export default DatePicker

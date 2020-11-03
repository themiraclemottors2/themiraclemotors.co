import React, { Component } from "react"
import cx from "classnames"
import styles from "./common.module.scss"
import { Input, Button, Select } from "./index"
import { toast } from "react-toastify"
import { emptyObjProps } from "lib"
import { UnAuthContext } from "../../context"

class UnProfileForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
    region: "",
  }
  static contextType = UnAuthContext

  _handlePhoneInput = ({ target: { value, name } }) => {
    if (isNaN(Number(value))) {
      return this._handleOnChange({
        [name]: value,
      })
    }
    return this._handleOnChange({ [name]: value })
  }

  _handleOnSumbit = e => {
    e.preventDefault()
    const { onSubmit } = this.props
    if (emptyObjProps(this.state).length) {
      return toast.warn("Field(s) can not be empty")
    }
    const data = JSON.parse(sessionStorage.getItem("data"))
    const info = {
      ...this.state,
      ...data,
    }

    return onSubmit(info)
  }

  _handleOnChange = data => {
    this.setState({ ...data })
  }

  _formatPhone = phone => {
    if (phone) {
      if (typeof phone === "number") phone = String(phone)
      return phone.length <= 11
        ? phone
        : `0${phone.substring(phone.includes("+") ? 4 : 3)}`
    }
    return null
  }
  render() {
    const {
      className,
      buttonText,

      forwardedRef,
    } = this.props

    const { firstName, lastName, gender, region, phoneNumber } = this.state

    return (
      <>
        <form
          ref={forwardedRef}
          className={cx(styles.ProfileForm, className)}
          onSubmit={this._handleOnSumbit}
        >
          <div className={styles.ProfileForm__Input__group}>
            <Input
              className={styles.ProfileForm__Input__half}
              label="First Name"
              placeholder="Enter your first name"
              value={firstName}
              onChange={({ target: { value: firstName } }) =>
                this._handleOnChange({ firstName })
              }
              required
              name="firstName"
            />
            <Input
              className={styles.ProfileForm__Input__half}
              label="Last Name"
              placeholder="Enter your last name"
              value={lastName}
              onChange={({ target: { value: lastName } }) =>
                this._handleOnChange({ lastName })
              }
              required
              name="lastName"
            />
          </div>
          <div className={styles.ProfileForm__Input__group}>
            <Input
              type="phone"
              className={styles.ProfileForm__Input__half}
              label="Phone Number"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={this._handlePhoneInput}
              required
              name="phoneNumber"
            />
            <Input
              className={styles.ProfileForm__Input__half}
              label="City/Region"
              placeholder="Enter your city/region"
              value={region}
              onChange={({ target: { value: region } }) =>
                this._handleOnChange({ region })
              }
              required
              name="region"
            />
          </div>
          <div className={styles.ProfileForm__Input__group}>
            <Select
              className={styles.ProfileForm__Input__half}
              options={[
                { text: "Female", value: "female" },
                { text: "Male", value: "male" },
              ]}
              label="Gender"
              value={gender}
              onChange={gender => this._handleOnChange({ gender })}
              name="gender"
            />
          </div>
          {buttonText && (
            <Button className={styles.ProfileForm__Submit}>{buttonText}</Button>
          )}
        </form>
      </>
    )
  }
}

export default React.forwardRef((props, ref) => (
  <UnProfileForm {...props} forwardedRef={ref} />
))

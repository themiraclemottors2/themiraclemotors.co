import React, { Component } from "react"
import cx from "classnames"
import styles from "./common.module.scss"
import { Input, Button, Select } from "./index"
import { toast } from "react-toastify"
import { emptyObjProps } from "lib"

class ProfileForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    address: "",
    kinFullName: "",
    kinPhoneNumber: "",
    region: "",
  }

  _handlePhoneInput = ({ target: { value, name } }) => {
    const { phoneNumber, kinPhoneNumber } = this.state
    if (isNaN(Number(value))) {
      return this._handleOnChange({
        [name]: name === "phoneNumber" ? phoneNumber : kinPhoneNumber,
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

    return onSubmit(this.state)
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
    const { className, buttonText, forwardedRef } = this.props

    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      gender,
      address,
      kinFullName,
      kinPhoneNumber,
      region,
    } = this.state

    return (
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
            type="email"
            className={styles.ProfileForm__Input__half}
            label="Email Address"
            placeholder="Enter your email address"
            value={email}
            onChange={({ target: { value: email } }) =>
              this._handleOnChange({ email })
            }
            required
            name="email"
          />
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
        <Input
          type="address"
          className={styles.ProfileForm__Input}
          label="Address"
          placeholder="Enter your address"
          value={address}
          onChange={({ target: { value: address } }) =>
            this._handleOnChange({ address })
          }
          required
          name="address"
        />
        <p className={styles.ProfileForm__header}>
          Emergency Contact(Next of Kin)
        </p>
        <div className={styles.ProfileForm__Input__group}>
          <Input
            className={styles.ProfileForm__Input__half}
            label="Full Name"
            placeholder="Enter your next of kin full name"
            value={kinFullName}
            onChange={({ target: { value: kinFullName } }) =>
              this._handleOnChange({ kinFullName })
            }
            required
            name="kinFullName"
          />
          <Input
            type="phone"
            className={styles.ProfileForm__Input__half}
            label="Phone Number"
            placeholder="Enter your next of kin phone number"
            value={kinPhoneNumber}
            onChange={this._handlePhoneInput}
            required
            name="kinPhoneNumber"
          />
        </div>
        {buttonText && (
          <Button className={styles.ProfileForm__Submit}>{buttonText}</Button>
        )}
      </form>
    )
  }
}

export default React.forwardRef((props, ref) => (
  <ProfileForm {...props} forwardedRef={ref} />
))

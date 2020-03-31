import React, { useState } from "react"
import cx from "classnames"
import styles from "./common.module.scss"
import { Input, Button, Select } from "./index"
import { toast } from "react-toastify"

const ProfileForm = ({ className, onSubmit, buttonText, value }) => {
  const [firstName, setFirstName] = useState(value.firstName || "")
  const [lastName, setLastName] = useState(value.lastName || "")
  const [address, setAddress] = useState(value.address || "")
  const [kinFullName, setKinFullName] = useState(value.kinFullName || "")
  const [kinPhoneNumber, setKinPhoneNumber] = useState(
    (value.kinPhoneNumber && `0${value.kinPhoneNumber.substring(4)}`) || ""
  )
  const [region, setRegion] = useState(value.region || "")
  const [email, setEmail] = useState(value.email || "")
  const [phoneNumber, setPhoneNumber] = useState(
    (value.phoneNumber && `0${value.phoneNumber.substring(4)}`) || ""
  )
  const [gender, setGender] = useState(value.gender || "")

  const _handlePhoneInput = ({ target }) => {
    if (isNaN(Number(target.value))) {
      if (target.name === "phoneNumber") return setPhoneNumber(phoneNumber)
      if (target.name === "kinPhoneNumber")
        return setKinPhoneNumber(kinPhoneNumber)
    }
    if (target.name === "phoneNumber") return setPhoneNumber(target.value)
    if (target.name === "kinPhoneNumber") return setKinPhoneNumber(target.value)
  }

  const handleOnSumbit = e => {
    e.preventDefault()
    if (
      firstName.length <= 0 ||
      lastName.length <= 0 ||
      kinFullName.length <= 0 ||
      kinPhoneNumber.length <= 0 ||
      region.length <= 0 ||
      gender.length <= 0 ||
      email.length <= 0 ||
      phoneNumber.length <= 0 ||
      address.length <= 0
    ) {
      return toast.warn("Field(s) can not be empty")
    }
    return onSubmit({
      firstName,
      lastName,
      address,
      kinFullName,
      kinPhoneNumber,
      region,
      email,
      phoneNumber,
      gender,
    })
  }

  return (
    <form
      onSubmit={handleOnSumbit}
      className={cx(styles.ProfileForm, className)}
    >
      <div className={styles.ProfileForm__Input__group}>
        <Input
          className={styles.ProfileForm__Input__half}
          label="First Name"
          placeholder="Enter your first name"
          value={firstName}
          onChange={({ target }) => setFirstName(target.value)}
          required
          name="firstName"
        />
        <Input
          className={styles.ProfileForm__Input__half}
          label="Last Name"
          placeholder="Enter your last name"
          value={lastName}
          onChange={({ target }) => setLastName(target.value)}
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
          onChange={({ target }) => setEmail(target.value)}
          required
          name="email"
        />
        <Input
          type="phone"
          className={styles.ProfileForm__Input__half}
          label="Phone Number"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={_handlePhoneInput}
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
          onChange={value => setGender(value)}
        />
        <Input
          className={styles.ProfileForm__Input__half}
          label="City/Region"
          placeholder="Enter your city/region"
          value={region}
          onChange={({ target }) => setRegion(target.value)}
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
        onChange={({ target }) => setAddress(target.value)}
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
          onChange={({ target }) => setKinFullName(target.value)}
          required
          name="kinFullName"
        />
        <Input
          type="phone"
          className={styles.ProfileForm__Input__half}
          label="Phone Number"
          placeholder="Enter your next of kin phone number"
          value={kinPhoneNumber}
          onChange={_handlePhoneInput}
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

ProfileForm.defaultProps = {
  value: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    address: "",
    kinFullName: "",
    kinPhoneNumber: "",
    region: "",
  },
}

export default ProfileForm

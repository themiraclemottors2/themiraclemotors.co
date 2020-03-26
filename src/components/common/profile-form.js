import React from "react"
// import PropTypes from "prop-types"
import styles from "./common.module.scss"
import { Input, Button, Select } from "./index"

const ProfileForm = ({ className, onSubmit, buttonText }) => {
  return (
    <form onSubmit={onSubmit} className={styles.ProfileForm}>
      <div className={styles.ProfileForm__Input__group}>
        <Input
          className={styles.ProfileForm__Input__half}
          label="First Name"
          placeholder="Enter your first name"
        />
        <Input
          className={styles.ProfileForm__Input__half}
          label="Last Name"
          placeholder="Enter your last name"
        />
      </div>
      <div className={styles.ProfileForm__Input__group}>
        <Input
          type="email"
          className={styles.ProfileForm__Input__half}
          label="Email Address"
          placeholder="Enter your email address"
        />
        <Input
          type="phone"
          className={styles.ProfileForm__Input__half}
          label="Phone Number"
          placeholder="Enter your phone number"
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
        />
        <Input
          className={styles.ProfileForm__Input__half}
          label="City/Region"
          placeholder="Enter your city/region"
        />
      </div>
      <Input
        type="address"
        className={styles.ProfileForm__Input}
        label="Address"
        placeholder="Enter your address"
      />
      <p className={styles.ProfileForm__header}>
        Emergency Contact(Next of Kin)
      </p>
      <div className={styles.ProfileForm__Input__group}>
        <Input
          className={styles.ProfileForm__Input__half}
          label="Full Name"
          placeholder="Enter your next of kin full name"
        />
        <Input
          type="phone"
          className={styles.ProfileForm__Input__half}
          label="Phone Number"
          placeholder="Enter your next of kin phone number"
        />
      </div>
      {buttonText && (
        <Button className={styles.ProfileForm__Submit}>{buttonText}</Button>
      )}
    </form>
  )
}

ProfileForm.propTypes = {}

export default ProfileForm

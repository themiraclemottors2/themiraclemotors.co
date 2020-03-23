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
          placeholder="First Name"
        />
        <Input
          className={styles.ProfileForm__Input__half}
          placeholder="Last Name"
        />
      </div>
      <div className={styles.ProfileForm__Input__group}>
        <Input
          type="email"
          className={styles.ProfileForm__Input__half}
          placeholder="Email Address"
        />
        <Input
          type="phone"
          className={styles.ProfileForm__Input__half}
          placeholder="Phone Number"
        />
      </div>
      <div className={styles.ProfileForm__Input__group}>
        <Select
          className={styles.ProfileForm__Input__half}
          options={[
            { text: "Gender", value: "" },
            { text: "Female", value: "female" },
            { text: "Male", value: "male" },
          ]}
        />
        <Input
          className={styles.ProfileForm__Input__half}
          placeholder="City/Region"
        />
      </div>
      <Input
        type="address"
        className={styles.ProfileForm__Input}
        placeholder="Address"
      />
      <p className={styles.ProfileForm__header}>
        Emergency Contact(Next of Kin)
      </p>
      <div className={styles.ProfileForm__Input__group}>
        <Input
          className={styles.ProfileForm__Input__half}
          placeholder="Full Name"
        />
        <Input
          type="phone"
          className={styles.ProfileForm__Input__half}
          placeholder="Phone Number"
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

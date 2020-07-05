import React, { createRef, useState } from "react"
// import PropTypes from "prop-types"
import styles from "./trip.module.scss"
import { ProfileForm, Button, WrapperCard } from "../common"
import { Info } from "../../assets/svg"
import cx from "classnames"

const profileFormRef = createRef()

const ProfileContent = ({ onSave, onCancel, user, loading }) => {
  const [cancelable, setCancelable] = useState(false)
  const handleOnSave = e => {
    e.preventDefault()
    const {
      region: { value: region },
      gender: { value: gender },
      address: { value: address },
      kinPhoneNumber: { value: kinPhoneNumber },
      kinFullName: { value: kinFullName },
      firstName: { value: firstName },
      lastName: { value: lastName },
      email: { value: email },
      phoneNumber: { value: phoneNumber },
    } = profileFormRef.current
    return onSave({
      gender,
      address: `${address}${region ? ` ,${region}` : ""}`,
      kinFullName,
      kinPhoneNumber,
      firstName,
      lastName,
      email,
      phoneNumber,
    })
  }

  return (
    <div className={styles.ProfileContent}>
      <WrapperCard
        title="Edit your Profile"
        className={styles.ProfileContent__accordion}
      >
        <div className={styles.ProfileContent__info}>
          <Info />
          <p>These details will be used as your default passenger details</p>
        </div>
        <ProfileForm
          disableEssentials
          ref={profileFormRef}
          setCancelable={setCancelable}
        />
      </WrapperCard>
      <div className={styles.ProfileContent__button_group}>
        <Button
          onClick={onCancel}
          className={cx(
            styles.ProfileContent__Submit,
            styles.ProfileContent__Submit__cancel
          )}
          disabled={!cancelable}
        >
          Cancel
        </Button>
        <Button
          onClick={handleOnSave}
          className={cx(
            styles.ProfileContent__Submit,
            styles.ProfileContent__Submit__save
          )}
          loading={loading}
        >
          Save
        </Button>
      </div>
    </div>
  )
}

ProfileContent.propTypes = {}

export default ProfileContent

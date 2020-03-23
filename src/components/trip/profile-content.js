import React from "react"
// import PropTypes from "prop-types"
import styles from "./trip.module.scss"
import { ProfileForm, Button, WrapperCard } from "../common"
import { Info } from "../../assets/svg"
import cx from "classnames"

const ProfileContent = ({ onDone }) => {
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
        <ProfileForm />
      </WrapperCard>
      <div className={styles.ProfileContent__button_group}>
        <Button
          onClick={onDone}
          className={cx(
            styles.ProfileContent__Submit,
            styles.ProfileContent__Submit__cancel
          )}
        >
          Cancel
        </Button>
        <Button
          onClick={onDone}
          className={cx(
            styles.ProfileContent__Submit,
            styles.ProfileContent__Submit__save
          )}
        >
          Save
        </Button>
      </div>
    </div>
  )
}

ProfileContent.propTypes = {}

export default ProfileContent

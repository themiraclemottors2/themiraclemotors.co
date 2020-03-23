import React from "react"
// import PropTypes from "prop-types"
import styles from "./trip.module.scss"
import { Accordion, ProfileForm, Button } from "../common"
import { Info } from "../../assets/svg"

const PassengerDetailsContent = ({ onDone }) => {
  return (
    <div className={styles.PassengerDetailsContent}>
      <Accordion
        title="Main Passenger"
        opened
        className={styles.PassengerDetailsContent__accordion}
      >
        <div className={styles.PassengerDetailsContent__info}>
          <Info />
          <p>
            Your details have been automatically imported from your profile.
          </p>
        </div>
        <ProfileForm buttonText="Next" />
      </Accordion>

      <Accordion
        title="Other Passenger 1"
        className={styles.PassengerDetailsContent__accordion}
      >
        <ProfileForm />
      </Accordion>
      <Button
        onClick={onDone}
        className={styles.PassengerDetailsContent__Submit}
      >
        Complete Booking
      </Button>
    </div>
  )
}

PassengerDetailsContent.propTypes = {}

export default PassengerDetailsContent

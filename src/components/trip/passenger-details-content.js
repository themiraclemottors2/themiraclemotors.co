import React, { useState } from "react"
// import PropTypes from "prop-types"
import styles from "./trip.module.scss"
import { Accordion, ProfileForm, Button } from "../common"
import { Info } from "../../assets/svg"

const PassengerDetailsContent = ({ onDone, user, numberOfTravellers }) => {
  const [passengerCount, setPassengerCount] = useState(0)
  const [passengersData, setPassengersData] = useState([])

  const handleOnSubmit = data => {
    setPassengersData([...passengersData, data])
    setPassengerCount(passengerCount + 1)
  }

  const handleOnDone = e => {
    e.preventDefault()
    onDone(passengersData)
  }

  return (
    <div className={styles.PassengerDetailsContent}>
      {Array(numberOfTravellers)
        .fill(1)
        .map((item, index) => {
          return (
            <Accordion
              key={item + index}
              title={
                index === 0 ? "Main Passenger" : `Other Passenger ${index}`
              }
              opened={index <= passengerCount}
              className={styles.PassengerDetailsContent__accordion}
            >
              {index === 0 && (
                <div className={styles.PassengerDetailsContent__info}>
                  <Info />
                  <p>
                    Your details have been automatically imported from your
                    profile.
                  </p>
                </div>
              )}
              <ProfileForm
                value={index === 0 ? user : passengersData[index]}
                buttonText="Next"
                onSubmit={passengersData[index] ? () => null : handleOnSubmit}
              />
            </Accordion>
          )
        })}
      {numberOfTravellers === passengersData.length && (
        <Button
          onClick={handleOnDone}
          className={styles.PassengerDetailsContent__Submit}
        >
          Complete Booking
        </Button>
      )}
    </div>
  )
}

PassengerDetailsContent.propTypes = {}

export default PassengerDetailsContent

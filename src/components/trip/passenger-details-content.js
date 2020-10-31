import React, { useState } from "react"
// import PropTypes from "prop-types"
import styles from "./trip.module.scss"
import { Accordion, ProfileForm } from "../common"
import { Info } from "../../assets/svg"
import { navigate } from "gatsby"
import { window } from "browser-monads"
import omit from "../../../node_modules/lodash/omit"

const PassengerDetailsContent = ({ onDone, numberOfTravellers, open }) => {
  const [passengerCount, setPassengerCount] = useState(0)
  const [passengersData, setPassengersData] = useState([])

  const handleOnSubmit = data => {
    data = {
      ...omit(data, ["firstName", "lastName"]),
      name: `${data.firstName} ${data.lastName}`,
      ageBracket: "adult",
    }
    if (numberOfTravellers === 1) {
      onDone([data])
      open([data])
      return navigate(`${window.location.pathname}/#complete-booking-btn`)
    }
    if (numberOfTravellers === passengersData.length + 1) {
      onDone([...passengersData, data])
      open([data])
      return navigate(`${window.location.pathname}/#complete-booking-btn`)
    }
    setPassengersData([...passengersData, data])
    setPassengerCount(passengerCount + 1)
    return navigate(
      `${window.location.pathname}/#passenger-${passengerCount + 1}`
    )
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
              id={`passenger-${index}`}
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
                value={passengersData[index]}
                buttonText="Next"
                onSubmit={data => {
                  if (passengersData[index]) {
                    return null
                  }
                  return handleOnSubmit(data)
                }}
              />
            </Accordion>
          )
        })}
    </div>
  )
}

PassengerDetailsContent.propTypes = {}

export default PassengerDetailsContent

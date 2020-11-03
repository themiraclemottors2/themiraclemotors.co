import React, { useState } from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import { navigate } from "gatsby"
import { window } from "browser-monads"
import styles from "./trip.module.scss"
import { Accordion } from "../common"
import UnProfileForm from "../common/unauth-profile"
import Form from "./form"
const style = theme => ({
  head: {
    marginTop: "1rem",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      marginLeft: ".5rem",
    },
  },
})

const UnAuthPassengerDetails = ({
  classes,
  onDone,
  numberOfTravellers,
  open,
}) => {
  const [passengerCount, setPassengerCount] = useState(0)
  const [passengersData, setPassengersData] = useState([])
  const handleOnSubmit = data => {
    if (numberOfTravellers === 1) {
      onDone([data])
      open([data])
      return navigate(`${window.location.pathname}/#complete-booking-btn`)
    }
    if (numberOfTravellers === passengersData.length + 1) {
      onDone([...passengersData, data])
      open([open])
      return navigate(`${window.location.pathname}/#complete-booking-btn`)
    }
    setPassengersData([...passengersData, data])
    setPassengerCount(passengerCount + 1)
    return navigate(
      `${window.location.pathname}/#passenger-${passengerCount + 1}`
    )
  }

  return (
    <>
      <div className={(styles.PassengerDetailsContent, classes.head)}>
        <Form />
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
                <UnProfileForm
                  value={passengersData[index]}
                  buttonText="Next"
                  numberOfTravellers={numberOfTravellers}
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
    </>
  )
}

export default withStyles(style)(UnAuthPassengerDetails)

import React from "react"
// import PropTypes from "prop-types"
import styles from "./trip.module.scss"
import { WrapperCard } from "../common"
import { capitalize, formatCurrency } from "lib"
import moment from "moment"

const BookingDetailsContent = ({
  booking: { referenceId, passengers, numberOfTravellers, trip, payment },
}) => {
  const details = [
    {
      text: "Departure terminal",
      value: capitalize(trip.departureTerminal.name),
    },
    { text: "Arrival terminal", value: capitalize(trip.arrivalTerminal.name) },
    {
      text: "Date",
      value: moment(trip.departureTimestamp).format("DD-MM-YYYY"),
    },
    { text: "Number of seats", value: numberOfTravellers },
    { text: "Booking ID", value: referenceId },
    { text: "Payment Ref", value: payment.referenceId },
    { text: "Payment Status", value: payment.status },
    { text: "Total Amount", value: `NGN ${formatCurrency(payment.amount)}` },
  ]
  return (
    <div className={styles.BookingDetailsContent}>
      <WrapperCard
        title="Booking Details"
        className={styles.BookingDetailsContent__wrapperCard}
      >
        <div className={styles.BookingDetailsContent__details}>
          {details.map((item, index) => (
            <div
              key={index}
              className={styles.BookingDetailsContent__details__info}
            >
              <p className={styles.BookingDetailsContent__details__info__text}>
                {item.text}:
              </p>
              <p
                style={
                  index === 7
                    ? { fontWeight: "bold" }
                    : index === 6
                    ? {
                        textTransform: "uppercase",
                      }
                    : {}
                }
                className={styles.BookingDetailsContent__details__info__value}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </WrapperCard>
      <WrapperCard
        title="Passenger(s) Information"
        className={styles.BookingDetailsContent__wrapperCard}
      >
        {passengers.map((passenger, index) => (
          <div className={styles.BookingDetailsContent__profile}>
            <div
              key={index}
              className={styles.BookingDetailsContent__profile__info}
            >
              <p className={styles.BookingDetailsContent__profile__info__text}>
                Full Name:
              </p>
              <p className={styles.BookingDetailsContent__profile__info__value}>
                {passenger.name}
              </p>
            </div>
            <div
              key={index}
              className={styles.BookingDetailsContent__profile__info}
            >
              <p className={styles.BookingDetailsContent__profile__info__text}>
                Gender:
              </p>
              <p
                style={{ textTransform: "capitalize" }}
                className={styles.BookingDetailsContent__profile__info__value}
              >
                {passenger.gender}
              </p>
            </div>
          </div>
        ))}
      </WrapperCard>
    </div>
  )
}

BookingDetailsContent.defaultProps = {
  passengers: [],
}

export default BookingDetailsContent

import React from "react"
// import PropTypes from "prop-types"
import styles from "./trip.module.scss"
import { WrapperCard, RadioButton } from "../common"
import card_vendors from "../../assets/images/cards-vendo.png"
import { connect } from "react-redux"

const UnAuthCompleteBookingContent = ({
  paymentMethod,
  changePaymentMethod,
  passengers,
}) => {
  const newPassenger = [passengers]

  return (
    <div className={styles.CompletingBookingContent}>
      {newPassenger &&
        newPassenger.map((item, index) => (
          <WrapperCard
            key={index}
            title={index === 0 ? "Main Passenger" : `Other Passenger ${index}`}
            className={styles.CompletingBookingContent__wrapperCard}
          >
            <div className={styles.CompletingBookingContent__profile}>
              <div className={styles.CompletingBookingContent__profile__info}>
                <p
                  className={
                    styles.CompletingBookingContent__profile__info__text
                  }
                >
                  Full Name:
                </p>
                <p
                  className={
                    styles.CompletingBookingContent__profile__info__value
                  }
                >
                  {item.name}
                </p>
              </div>
              <div className={styles.CompletingBookingContent__profile__info}>
                <p
                  className={
                    styles.CompletingBookingContent__profile__info__text
                  }
                >
                  Phone Number:
                </p>
                <p
                  className={
                    styles.CompletingBookingContent__profile__info__value
                  }
                >
                  {item.phoneNumber}
                </p>
              </div>
              <div className={styles.CompletingBookingContent__profile__info}>
                <p
                  className={
                    styles.CompletingBookingContent__profile__info__text
                  }
                >
                  Email Address:
                </p>
                <p
                  className={
                    styles.CompletingBookingContent__profile__info__value
                  }
                >
                  {item.email}
                </p>
              </div>
              <div className={styles.CompletingBookingContent__profile__info}>
                <p
                  className={
                    styles.CompletingBookingContent__profile__info__text
                  }
                >
                  Address:
                </p>
                <p
                  className={
                    styles.CompletingBookingContent__profile__info__value
                  }
                >
                  {item.address}
                </p>
              </div>
            </div>
          </WrapperCard>
        ))}

      <WrapperCard
        title="Payment Method"
        className={styles.CompletingBookingContent__wrapperCard}
      >
        <form className={styles.CompletingBookingContent__payment}>
          <div className={styles.CompletingBookingContent__payment__selection}>
            <RadioButton
              name="payment"
              onChange={() => changePaymentMethod("card")}
              label="Debit / Credit Card"
              checked={paymentMethod === "card"}
              className={styles.CompletingBookingContent__payment__radio}
            />
            <img src={card_vendors} alt="Card Vendors" />
          </div>

          <RadioButton
            name="payment"
            label="Pay on Arrival"
            onChange={() => changePaymentMethod("arrival")}
            checked={paymentMethod === "arrival"}
            className={styles.CompletingBookingContent__payment__radio}
          />
        </form>
      </WrapperCard>
    </div>
  )
}
export default UnAuthCompleteBookingContent

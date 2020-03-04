import React from "react"
// import PropTypes from "prop-types"
import styles from "./home.module.scss"
import BookingForm from "./booking-form"
import AppStoreAction from "./app-store-action"
import Features from "./features"
import PorpularTrips from "./porpular-trips"
import Newsletter from "./newsletter"

const Home = props => {
  return (
    <div className={styles.Home}>
      <div className={styles.Home__Fold}>
        <AppStoreAction />
        <BookingForm />
      </div>
      <Features />
      <PorpularTrips />
      <Newsletter />
    </div>
  )
}

Home.propTypes = {}

export default Home

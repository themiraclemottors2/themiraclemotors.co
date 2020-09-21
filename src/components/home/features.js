import React from "react"
import styles from "./home.module.scss"
import { Phone, Security, Money } from "assets/svg"

const Features = () => {
  return (
    <div className={styles.Features}>
      <p className={styles.Features__SubHeading}>TRAVELLING WITH US</p>
      <h1 className={styles.Features__Heading}>
        Your safety is our primary focus.
      </h1>
      <div className={styles.Features__List}>
        <div className={styles.Features__Item}>
          <div className={styles.Features__Item__Icon}>
            <Phone />
          </div>
          <h4 className={styles.Features__Item__Heading}>Travel with ease.</h4>
          <p className={styles.Features__Item__Text}>
            We make it sure from your booking to arrival is a seamless
            experience
          </p>
        </div>
        <div className={styles.Features__Item}>
          <div className={styles.Features__Item__Icon}>
            <Money />
          </div>
          <h4 className={styles.Features__Item__Heading}>
            Get the best prices.
          </h4>
          <p className={styles.Features__Item__Text}>
            Our competitive prices for a quality travel experience makes us
            stand out
          </p>
        </div>
        <div className={styles.Features__Item}>
          <div className={styles.Features__Item__Icon}>
            <Security />
          </div>
          <h4 className={styles.Features__Item__Heading}>
            Put your safety first.
          </h4>
          <p className={styles.Features__Item__Text}>
            When it comes to safety, no better company places it customers and
            staffs well-being as a priority over profit
          </p>
        </div>
      </div>
       
    </div>
    
  )
}

export default Features

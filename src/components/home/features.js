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
            Travel is not a one size fits all experience, it’s an experience
            made better through the guidance of experienced personnel. From your
            departure terminals, we will work with you making sure that you have
            a hitch free trip.
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
            Our high reputation, excellent state of art facilities, automation
            of processes and technological advancement has all enabled us come
            out with the best prizes any reliable transport company can possibly
            have.
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
            Here at TMM, we develop best-practice standards like routine
            automobile checks, engagement of well-trained drivers who are not
            only competent with the FRSC road signs but know how to value life.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Features

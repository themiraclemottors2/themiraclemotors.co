import React from "react"
import styles from "./home.module.scss"

const Features = () => {
  return (
    <div className={styles.Features}>
      <p className={styles.Features__SubHeading}>TRAVELLING WITH US</p>
      <h1 className={styles.Features__Heading}>
        Your safety is our primary focus.
      </h1>
      <div className={styles.Features__List}>
        <div className={styles.Features__Item}>
          <div className={styles.Features__Item__Icon}></div>
          <h4 className={styles.Features__Item__Heading}>Travel with ease.</h4>
          <p className={styles.Features__Item__Text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <div className={styles.Features__Item}>
          <div className={styles.Features__Item__Icon}></div>
          <h4 className={styles.Features__Item__Heading}>
            Get the best prices.
          </h4>
          <p className={styles.Features__Item__Text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <div className={styles.Features__Item}>
          <div className={styles.Features__Item__Icon}></div>
          <h4 className={styles.Features__Item__Heading}>
            Put your safety first.
          </h4>
          <p className={styles.Features__Item__Text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Features

import React from "react"
import styles from "./home.module.scss"
import { Link } from "gatsby"

const PorpularTrips = () => {
  return (
    <div className={styles.PorpularTrips}>
      <p className={styles.PorpularTrips__SubHeading}>POPULAR TRIPS</p>
      <h1 className={styles.PorpularTrips__Heading}>
        Book a travel ticket in one click.
      </h1>
      <div className={styles.PorpularTrips__TripListWrapper}>
        <ul className={styles.PorpularTrips__TripList}>
          <li className={styles.PorpularTrips__Trip}>
            <Link to="/">Benin to Lagos</Link>
          </li>
          <li className={styles.PorpularTrips__Trip}>
            <Link to="/">Benin to Warri</Link>
          </li>
          <li className={styles.PorpularTrips__Trip}>
            <Link to="/">Benin to Abuja</Link>
          </li>
        </ul>
        <ul className={styles.PorpularTrips__TripList}>
          <li className={styles.PorpularTrips__Trip}>
            <Link to="/">Benin to Lagos</Link>
          </li>
          <li className={styles.PorpularTrips__Trip}>
            <Link to="/">Benin to Warri</Link>
          </li>
          <li className={styles.PorpularTrips__Trip}>
            <Link to="/">Benin to Abuja</Link>
          </li>
        </ul>
        <ul className={styles.PorpularTrips__TripList}>
          <li className={styles.PorpularTrips__Trip}>
            <Link to="/">Benin to Lagos</Link>
          </li>
          <li className={styles.PorpularTrips__Trip}>
            <Link to="/">Benin to Warri</Link>
          </li>
          <li className={styles.PorpularTrips__Trip}>
            <Link to="/">Benin to Abuja</Link>
          </li>
        </ul>
        <ul className={styles.PorpularTrips__TripList}>
          <li className={styles.PorpularTrips__Trip}>
            <Link to="/">Benin to Lagos</Link>
          </li>
          <li className={styles.PorpularTrips__Trip}>
            <Link to="/">Benin to Warri</Link>
          </li>
          <li className={styles.PorpularTrips__Trip}>
            <Link to="/">Benin to Abuja</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PorpularTrips

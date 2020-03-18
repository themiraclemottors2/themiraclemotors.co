import React, { useState } from "react"
import styles from "./trip.module.scss"
import { AlarmClock, Bus, Seat } from "../../assets/svg"
import car from "../../assets/images/car.png"
import { Button } from "../common"
import cx from "classnames"

const ReturnResults = () => {
  const [openSeats, setOpenSeats] = useState(false)
  const [selectedSeats, setSelectedSeats] = useState([])
  const bookedSeats = [1, 5]

  const handleSeatSelection = num => {
    if (bookedSeats.includes(num)) return null
    if (selectedSeats.includes(num)) {
      return setSelectedSeats([...selectedSeats.filter(item => item !== num)])
    }
    return setSelectedSeats([...selectedSeats, num])
  }

  return (
    <div className={styles.Result}>
      <div className={styles.Result__Details}>
        <div className={styles.Result__Details__bus}>
          <p>TOYOTA SIENNA</p>
          <img src={car} alt="Car" />
        </div>
        <div className={styles.Result__Details__time}>
          <AlarmClock />
          <p>8:00AM</p>
        </div>
        <div className={styles.Result__Details__booking}>
          <h3>NGN 3,999</h3>
          <p>4 seat(s) remaining</p>
          <Button
            onClick={() => setOpenSeats(!openSeats)}
            className={styles.Result__button}
          >
            View seats
          </Button>
        </div>
      </div>
      {openSeats && (
        <div className={styles.Result__Seat}>
          <div className={styles.Result__Seat__bus}>
            <Bus />
            <div className={styles.Result__Seat__column}>
              <div
                onClick={() => handleSeatSelection(1)}
                className={cx({
                  [`${styles.Result__Seat__selected}`]: selectedSeats.includes(
                    1
                  ),
                  [`${styles.Result__Seat__booked}`]: bookedSeats.includes(1),
                })}
              >
                <Seat />
              </div>
            </div>
            <div className={styles.Result__Seat__column}>
              <div>&nbsp;</div>
              <div
                onClick={() => handleSeatSelection(2)}
                className={cx({
                  [`${styles.Result__Seat__selected}`]: selectedSeats.includes(
                    2
                  ),
                  [`${styles.Result__Seat__booked}`]: bookedSeats.includes(2),
                })}
              >
                <Seat />
              </div>
              <div
                onClick={() => handleSeatSelection(3)}
                className={cx({
                  [`${styles.Result__Seat__selected}`]: selectedSeats.includes(
                    3
                  ),
                  [`${styles.Result__Seat__booked}`]: bookedSeats.includes(3),
                })}
              >
                <Seat />
              </div>
            </div>
            <div className={styles.Result__Seat__column}>
              <div
                onClick={() => handleSeatSelection(4)}
                className={cx({
                  [`${styles.Result__Seat__selected}`]: selectedSeats.includes(
                    4
                  ),
                  [`${styles.Result__Seat__booked}`]: bookedSeats.includes(4),
                })}
              >
                <Seat />
              </div>
              <div
                onClick={() => handleSeatSelection(5)}
                className={cx({
                  [`${styles.Result__Seat__selected}`]: selectedSeats.includes(
                    5
                  ),
                  [`${styles.Result__Seat__booked}`]: bookedSeats.includes(5),
                })}
              >
                <Seat />
              </div>
              <div
                onClick={() => handleSeatSelection(6)}
                className={cx({
                  [`${styles.Result__Seat__selected}`]: selectedSeats.includes(
                    6
                  ),
                  [`${styles.Result__Seat__booked}`]: bookedSeats.includes(6),
                })}
              >
                <Seat />
              </div>
            </div>
          </div>
          <div className={styles.Result__Seat__other}>
            <div className={styles.Result__Seat__sample}>
              <div className={styles.Result__Seat__available}>
                <Seat />
                <p>Available</p>
              </div>
              <div className={styles.Result__Seat__booked}>
                <Seat />
                <p>Booked</p>
              </div>
              <div className={styles.Result__Seat__selected}>
                <Seat />
                <p>Selected</p>
              </div>
            </div>
            <Button className={styles.Result__button}>Continue</Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReturnResults

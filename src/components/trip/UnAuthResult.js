import React, { useState, Fragment } from "react"
import styles from "./trip.module.scss"
import { AlarmClock, Bus, Seat } from "../../assets/svg"
import car from "../../assets/images/car.png"
import { Button } from "../common"
import cx from "classnames"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { formatCurrency } from "../../lib"
import moment from "moment"
import withStyles from "@material-ui/core/styles/withStyles"

const style = theme => ({
  seat: {
    color: "white",
    [theme.breakpoints.down("xs")]: {
      marginTop: "1.2rem",
    },
  },
  bus: {
    [theme.breakpoints.down("xs")]: {
      height: "10rem",
    },
  },
})

const UnAuthResults = ({
  loading,
  data,
  onContinue,
  numberOfTravellers,
  classes,
}) => {
  const [openSeats, setOpenSeats] = useState(false)
  const [selectedSeats, setSelectedSeats] = useState([])
  const seats = [...data.seats.sort((a, b) => a.seatNumber - b.seatNumber)]

  const availableSeats =
    data.seats.filter(item => item.status === "available").length - 2
  const vehicleModel = data.vehicle.type.model

  const handleSeatSelection = ({ status, id }) => {
    if (status !== "available") return null
    if (selectedSeats.includes(id)) {
      return setSelectedSeats([...selectedSeats.filter(item => item !== id)])
    }
    if (numberOfTravellers === selectedSeats.length) return null
    return setSelectedSeats([...selectedSeats, id])
  }

  const handleContinue = e => {
    e.preventDefault()
    return onContinue({
      seats: selectedSeats,
      tripId: data.id,
      departureTimestamp: data.departureTimestamp,
      price: data.price,
    })
  }

  return (
    <div className={styles.Result}>
      {!loading && (
        <Fragment>
          <div className={styles.Result__Details}>
            <div className={styles.Result__Details__bus}>
              <p>{vehicleModel.toUpperCase()}</p>
              <img src={car} alt="Car" />
            </div>
            <div className={styles.Result__Details__time}>
              <AlarmClock />
              <p>6:00Am</p>
            </div>
            <div className={styles.Result__Details__booking}>
              <h3>NGN {formatCurrency(Number(data.price))}</h3>
              <p>{availableSeats - selectedSeats.length} seat(s) remaining</p>
              <Button
                onClick={() =>
                  !!availableSeats ? setOpenSeats(!openSeats) : null
                }
                className={styles.Result__button}
                disabled={!availableSeats}
              >
                Select seats
              </Button>
            </div>
          </div>
          {openSeats && (
            <div className={styles.Result__Seat}>
              <div className={styles.Result__Seat__bus}>
                <Bus className={classes.bus} />
                <div className={styles.Result__Seat__column}>
                  {seats.splice(0, 1).map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => handleSeatSelection(item)}
                        className={cx({
                          [`${styles.Result__Seat__selected}`]: selectedSeats.includes(
                            item.id
                          ),
                          [`${styles.Result__Seat__booked}`]:
                            item.status !== "available",
                        })}
                      >
                        <Seat className={classes.seat} />
                      </div>
                    )
                  })}
                </div>
                <div className={styles.Result__Seat__column}>
                  {seats.splice(0, 2).map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => handleSeatSelection(item)}
                        className={cx({
                          [`${styles.Result__Seat__selected}`]: selectedSeats.includes(
                            item.id
                          ),
                          [`${styles.Result__Seat__booked}`]:
                            item.status !== "available",
                        })}
                      >
                        <Seat className={classes.seat} />
                      </div>
                    )
                  })}
                </div>
                <div className={styles.Result__Seat__column}>
                  {seats.splice(0, 2).map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => handleSeatSelection(item)}
                        className={cx({
                          [`${styles.Result__Seat__selected}`]: selectedSeats.includes(
                            item.id
                          ),
                          [`${styles.Result__Seat__booked}`]:
                            item.status !== "available",
                        })}
                      >
                        <Seat className={classes.seat} />
                      </div>
                    )
                  })}
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
                <Button
                  disabled={selectedSeats.length !== numberOfTravellers}
                  className={styles.Result__button}
                  onClick={handleContinue}
                >
                  Continue
                </Button>
              </div>
            </div>
          )}
        </Fragment>
      )}
      {loading && (
        <div className={styles.Result__Loading}>
          <SkeletonTheme color="#F1F2F6" highlightColor="#fff">
            <Skeleton width={810} height={114} />
          </SkeletonTheme>
        </div>
      )}
    </div>
  )
}

UnAuthResults.defaultProps = {
  data: {
    seats: [],
    price: 0,
    departureTimestamp: moment(),
    vehicle: {
      type: {
        model: "",
      },
    },
  },
  loading: false,
}

export default withStyles(style)(UnAuthResults)

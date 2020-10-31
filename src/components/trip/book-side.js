import React from "react"
import styles from "./trip.module.scss"
import moment from "moment"
import { formatCurrency } from "lib"
import withStyles from "@material-ui/core/styles/withStyles"
import Typography from "@material-ui/core/Typography"

const style = theme => ({
  head: {
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  main: {
    color: "blue",
    fontFamily: "auto",
  },
})
const BookSide = ({ trip, classes }) => {
  console.log(trip)
  return (
    <div className={(styles.BookSidebar, classes.head)}>
      <Typography variant="h4" className={classes.main}>
        TRIP SUMMARY
      </Typography>
      <div className={styles.BookSidebar__Card}>
        <div className={styles.BookSidebar__TripDetails}>
          <h2>OUTGOING</h2>
          <h3>
            {moment(trip.outgoing.departureTimestamp).format(
              "ddd, MMMM DD, YYYY"
            )}{" "}
            6:00 am
          </h3>
          <p>
            {trip.outgoing.arrivalTerminal} - {trip.outgoing.departureTerminal}
          </p>
        </div>
        {trip.return && (
          <div className={styles.BookSidebar__TripDetails}>
            <h2>RETURN</h2>
            <h3>
              {moment(trip.return.departureTimestamp).format(
                "ddd, MMMM DD, YYYY - hh:mm A"
              )}
            </h3>
            <p>
              {trip.return.departureTerminal} - {trip.return.arrivalTerminal}
            </p>
          </div>
        )}
      </div>
      <div className={styles.BookSidebar__Card}>
        <div className={styles.BookSidebar__Cost}>
          <div>
            <p>Tickets({trip.ticketsCount} Passengers)</p>
            <p>NGN {formatCurrency(trip.ticketsCost)}</p>
          </div>
          <div>
            <p>Service Fee</p>
            <p>NGN {formatCurrency(trip.serviceCharge)}</p>
          </div>
        </div>
        <div className={styles.BookSidebar__Cost}>
          <div>
            <p>
              Total
              <br />
              <span>(tax included)</span>
            </p>
            <p>NGN {formatCurrency(trip.serviceCharge + trip.ticketsCost)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(style)(BookSide)

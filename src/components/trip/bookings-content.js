import React, { Fragment, useEffect } from "react"
import { navigate } from "gatsby"
import { Book } from "../../assets/svg"
import NoResult from "./no-result"
import BookItem from "./book-item"
import Results from "./results"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { fetchBookingsRequest } from "store/actions/bookings"
import { capitalize, formatCurrency } from "lib"

const BookingContent = () => {
  const stateExtractor = ({
    bookings,
    common: {
      user: { id: userId },
    },
  }) => ({
    ...bookings,
    userId,
  })
  const { data: bookings, loading, userId } = useSelector(
    stateExtractor,
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(() => {
    try {
      dispatch(fetchBookingsRequest())
    } catch (error) {
      console.log(error)
    }
  }, [userId, dispatch])

  const handleViewDetails = bookingId => {
    navigate("/bookings/details", {
      state: { bookingId },
    })
  }

  return (
    <Fragment>
      {bookings.length <= 0 && !loading && (
        <NoResult
          svg={Book}
          header={"You haven’t made any bookings yet."}
          text={"All bookings you make will be listed here."}
        />
      )}
      {bookings.length > 0 &&
        bookings.map(
          (
            {
              id: bookingId,
              seats,
              payment: { amount  },
              trip: {
                departureTimestamp,
                vehicle: {
                  type: { model: vehicle },
                },
                departureTerminal: { name: departureTerminal },
                arrivalTerminal: { name: arrivalTerminal },
              },
            },
            index
          ) => {
           
            const booking = {
              bookingId,
              departureTerminal: capitalize(departureTerminal),
              arrivalTerminal: capitalize(arrivalTerminal),
              vehicle: vehicle.toUpperCase(),
              amount: formatCurrency(amount) ,
              seats: seats.length,
              departureTime: departureTimestamp,
            }
            return (
              <BookItem
                key={index}
                booking={booking}
                viewDetails={handleViewDetails}
              />
            )
          }
        )}
      {loading &&
        Array(3)
          .fill(1)
          .map((item, index) => <Results key={item + index} loading />)}
    </Fragment>
  )
}

BookingContent.propTypes = {}

export default BookingContent

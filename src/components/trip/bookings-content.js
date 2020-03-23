import React, { Fragment } from "react"
import { Book } from "../../assets/svg"
import NoResult from "./no-result"
import BookItem from "./book-item"

const BookingContent = () => {
  return (
    <Fragment>
      {false && (
        <NoResult
          svg={Book}
          header="You haven’t made any bookings yet."
          text="All bookings you make will be listed here."
        />
      )}
      <BookItem />
    </Fragment>
  )
}

BookingContent.propTypes = {}

export default BookingContent

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styles from "./trip.module.scss"
import { ChevronRight } from "assets/svg"
import cx from "classnames"

const BookHeader = ({ stage, breadCrumbs }) => {
  return (
    <div className={styles.BookHeader}>
      {breadCrumbs.map((item, index) => {
        return (
          <Fragment key={index}>
            <p
              className={cx({
                [`${styles.BookHeader__ActiveStage}`]: index <= stage,
              })}
            >
              {item}
            </p>
            {index !== breadCrumbs.length - 1 && <ChevronRight />}
          </Fragment>
        )
      })}
    </div>
  )
}

BookHeader.defaultProps = {
  breadCrumbs: [],
  stage: "",
}

BookHeader.propTypes = {
  stage: PropTypes.number,
  breadCrumbs: PropTypes.array,
}

export default BookHeader

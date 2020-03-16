import React from "react"
import PropTypes from "prop-types"
import styles from "./trip.module.scss"
import { Button } from "../common"

const SearchResultHeader = ({ header }) => {
  return (
    <div className={styles.SearchResultHeader}>
      <h4>SEARCH RESULT</h4>
      <h2>{header}</h2>
      <p>Thursday, March 12, 2020</p>
      <Button>Modify Search</Button>
    </div>
  )
}

SearchResultHeader.propTypes = {
  header: PropTypes.string,
}

export default SearchResultHeader

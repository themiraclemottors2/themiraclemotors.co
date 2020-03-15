import React from "react"
import PropTypes from "prop-types"
import styles from "./trip.module.scss"
import { AppStoreAction } from "../common"
import cx from "classnames"

const ResultWrapper = ({ children, sidebar, className }) => {
  return (
    <div className={cx(styles.ResultWrapper, className)}>
      <div className={styles.ResultContainer}>{children}</div>
      {!sidebar && <AppStoreAction className={styles.Default__sidebar} />}
      {sidebar && sidebar}
    </div>
  )
}

ResultWrapper.propTypes = {
  sidebar: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
}

export default ResultWrapper

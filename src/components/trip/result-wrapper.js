import React from "react"
import PropTypes from "prop-types"
import styles from "./trip.module.scss"
import { AppStoreAction } from "../common"
import cx from "classnames"

const ResultWrapper = ({ children, sidebar, className, footer }) => {
  return (
    <div className={cx(styles.ResultWrapper, className)}>
      <div className={styles.ResultWrapper__results}>{children}</div>
      {!sidebar && <AppStoreAction className={styles.Default__sidebar} />}
      {sidebar && sidebar}
      {footer && footer}
    </div>
  )
}

ResultWrapper.propTypes = {
  sidebar: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  footer: PropTypes.node,
}

export default ResultWrapper

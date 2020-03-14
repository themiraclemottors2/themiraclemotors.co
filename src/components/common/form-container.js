import React from "react"
import PropTypes from "prop-types"
import styles from "./common.module.scss"
import cx from "classnames"

const FormContainer = ({ header, children, className }) => {
  return (
    <div className={cx(styles.FormContainer, className)}>
      <h2 className={styles.FormContainer__Heading}>{header}</h2>
      {children}
    </div>
  )
}

FormContainer.propTypes = {
  header: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default FormContainer

import React from "react"
import PropTypes from "prop-types"
import styles from "./common.module.scss"
import cx from "classnames"

const WrapperCard = ({
  className,
  children,
  title,
  headerActionComponent: C,
}) => {
  return (
    <div className={cx(styles.WrapperCard, className)}>
      <div className={styles.WrapperCard__header}>
        <p className={styles.WrapperCard__title}>{title}</p>
        {C && <C />}
      </div>
      <div className={styles.WrapperCard__content}>{children}</div>
    </div>
  )
}

WrapperCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  children: PropTypes.string,
}

export default WrapperCard

import React, { useState } from "react"
import PropTypes from "prop-types"
import styles from "./common.module.scss"
import { CircleChevronUp } from "../../assets/svg"
import cx from "classnames"

const Accordion = ({ children, title, className, opened: propOpened }) => {
  const [opened, setOpened] = useState(false)
  return (
    <div className={cx(styles.Accordion, className)}>
      <div className={styles.Accordion__header}>
        <p className={styles.Accordion__title}>{title}</p>
        <CircleChevronUp
          className={cx(styles.Accordion__icon, {
            [`${styles.Accordion__icon__opened}`]: opened || propOpened,
          })}
          onClick={() => setOpened(!opened)}
        />
      </div>
      {opened ||
        (propOpened && (
          <div className={styles.Accordion__content}>{children}</div>
        ))}
    </div>
  )
}

Accordion.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

export default Accordion

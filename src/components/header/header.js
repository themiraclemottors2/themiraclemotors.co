import { Link } from "gatsby"
import React from "react"
import { Sticky } from "react-sticky"
import cx from "classnames"

import { Logo } from "../../assets/svg"

import styles from "./header.module.scss"

const Header = () => {
  return (
    <>
      <Sticky topOffset={700}>
        {({ style, isSticky }) => (
          <header
            style={style}
            className={cx(styles.Header, {
              [styles.Header__Sticky]: isSticky,
            })}
          >
            <Link
              aria-label="Logo"
              className={cx(styles.Header__logo, {
                [styles.Header__Sticky__logo]: isSticky,
              })}
              to="/"
            >
              <Logo />
            </Link>
            <ul className={styles.Header__NavList}>
              <li className={styles.Header__NavItem}>
                <Link to="/">Track Bookings</Link>
              </li>
              <li className={styles.Header__NavItem}>
                <Link to="/">Register</Link>
              </li>
              <li className={styles.Header__NavItem}>
                <Link to="/">Sign In</Link>
              </li>
            </ul>
          </header>
        )}
      </Sticky>
    </>
  )
}

export default Header

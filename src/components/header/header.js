import { Link } from "gatsby"
import React from "react"
import { Sticky } from "react-sticky"
import cx from "classnames"

import { Logo } from "../../assets/svg"

import styles from "./header.module.scss"

const Header = ({ location }) => {
  const isHome = location.pathname === "/"
  return (
    <>
      <Sticky topOffset={500}>
        {({ style, isSticky }) => (
          <header
            style={style}
            className={cx(styles.Header, {
              [styles.Header__Sticky]: isSticky || !isHome,
            })}
          >
            <Link
              aria-label="Logo"
              className={cx(styles.Header__logo, {
                [styles.Header__Sticky__logo]: isSticky || !isHome,
              })}
              to="/"
            >
              <Logo />
            </Link>
            <div className={styles.Header__Nav}>
              <input type="checkbox" id="menu" />
              <label htmlFor="menu" className={styles.Header__Nav__icon} />
              <ul className={styles.Header__NavList}>
                <li className={styles.Header__NavItem}>
                  <Link
                    activeClassName={styles.Header__NavItem__Active}
                    to="/track-bookings"
                  >
                    <p className={styles.Header__NavItem__text}>
                      Track Bookings
                    </p>
                  </Link>
                </li>
                <li className={styles.Header__NavItem}>
                  <Link
                    activeClassName={styles.Header__NavItem__Active}
                    to="/register"
                  >
                    <p className={styles.Header__NavItem__text}>Register</p>
                  </Link>
                </li>
                <li className={styles.Header__NavItem}>
                  <Link
                    activeClassName={styles.Header__NavItem__Active}
                    to="/sign-in"
                  >
                    <p className={styles.Header__NavItem__text}>Sign In</p>
                  </Link>
                </li>
              </ul>
            </div>
          </header>
        )}
      </Sticky>
    </>
  )
}

export default Header

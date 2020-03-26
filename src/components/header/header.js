import { Link } from "gatsby"
import React, { Fragment } from "react"
import { Sticky } from "react-sticky"
import cx from "classnames"
import { useSelector, useDispatch } from "react-redux"
import { Logo } from "../../assets/svg"
import styles from "./header.module.scss"
import { logout } from "store/actions/auth"

const Header = ({ location, layout }) => {
  const isAuthenticated = useSelector(
    ({ common: { isAuthenticated } }) => isAuthenticated
  )
  const dispatch = useDispatch()
  const pathname = location.pathname
  const topOffset = layout === "applied" ? 500 : 0
  const isHome = layout === "applied"
  const _handleLogout = e => {
    e.preventDefault()
    dispatch(logout())
  }

  return (
    <Sticky disableCompensation={!isHome} topOffset={topOffset}>
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
              {!isAuthenticated && (
                <Fragment>
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
                </Fragment>
              )}
              {isAuthenticated && (
                <Fragment>
                  <li className={styles.Header__NavItem}>
                    <Link
                      activeClassName={styles.Header__NavItem__Active}
                      to="/profile"
                    >
                      <p className={styles.Header__NavItem__text}>Profile</p>
                    </Link>
                  </li>
                  <li className={styles.Header__NavItem}>
                    <Link
                      activeClassName={styles.Header__NavItem__Active}
                      to="/bookings"
                    >
                      <p className={styles.Header__NavItem__text}>Bookings</p>
                    </Link>
                  </li>
                  <li className={styles.Header__NavItem}>
                    <Link to={pathname} onClick={_handleLogout}>
                      <p className={styles.Header__NavItem__text}>Logout</p>
                    </Link>
                  </li>
                </Fragment>
              )}
            </ul>
          </div>
        </header>
      )}
    </Sticky>
  )
}

export default Header

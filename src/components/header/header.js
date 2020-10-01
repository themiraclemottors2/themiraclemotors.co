import { Link } from "gatsby"
import React, { Fragment } from "react"
import { Sticky } from "react-sticky"
import cx from "classnames"
import { useSelector, useDispatch } from "react-redux"
import logo_white from "../../assets/images/logo-white.png"
import styles from "./header.module.scss"
import { logout } from "store/actions/auth"

const Header = ({ location, topOffset, isHome }) => {
  const isAuthenticated = useSelector(
    ({ common: { isAuthenticated } }) => isAuthenticated
  )
  const dispatch = useDispatch()
  const pathname = location.pathname
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
            <img src={logo_white} alt="" />
          </Link>
          <div className={styles.Header__Nav}>
            <input type="checkbox" id="menu" onClick={() => null} />
            <label htmlFor="menu" className={styles.Header__Nav__icon} />
            <ul className={styles.Header__NavList}>
              {!isAuthenticated && (
                <Fragment>

                  <li className={styles.Header__NavItem}>
                    <Link
                      activeClassName={styles.Header__NavItem__Active}
                      to="/"
                    >
                      <p className={styles.Header__NavItem__text}>Home</p>
                    </Link>
                  </li>

                  <li className={styles.Header__NavItem}>
                    <Link
                      activeClassName={styles.Header__NavItem__Active}
                      to="/about"
                    >
                      <p className={styles.Header__NavItem__text}>About Us </p>
                    </Link>
                  </li>

                  <li className={styles.Header__NavItem}>
                    <Link
                      activeClassName={styles.Header__NavItem__Active}
                      to="/register"
                    >
                      <p className={styles.Header__NavItem__text}>Register Now </p>
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

Header.defaultProps = {
  location: { pathname: "" },
  topOffset: 0,
  isHome: false,
}

export default Header

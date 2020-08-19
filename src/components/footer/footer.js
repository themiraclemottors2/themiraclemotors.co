import React from "react"
import styles from "./footer.module.scss"
import logo_white from "../../assets/images/logo-white.png"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__About}>
        <img src={logo_white} alt="" />
        <p>
          Km 33 Lekki/Epe express way, opposite Golden park estate, Sangotedo,
          Lagos, Nigeria.
        </p>
        <p>
          Miracle Motors is a registered Delaware C Corporation company, with RC
          Number 1635067.
        </p>
      </div>
      <div className={styles.Footer__UsefullLinks}>
        <ul className={styles.Footer__LinksList}>
          <li>
            <strong>Legal</strong>
          </li>
          <li>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
        <ul className={styles.Footer__LinksList}>
          <li>
            <strong>Company</strong>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
          <li>
            <Link to="/">Help Center!</Link>
          </li>
        </ul>
        <ul className={styles.Footer__LinksList}>
          <li>
            <strong>Social</strong>
          </li>
          <li>
            <Link to="/Themiraclemotorsng">Facebook</Link>
          </li>
          <li>
            <Link to="/Themiraclemotorsng">Instagram</Link>
          </li>
          <li>
            <Link to="/Themiraclemotorsng">Twitter</Link>
          </li>
          <li>
            <Link to="/">LinkedIn</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer

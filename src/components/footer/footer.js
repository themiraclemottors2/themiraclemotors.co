import React from "react"
import styles from "./footer.module.scss"
import { Logo } from "../../assets/svg"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__About}>
        <Logo />
        <p>19B Bosun Adekoya Street, Lekki, Lagos, Nigeria.</p>
        <p>
          Miracle Motors is a registered Delaware C Corporation company, with RC
          Number 900009. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
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
            <Link to="/">Facebook</Link>
          </li>
          <li>
            <Link to="/">Instagram</Link>
          </li>
          <li>
            <Link to="/">Twitter</Link>
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

import React from "react"
import styles from "./static.module.scss"

const Content = ({ data, contact }) => {
  return (
    <div className={styles.Content}>
      {data.map((item, index) => (
        <div key={index + "-sc"} className={styles.Content__section}>
          <h5 className={styles.Content__section__header}>{item.header}</h5>
          <p
            className={styles.Content__section__text}
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        </div>
      ))}

      <div className={styles.Content__section}>
        <h5 className={styles.Content__section__header}>Contact Us</h5>
        <p className={styles.Content__section__text}>
          For queries and enquiries on issues not addressed above, kindly reach
          our care team via email or mobile using:
        </p>
        <p className={styles.Content__section__text}>
          <a href="mailto:contact@themiraclemotors.co">
            contact@themiraclemotors.co
          </a>{" "}
          or <a href="tel:+2348147344497">+2348147344497</a>
        </p>
      </div>
    </div>
  )
}

export default Content

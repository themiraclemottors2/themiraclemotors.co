import React from "react"
import styles from "./home.module.scss"

import { Input, Button } from "../../components/common"

const Newsletter = () => {
  return (
    <div className={styles.Newsletter}>
      <p className={styles.Newsletter__SubHeading}>STAY IN TOUCH</p>
      <h1 className={styles.Newsletter__Heading}>
        Be the first to get our handpicked discounts and deals, straight to your
        inbox.
      </h1>
      <form
        className={styles.NewsletterForm}
        action=""
        onSubmit={e => e.preventDefault()}
      >
        <Input
          className={styles.NewsletterForm__Input}
          label="Email Address"
          placeholder="Enter your email address"
        />
        <Button className={styles.NewsletterForm__Submit}>Subscribe</Button>
      </form>
    </div>
  )
}

export default Newsletter

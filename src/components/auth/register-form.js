import React from "react"
// import PropTypes from "prop-types"
import FormContainer from "../common/form-container"
import styles from "./auth.module.scss"
import cx from "classnames"
import { Input, Button } from "../common"
import { Link } from "gatsby"

const RegisterForm = props => {
  return (
    <FormContainer
      className={cx(styles.FormContainer, styles.RegisterForm)}
      header="Create an account."
    >
      <form action="">
        <div className={styles.RegisterForm__container}>
          <Input
            type="text"
            className={styles.RegisterForm__Input__half}
            placeholder="First Name"
          />
          <Input
            type="text"
            className={styles.RegisterForm__Input__half}
            placeholder="Last Name"
          />
        </div>
        <Input
          type="email"
          className={styles.RegisterForm__Input}
          placeholder="Email Address"
        />
        <Input
          type="password"
          className={styles.RegisterForm__Input}
          placeholder="Password"
        />
        <Button className={styles.RegisterForm__Submit}>Create account</Button>
      </form>
      <p>
        By creating an account you agree to our <Link to="/">Terms of Use</Link>{" "}
        and <Link to="/">Privacy Policy.</Link>
      </p>
    </FormContainer>
  )
}

RegisterForm.propTypes = {}

export default RegisterForm

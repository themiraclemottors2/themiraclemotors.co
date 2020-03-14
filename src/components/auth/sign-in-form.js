import React from "react"
// import PropTypes from "prop-types"
import FormContainer from "../common/form-container"
import styles from "./auth.module.scss"
import cx from "classnames"
import { Input, Button } from "../common"
import { Link } from "gatsby"

const SignInForm = props => {
  return (
    <FormContainer
      className={cx(styles.FormContainer, styles.SignInForm)}
      header="Sign In"
    >
      <form action="">
        <Input
          type="email"
          className={styles.SignInForm__Input}
          placeholder="Email Address"
        />
        <Input
          type="password"
          className={styles.SignInForm__Input}
          placeholder="Password"
        />
        <Button className={styles.SignInForm__Submit}>Sign In</Button>
      </form>
      <p>
        Forgot password? Reset password <Link to="/password-reset">here.</Link>
      </p>
    </FormContainer>
  )
}

SignInForm.propTypes = {}

export default SignInForm

import React from "react"
// import PropTypes from "prop-types"
import FormContainer from "../common/form-container"
import styles from "./auth.module.scss"
import cx from "classnames"
import { Input, Button } from "../common"
import { Link } from "gatsby"

const PasswordResetForm = props => {
  return (
    <FormContainer
      className={cx(styles.FormContainer, styles.PasswordResetForm)}
      header="Password Reset"
    >
      <form action="">
        <Input
          type="email"
          className={styles.PasswordResetForm__Input}
          placeholder="Email Address"
        />
        <Button className={styles.PasswordResetForm__Submit}>
          Send Reset Link
        </Button>
      </form>
      <p>
        Are you a new user? <Link to="/register">Create an account.</Link>
      </p>
    </FormContainer>
  )
}

PasswordResetForm.propTypes = {}

export default PasswordResetForm

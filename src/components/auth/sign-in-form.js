import React, { useState } from "react"
// import PropTypes from "prop-types"
import FormContainer from "../common/form-container"
import styles from "./auth.module.scss"
import cx from "classnames"
import { Input, Button } from "../common"
import { Link } from "gatsby"
import { useDispatch } from "react-redux"
import { loginRequest } from "../../store/actions/auth"
import { toast } from "react-toastify"
import { window } from "browser-monads"
import withStyles from "@material-ui/core/styles/withStyles"

const style = theme => ({
  btn: {
    marginTop: "1rem",
    margin: "auto",
    background: "#32bbff",
    width: "100%",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      padding: "1.5rem 0",
    },
  },
})

const SignInForm = ({ classes }) => {
  const dispatch = useDispatch()
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const _handleSubmit = async e => {
    e.preventDefault()
    if (loading) return null
    setLoading(true)
    try {
      const urlSearchParams = new URLSearchParams(window.location.search)
      const redirectTo = urlSearchParams.get("redirect") || null
      await dispatch(loginRequest({ phoneNumber: phone, password }, redirectTo))
      toast.success("Signed In Successfully")
      setPassword("")
      setPhone("")
    } catch (error) {
      let err = "Something went wrong, please try again"
      if (error.response) {
        err = error.response.data.message
      }
      toast.error(err)
      setLoading(false)
    }
  }

  const _handlePhoneInput = ({ target }) => {
    if (isNaN(Number(target.value))) {
      return setPhone(phone)
    }
    return setPhone(target.value)
  }

  return (
    <FormContainer
      className={cx(styles.FormContainer, styles.SignInForm)}
      header="Sign In"
    >
      <form onSubmit={_handleSubmit}>
        <Input
          type="phone"
          value={phone}
          className={styles.SignInForm__Input}
          label="Phone Number"
          placeholder="Enter your phone number"
          onChange={_handlePhoneInput}
          required
        />
        <Input
          type="password"
          value={password}
          className={styles.SignInForm__Input}
          label="Password"
          placeholder="*****"
          onChange={({ target }) => setPassword(target.value)}
          required
        />
        <Button loading={loading} className={styles.SignInForm__Submit}>
          Sign In
        </Button>
      </form>
      <p>
        Forgot password? Reset password <Link to="/password-reset">here.</Link>
        <br />
        Do not have an account? Register <Link to="/register">here.</Link>
      </p>
      <p> Sign up and get 5% discount</p>
      <p>Get other special offers and deals</p>
      <Link to="../trip/unAuth-search">
        <button className={(styles.SignInForm__Submit, classes.btn)}>
          Continue without signup
        </button>
      </Link>
    </FormContainer>
  )
}

SignInForm.propTypes = {}

export default withStyles(style)(SignInForm)

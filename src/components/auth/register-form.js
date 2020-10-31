import React, { useState } from "react"
import FormContainer from "../common/form-container"
import styles from "./auth.module.scss"
import cx from "classnames"
import { Input, Button } from "../common"
import { Link } from "gatsby"
import { useDispatch } from "react-redux"
import { registerRequest } from "../../store/actions/auth"
import { toast } from "react-toastify"

const RegisterForm = props => {
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const _handleSubmit = async e => {
    e.preventDefault()
    if (loading) return null
    setLoading(true)
    try {
      await dispatch(
        registerRequest({
          phoneNumber: phone,
          password,
          email,
          firstName,
          lastName,
        })
      )
      toast.success("Signed Up Successfully, please Sign In to continue")

      setPassword("")
      setPhone("")
      setEmail("")
      setFirstName("")
      setLastName("")
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
      className={cx(styles.FormContainer, styles.RegisterForm)}
      header="Create an account."
    >
      <form action="" onSubmit={_handleSubmit}>
        <div className={styles.RegisterForm__container}>
          <Input
            type="text"
            onChange={({ target }) => setFirstName(target.value)}
            value={firstName}
            className={styles.RegisterForm__Input__half}
            label="First Name"
            placeholder="Enter your first name"
            required
          />
          <Input
            type="text"
            onChange={({ target }) => setLastName(target.value)}
            value={lastName}
            className={styles.RegisterForm__Input__half}
            label="Last Name"
            placeholder="Enter your last name"
            required
          />
        </div>
        <Input
          type="email"
          onChange={({ target }) => setEmail(target.value)}
          value={email}
          className={styles.RegisterForm__Input}
          label="Email Address"
          placeholder="Enter your email address"
          required
        />
        <Input
          type="phone"
          onChange={_handlePhoneInput}
          value={phone}
          className={styles.RegisterForm__Input}
          label="Phone Number"
          placeholder="Enter your hone number"
          required
        />
        <Input
          type="password"
          onChange={({ target }) => setPassword(target.value)}
          value={password}
          className={styles.RegisterForm__Input}
          label="Password"
          placeholder="******"
          required
        />
        <Button loading={loading} className={styles.RegisterForm__Submit}>
          Create account
        </Button>
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

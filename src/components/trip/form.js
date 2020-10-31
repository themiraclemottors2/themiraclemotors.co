import React, { Component } from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import TextField from "@material-ui/core/TextField"
import { toast } from "react-toastify"
import isEqual from "../../../node_modules/lodash/isEqual"
import { emptyObjProps } from "lib"
import { UnAuthContext } from "../../context"
import { Input } from "../common/index"
import styles from "../common/common.module.scss"
import cx from "classnames"

const style = theme => ({
  form: {
    background: "#fff",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  text: {
    margin: "1rem 1.5rem",
    background: "#f1f2f6",
    borderRadius: "4px",
    width: "15rem",
  },
})
class Form extends Component {
  state = {
    email: "",
    kin: "",
    address: "",
    phoneNumber: "",
  }
  static contextType = UnAuthContext
  handleChange = () => {
    if (emptyObjProps(this.state).length) {
      return toast.warn("Field(s) can not be empty")
    }
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([A-Za-z]{2,5})$/
    if (!re.test(this.state.email)) {
      return toast.warn("invalid email entered")
    }
  }

  _handlePhoneInput = ({ target: { value, name } }) => {
    const { phoneNumber } = this.state
    if (isNaN(Number(value))) {
      return this.handle({
        [name]: name === "phoneNumber" ? phoneNumber : null,
      })
    }
    return this.handle({ [name]: value })
  }
  handle = data => {
    this.setState({ ...data })
  }
  render() {
    const { email, kin, address, phoneNumber } = this.state
    const { classes } = this.props

    sessionStorage.setItem("data", JSON.stringify(this.state))

    return (
      <form onKeyUp={this.handleChange} className={classes.form}>
        <div className={styles.ProfileForm__Input__group}>
          <Input
            className={(styles.ProfileForm__Input__half, classes.text)}
            label="Email"
            placeholder="Enter your Email"
            required
            name="email"
            value={email}
            onChange={({ target: { value: email } }) => this.handle({ email })}
          />
          <Input
            className={(styles.ProfileForm__Input__half, classes.text)}
            label="Address"
            placeholder="Enter your address"
            required
            name="address"
            value={address}
            onChange={({ target: { value: address } }) =>
              this.handle({ address })
            }
            name="address"
            className={classes.text}
            required
          />
        </div>
        <div className={styles.ProfileForm__Input__group}>
          <Input
            className={(styles.ProfileForm__Input__half, classes.text)}
            label="Next of kin"
            value={kin}
            placeholder="Next of kin Name"
            onChange={({ target: { value: kin } }) => this.handle({ kin })}
            name="kin"
            className={classes.text}
            required
          />
          <Input
            className={(styles.ProfileForm__Input__half, classes.text)}
            type="number"
            label=" phone number"
            placeholder="Next of kin Phone number"
            value={phoneNumber}
            onChange={this._handlePhoneInput}
            name="phoneNumber"
            className={classes.text}
            required
          />
        </div>
        {/* <TextField
          label="Email Address"
          variant="outlined"
          value={email}
          onChange={({ target: { value: email } }) => this.handle({ email })}
          name="email"
          required
          type="email"
          className={classes.text}
        /> */}
        {/* <TextField
          label="address"
          variant="outlined"
          value={address}
          onChange={({ target: { value: address } }) =>
            this.handle({ address })
          }
          name="address"
          className={classes.text}
          required
        /> */}
        {/* <TextField
          label="Next of kin"
          variant="outlined"
          value={kin}
          onChange={({ target: { value: kin } }) => this.handle({ kin })}
          name="kin"
          className={classes.text}
          required
        /> */}
        {/* <TextField
          type="number"
          label="next of kin phone number"
          variant="outlined"
          value={phoneNumber}
          onChange={this._handlePhoneInput}
          name="phoneNumber"
          className={classes.text}
          required
        /> */}
      </form>
    )
  }
}

export default withStyles(style)(Form)

import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

// import { Input, Button } from "../../components/common"
const style = theme => ({
  sub: {
    textAlign: "center",

    fontSize: "1.4rem",
    fontFamily: "auto",
    fontWeight: "bold",
    color: "#589ccb",
  },
  form: {
    margin: "4rem 1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    textAlign: "center",
    fontSize: "1.7rem",
    color: "#007bff",
    textTransform: "capitalize",
    fontWeight: "bold",
    marginTop: "1rem",
  },

  btn: {
    margin: "1rem",
  },
})

const Newsletter = ({ classes }) => {
  return (
    <>
      <Typography variant="h5" className={classes.sub}>
        Stay in Touch
      </Typography>
      <Typography variant="h3" className={classes.main}>
        {" "}
        Be the first to get our handpicked discounts and deals, straight to your
        inbox.
      </Typography>
      <form className={classes.form}>
        <TextField
          id="outlined-basic"
          label="Enter your Email Address"
          variant="outlined"
        />
        <Button variant="contained" color="primary" className={classes.btn}>
          Subscribe
        </Button>
      </form>
    </>
  )
}

export default withStyles(style)(Newsletter)

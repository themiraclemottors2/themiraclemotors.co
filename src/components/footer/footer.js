import React from "react"
import logo_white from "../../assets/images/logo-white.png"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import withStyles from "@material-ui/core/styles/withStyles"
import Typograhy from "@material-ui/core/Typography"
import Typography from "@material-ui/core/Typography"

const style = theme => ({
  head: {
    border: "1px solid transparent",
    background: "#425486",
  },
  main: {
    margin: "3rem 5rem",
    [theme.breakpoints.down("sm")]: {
      margin: "2rem",
    },
  },
  img: {
    width: "12rem",
    marginLeft: "6rem",
    [theme.breakpoints.down("sm")]: {
      width: "5rem",
      marginLeft: "0",
    },
  },
  typo: {
    fontSize: ".8rem",
    textAlign: "center",
    color: "#fff",
    marginTop: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".5rem",
    },
  },
  legal: {
    color: "#fff",
    margin: "3rem 0",
    textAlign: "center",
  },
  lega: {
    margin: "0 0 2rem 0",
    fontSize: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  leg: {
    fontSize: "1rem",
    marginBottom: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".5rem",
    },
  },
  span: {
    margin: "0 1rem",
    [theme.breakpoints.down("md")]: {
      margin: "0 .5rem",
      fontSize: ".7rem",
    },
  },
  hor: {
    borderTop: "1px solid #fff",
    borderColor: "#fff",
    margin: "1rem 4rem",
  },
  foot: {
    color: "#fff",
    textAlign: "center",
    margin: "1rem 0",
  },
})

const Footer = ({ classes }) => {
  return (
    <div className={classes.head}>
      <Grid container>
        <Grid item xs={3} className={classes.main}>
          <img src={logo_white} alt="miraclemotors" className={classes.img} />
          <Typograhy variant="h6" className={classes.typo}>
            {" "}
            Km 33 Lekki/Epe express way, opposite Golden park estate, Sangotedo,
            Lagos, Nigeria.
          </Typograhy>
          {/* <Typograhy variant="h3" className={classes.typo}>
            Miracle Motors is a registered Delaware C Corporation company, with
            RC Number 1635067.
          </Typograhy> */}
        </Grid>
        <Grid item xs={3} className={classes.legal}>
          <Typograhy variant="h3" className={classes.lega}>
            Legal
          </Typograhy>
          <Typograhy variant="h5" className={classes.leg}>
            {" "}
            <Link to="/terms">Terms &amp; Conditions</Link>
          </Typograhy>
          <Typograhy variant="h5" className={classes.leg}>
            {" "}
            <Link to="/privacy-policy">Privacy Policy</Link>
          </Typograhy>
        </Grid>
        <Grid item xs={2} className={classes.legal}>
          <Typograhy variant="h4" className={classes.lega}>
            Company
          </Typograhy>
          <Typograhy variant="h6" className={classes.leg}>
            <Link to="/about">About</Link>
          </Typograhy>
          <Typograhy variant="h6" className={classes.leg}>
            <Link to="/careers">Careers</Link>
          </Typograhy>
          <Typograhy variant="h6" className={classes.leg}>
            <Link to="/">Help Center</Link>
          </Typograhy>
        </Grid>
        <Grid item xs={2} className={classes.legal}>
          <Typograhy variant="h3" className={classes.lega}>
            Connect with us
          </Typograhy>
          <Typograhy variant="h6">
            <span className={classes.span}>
              <Link
                to="https://facebook.com/Themiraclemotorsng"
                target="_blank"
              >
                {" "}
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </Link>
            </span>
            <span className={classes.span}>
              <Link
                to="https://instagram.com/Themiraclemotorsng"
                target="_blank"
              >
                {" "}
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </Link>
            </span>
            <span className={classes.span}>
              <Link to="https://twitter.com/Themiraclemoto2">
                <i className="fa fa-twitter" aria-hidden="true"></i>{" "}
              </Link>
            </span>
          </Typograhy>
        </Grid>
      </Grid>
      <div className={classes.hor}>
        <Typography variant="h6" className={classes.foot}>
          2020 &copy; <span>themiraclemotorng.com. All Right Reserved.</span>
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(style)(Footer)

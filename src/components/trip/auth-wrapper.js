import React from "react"
import PropTypes from "prop-types"
import styles from "./trip.module.scss"
import { AppStoreAction } from "../common"
// import cx from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"

const style = theme => ({
  head: {
    overflow: "none",
  },
})

const AuthWrapper = ({ children, sidebar, className, footer, classes }) => {
  return (
    <Grid container className={classes.head}>
      <Grid item xs={12} md={5}>
        {!sidebar && <AppStoreAction className={styles.Default__sidebar} />}
        {sidebar && sidebar}
      </Grid>
      <Grid item xs={12} md={5}>
        hello
      </Grid>
    </Grid>
    // <div className={cx(styles.ResultWrapper, className, classes.typo)}>
    //   <div className={styles.ResultWrapper__results}>{children}</div>
    // {!sidebar && <AppStoreAction className={styles.Default__sidebar} />}
    // {sidebar && sidebar}
    //   {footer && footer}
    // </div>
  )
}

AuthWrapper.propTypes = {
  sidebar: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  footer: PropTypes.node,
  classes: PropTypes.object.isRequired,
}

export default withStyles(style)(AuthWrapper)

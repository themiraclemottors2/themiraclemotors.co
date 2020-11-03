import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"

const style = theme => ({
  main: {
    margin: "7rem 15rem 0 0",
  },
})

const UnAuthResultWrapper = ({ classes, footer }) => {
  return <div className={classes.main}>{footer} </div>
}

export default withStyles(style)(UnAuthResultWrapper)

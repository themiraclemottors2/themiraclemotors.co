import React, { useState } from "react"
import MomentUtils from "@date-io/moment"
import withStyles from "@material-ui/core/styles/withStyles"
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers"
const style = theme => ({
  date: {
    width: "99%",
    margin: " 0  0 2rem 0",
    background: "#f1f2f6",
    borderColor: "#425486",
    [theme.breakpoints.down("sm")]: {
      background: "white",
      "& label": {
        fontSize: "1.5rem",
      },
      "& input": {
        fontSize: "1.5rem",
      },
    },
    "& input": {
      padding: "2rem",
      color: "#425486",
      borderColor: "#425486",
      fontWeight: "bold",
    },

    "& label": {
      color: "#425486",
      fontWeight: "bold",
    },
    "& button": {
      color: "rgb(161, 169, 195)",
    },
    "& active:": {
      border: "none",
    },
    "& icon": {
      fontSize: "2rem",
    },
  },
})

function DateKeyBoard({ data, classes }) {
  let date = new Date()
  const minDate = date.setDate(date.getDate() + 1)
  const maxDate = date.setDate(date.getDate() + 30)
  const [selected, selectedDate] = useState(minDate)

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label="Departure Date"
        format="YYYY-MM-DD"
        minDate={minDate}
        maxDate={maxDate}
        value={selected}
        InputAdornmentProps={{ position: "start" }}
        onChange={date => {
          selectedDate(date)
          return data(date)
        }}
        className={classes.date}
      />
    </MuiPickersUtilsProvider>
  )
}
export default withStyles(style)(DateKeyBoard)

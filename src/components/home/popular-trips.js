import React from "react"

import { Link } from "gatsby"
import abisaa from "../../assets/images/abisaa.jpg"
import benin3 from "../../assets/images/benin3.jpg"
import abuja2 from "../../assets/images/abuja2.jpg"
import uyoooo from "../../assets/images/uyoooo.png"
import delta from "../../assets/images/delta.png"
import lagooo from "../../assets/images/lagooo.jpg"
import bayelsa from "../../assets/images/bayelsa.jpg"
import rivers from "../../assets/images/rivers.jpg"
import anabra from "../../assets/images/anabra.jpg"
import owerri from "../../assets/images/owerri.jpg"
import enugu from "../../assets/images/enugu.jpg"
import asa from "../../assets/images/asa.jpg"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { getSearchData } from "../../store/actions/trips"
import Grid from "@material-ui/core/Grid"
import withStyles from "@material-ui/core/styles/withStyles"
import Typography from "@material-ui/core/Typography"
import { navigate } from "gatsby"

const style = theme => ({
  sub: {
    fontSize: "1.3rem",
    textAlign: "center",
    color: "#5acafa",
    fontWeight: "bold",
    marginTop: "3rem",
    fontFamily: "auto",
  },
  main: {
    textAlign: "center",
    color: "#007bff",
    fontSize: "2rem",
    fontWeight: "bold",
    marginTop: "1rem",
    fontFamily: "auto",
    textTransform: "capitalize",
  },
  contain: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "2rem 0",
    fontFamily: "auto",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      margin: "1rem 0",
      display: "flex",
      alignItems: "center",
    },
  },
  img: {
    width: "20rem",
    height: "15rem",
    borderRadius: "12px",
    [theme.breakpoints.down("sm")]: {
      width: "30rem",
      height: "18rem",
    },
  },
  desc: {
    margin: ".4rem 0",
    color: "#5acafa",
    fontWeight: "bold",
    fontSize: "1.5rem",
    fontFamily: "auto",
  },
  imgs: {
    width: "20rem",
  },
  card: {
    width: "100%",
    height: "10rem",
    background: "#fff",
    border: "1px solid #5acafa",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 0 1rem 0",
  },
})

const PopularTrips = ({ classes, find }) => {
  const description = [
    {
      id: 1,
      image: benin3,
      desc: "Lagos to benin",
      departureTerminal: "Lagos (Sangotedo)",
      arrivalTerminal: "Asaba (delta)",
    },
    {
      id: 2,
      image: abuja2,
      desc: "Lagos to Abuja",
      departureTerminal: "Lagos (Sangotedo)",
      arrivalTerminal: "Abuja (Utako)",
    },
    {
      id: 3,
      image: uyoooo,
      desc: "Lagos to Uyo",
      departureTerminal: "Lagos (Sangotedo)",
      arrivalTerminal: "Uyo",
    },
    {
      id: 4,
      image: abisaa,
      desc: "Lagos to Warri",
      departureTerminal: "Lagos (Sangotedo)",
      arrivalTerminal: "Asaba (delta)",
    },
    {
      id: 5,
      image: delta,
      desc: "Lagos to Aba",
    },
    {
      id: 6,
      image: enugu,
      desc: "Lagos to Enugu",
    },
    {
      id: 7,
      image: bayelsa,
      desc: "Lagos to Bayelsa",
    },
    {
      image: asa,
      desc: "Lagos to Asaba",
    },
    {
      id: 8,
      image: rivers,
      desc: "Lagos to PorthHarCourt",
    },
    {
      id: 9,
      image: anabra,
      desc: "Lagos to Awka",
    },
    {
      id: 10,
      image: owerri,
      desc: "Lagos to Owerri",
    },
    {
      id: 11,
      image: lagooo,
      desc: "Lagos to Onitsha",
    },
  ]
  const stateExtractor = ({
    terminals: { loading },
    common: { popularTrips },
  }) => ({
    loading,
    popularTrips,
  })
  const dispatch = useDispatch()
  const { loading, popularTrips } = useSelector(stateExtractor, shallowEqual)
  const handleChange = id => {
    const item = description.find(item => item.id === id)
    const desc = item.desc.split(" ")
    console.log(popularTrips)
    let depart = popularTrips.map(item => item.departure.name)

    // let tempArrive = arrive.map(item => item.substring(0, 3))

    // let pop = popularTrips.find(item => {
    //   const { departure, arrival } = item
    //   let tempDepart = departure.name.map(item => item.substring(0, 3))
    //   let tempArrive = arrival.name.map(item => item.substring(0, 3))
    //   let terminal = [...tempArrive, ...tempDepart]
    //   terminal = terminal.filter(
    //     (value, index) => terminal.indexOf(value) === index
    //   )
    //   return terminal === desc[2].substring(0, 3)
    // })
    // console.log(pop)

    return navigate("/")
  }
  const handleOnClick = searchData => {
    return dispatch(getSearchData(searchData))
  }

  return (
    <>
      <Typography variant="h5" className={classes.sub}>
        POPULAR TRIPS
      </Typography>
      <Typography variant="h2" className={classes.main}>
        {" "}
        Book a travel ticket in one click.
      </Typography>
      <Grid container sapcing={1}>
        {description.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            className={classes.contain}
            onClick={() => handleChange(item.id)}
          >
            <img src={item.image} alt={item.desc} className={classes.img} />
            <Typography variant="h6" className={classes.desc}>
              {item.desc}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default withStyles(style)(PopularTrips)

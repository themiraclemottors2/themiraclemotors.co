import React from "react"
import styles from "./home.module.scss"
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
import { capitalize } from "lib"
import { getSearchData } from "../../store/actions/trips"

const PopularTrips = () => {
  const stateExtractor = ({
    terminals: { loading },
    common: { popularTrips },
  }) => ({
    loading,
    popularTrips,
  })
  const dispatch = useDispatch()
  const { loading, popularTrips } = useSelector(stateExtractor, shallowEqual)

  const handleOnClick = searchData => {
    return dispatch(getSearchData(searchData))
  }

  return (
    <div className={styles.PopularTrips}>
      <p className={styles.PopularTrips__SubHeading}>POPULAR TRIPS</p>
      <h1 className={styles.PopularTrips__Heading}>
        Book a travel ticket in one click.
      </h1>
      <div className={styles.PopularTrips__TripListWrapper}>
        <ul className={styles.PopularTrips__TripList}>
          <li className={styles.PopularTrips__Trip}>
          <img src={benin3} style={{ width: "250px" }} alt="" />
            <Link to="/#">Lagos to Benin</Link>
          </li>
          <li className={styles.PopularTrips__Trip}>
          <img src={abuja2} style={{ width: "250px" }} alt="" />
            <Link to="/#">Lagos to Abuja</Link>
          </li>
          <li className={styles.PopularTrips__Trip}>
          <img src={uyoooo} style={{ width: "250px" }} alt="" />
            <Link to="/#">Lagos to Calabar</Link>
          </li>

          <li className={styles.PopularTrips__Trip}>
          <img src={abisaa} alt="" />
            <Link to="/#">Lagos to Warri</Link>
          </li>
          <li className={styles.PopularTrips__Trip}>
          <img src={delta} style={{ width: "250px" }} alt="" />
            <Link to="/#">Lagos to Enugu</Link>
          </li>
          <li className={styles.PopularTrips__Trip}>
          <img src={lagooo} style={{ width: "250px" }} alt="" />
            <Link to="/#">Lagos to Onitsha</Link>
          </li>

          <li className={styles.PopularTrips__Trip}>
          <img src={enugu} style={{ width: "250px" }} alt="" />
            <Link to="/#">Lagos to Enugu</Link>
          </li>
          <li className={styles.PopularTrips__Trip}>
          <img src={bayelsa} style={{ width: "250px" }} alt="" />
            <Link to="/#">Lagos to Bayelsa</Link>
          </li>
          <li className={styles.PopularTrips__Trip}>
          <img src={rivers} style={{ width: "250px" }} alt="" />
            <Link to="/#">Lagos to PortHarcourt</Link>
          </li>

          <li className={styles.PopularTrips__Trip}>
          <img src={anabra} style={{ width: "250px" }} alt="" />
            <Link to="/#">Lagos to Awka</Link>
          </li>
          <li className={styles.PopularTrips__Trip}>
          <img src={owerri} style={{ width: "250px" }} alt="" />
            <Link to="/#">Lagos to Owerri</Link>
          </li>
          <li className={styles.PopularTrips__Trip}>
          <img src={asa} style={{ width: "250px" }} alt="" />
            <Link to="/#">Lagos to Asaba</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PopularTrips

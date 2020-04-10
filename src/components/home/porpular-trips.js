import React from "react"
import styles from "./home.module.scss"
import { Link } from "gatsby"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { capitalize } from "lib"
import { getSearchData } from "../../store/actions/trips"

const PorpularTrips = () => {
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
    <div className={styles.PorpularTrips}>
      <p className={styles.PorpularTrips__SubHeading}>POPULAR TRIPS</p>
      <h1 className={styles.PorpularTrips__Heading}>
        Book a travel ticket in one click.
      </h1>
      <div className={styles.PorpularTrips__TripListWrapper}>
        {!loading && popularTrips.length ? (
          <ul className={styles.PorpularTrips__TripList}>
            {popularTrips.map(({ departure, arrival }, index) => {
              return (
                <li key={index} className={styles.PorpularTrips__Trip}>
                  <Link
                    onClick={e =>
                      handleOnClick({
                        departureTerminalId: departure.id,
                        arrivalTerminalId: arrival.id,
                      })
                    }
                    to="/"
                  >
                    {capitalize(departure.name)} to {capitalize(arrival.name)}
                  </Link>
                </li>
              )
            })}
          </ul>
        ) : null}
      </div>
    </div>
  )
}

export default PorpularTrips

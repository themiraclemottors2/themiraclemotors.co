import React from "react"
import styles from "./home.module.scss"
import { Link } from "gatsby"
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
        {!loading && popularTrips.length ? (
          <ul className={styles.PopularTrips__TripList}>
            {popularTrips.map(({ departure, arrival }, index) => {
              return (
                <li key={index} className={styles.PopularTrips__Trip}>
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

export default PopularTrips

import React, { useEffect } from "react"
import SEO from "../../components/seo"
import Header from "../../components/header"
import { StickyContainer } from "react-sticky"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import {
  SearchResultHeader,
  ResultWrapper,
  NoResult,
} from "../../components/trip"
import UnAuthResults from "../../components/trip/UnAuthResult"

import { Road } from "assets/svg"
import {
  searchTripsRequest,
  resetTrips,
  setTrip,
} from "../../store/actions/trips"
import { navigate } from "gatsby"
import moment from "moment"
import { extractTerminalName } from "../../lib"
import { toast } from "react-toastify"

const SearchResult = props => {
  const stateExtractor = ({
    trips: {
      data: searchResult,
      loading,
      searchData: {
        returnTimestamp: departureTimestamp,
        departureTerminalId,
        arrivalTerminalId,
        numberOfTravellers,
      },
    },
    terminals: { data: terminals },
  }) => ({
    searchResult,
    loading,
    departureTimestamp,
    departureTerminalId: arrivalTerminalId,
    arrivalTerminalId: departureTerminalId,
    terminals,
    numberOfTravellers,
  })

  const dispatch = useDispatch()

  const {
    searchResult,
    loading,
    departureTimestamp,
    departureTerminalId,
    arrivalTerminalId,
    terminals,
    numberOfTravellers,
  } = useSelector(stateExtractor, shallowEqual)

  useEffect(() => {
    try {
      dispatch(resetTrips({ data: [] }))
      dispatch(searchTripsRequest({ departureTerminalId, arrivalTerminalId }))
    } catch (error) {
      toast.error("Can not search for trips at the moment")
    }

    if (!departureTerminalId.length) {
      navigate("/trip/results")
      return null
    }
  }, [dispatch, departureTerminalId, arrivalTerminalId])

  const handleSubmit = data => {
    dispatch(setTrip(data, "returnTrip"))
    return navigate("/trip/book/passengers-details")
  }

  return (
    <StickyContainer {...props}>
      <SEO title="Return Trips" />
      <Header />
      <SearchResultHeader
        header={`Showing trips from ${extractTerminalName(
          terminals,
          departureTerminalId
        )} to ${extractTerminalName(terminals, arrivalTerminalId)}`}
        date={moment(departureTimestamp).format("DD MM, YYYY")}
        btnOnClick={() => navigate("/")}
      />
      <ResultWrapper>
        {searchResult.length <= 0 && !loading && (
          <NoResult
            svg={Road}
            header="There are no trips available at this time."
            text="You can contact support for help with making your booking at an available time."
          />
        )}

        {searchResult.length >= 1 &&
          searchResult.map((item, index) => {
            return (
              <UnAuthResults
                key={index}
                data={item}
                numberOfTravellers={numberOfTravellers}
                onContinue={handleSubmit}
              />
            )
          })}
        {loading &&
          Array(3)
            .fill(1)
            .map((item, index) => <UnAuthResults key={item + index} loading />)}
      </ResultWrapper>
    </StickyContainer>
  )
}

export default SearchResult

import React, { useEffect } from "react"
import { AuthenticatedLayout } from "components/layout"
import SEO from "../../components/seo"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import {
  SearchResultHeader,
  ResultWrapper,
  NoResult,
  Results,
} from "../../components/trip"
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
        bookingType,
        departureTimestamp,
        departureTerminalId,
        arrivalTerminalId,
        numberOfTravellers,
      },
    },
    terminals: { data: terminals },
  }) => ({
    searchResult,
    loading,
    bookingType,
    departureTimestamp,
    departureTerminalId,
    arrivalTerminalId,
    terminals,
    numberOfTravellers,
  })

  const dispatch = useDispatch()

  const {
    searchResult,
    loading,
    bookingType,
    departureTimestamp,
    departureTerminalId,
    arrivalTerminalId,
    terminals,
    numberOfTravellers,
  } = useSelector(stateExtractor, shallowEqual)

  useEffect(() => {
    try {
      dispatch(resetTrips({ data: [] }))
      dispatch(searchTripsRequest())
    } catch (error) {
      toast.error("Can not search for trips at the moment")
    }

    if (!departureTerminalId.length) {
      navigate("../")
      return null
    }
  }, [dispatch, departureTerminalId])

  const handleSubmit = data => {
    dispatch(setTrip(data, "outgoingTrip"))
    if (bookingType === "one_way") {
      return navigate("/trip/book/passengers-details")
    } else if (bookingType === "round_trip") {
      return navigate("/trip/return-trips")
    }
  }

  return (
    <AuthenticatedLayout {...props}>
      <SEO title="Trip Search Result" />
      <SearchResultHeader
        header={`Showing trips from ${extractTerminalName(
          terminals,
          departureTerminalId
        )} to ${extractTerminalName(terminals, arrivalTerminalId)}`}
        date={moment(departureTimestamp).format("MMMM D, YYYY")}
        btnOnClick={() => navigate("../")}
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
              <Results
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
            .map((item, index) => <Results key={item + index} loading />)}
      </ResultWrapper>
    </AuthenticatedLayout>
  )
}

export default SearchResult

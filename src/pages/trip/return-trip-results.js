import React, { Fragment } from "react"
import { AuthenticatedLayout } from "components/layout"
import SEO from "../../components/seo"
import {
  SearchResultHeader,
  ResultWrapper,
  NoResult,
  ReturnResults,
} from "../../components/trip"
import { Road } from "assets/svg"

const SearchResult = props => (
  <AuthenticatedLayout {...props}>
    <SEO title="Return Trip Result" />
    <SearchResultHeader header="Showing return trips from Lagos to Benin" />
    <ResultWrapper>
      {false && (
        <NoResult
          svg={Road}
          header="There are no trips available at this time."
          text="You can contact support for help with making your booking at an available time."
        />
      )}
      {true && (
        <Fragment>
          <ReturnResults />
          <ReturnResults />
          <ReturnResults />
        </Fragment>
      )}
    </ResultWrapper>
  </AuthenticatedLayout>
)

export default SearchResult

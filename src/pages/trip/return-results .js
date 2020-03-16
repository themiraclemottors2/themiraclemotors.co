import React, { Fragment } from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import {
  SearchResultHeader,
  ResultWrapper,
  NoResult,
  ReturnResults,
} from "../../components/trip"

const SearchResult = props => (
  <Layout {...props}>
    <SEO title="Return Trip Result" />
    <SearchResultHeader header="Showing return trips from Lagos to Benin" />
    <ResultWrapper>
      {false && <NoResult />}
      {true && (
        <Fragment>
          <ReturnResults />
          <ReturnResults />
          <ReturnResults />
        </Fragment>
      )}
    </ResultWrapper>
  </Layout>
)

export default SearchResult

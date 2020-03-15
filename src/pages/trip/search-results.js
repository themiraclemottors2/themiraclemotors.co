import React, { Fragment } from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import {
  SearchResultHeader,
  ResultWrapper,
  NoResult,
  Results,
} from "../../components/trip"

const SearchResult = props => (
  <Layout {...props}>
    <SEO title="Trip Search Result" />
    <SearchResultHeader header="Showing trips from Benin to Lagos" />
    <ResultWrapper>
      {false && <NoResult />}
      {true && (
        <Fragment>
          <Results />
          <Results />
          <Results />
        </Fragment>
      )}
    </ResultWrapper>
  </Layout>
)

export default SearchResult

import React, { Fragment } from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import {
  SearchResultHeader,
  ResultWrapper,
  NoResult,
  Results,
} from "../../components/trip"
import { Road } from "assets/svg"

const SearchResult = props => (
  <Layout {...props}>
    <SEO title="Trip Search Result" />
    <SearchResultHeader header="Showing trips from Benin to Lagos" />
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
          <Results />
          <Results />
          <Results />
        </Fragment>
      )}
    </ResultWrapper>
  </Layout>
)

export default SearchResult

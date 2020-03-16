import React, { Fragment, Component } from "react"
import Layout from "components/layout/layout"
import SEO from "components/seo"
import {
  ResultWrapper,
  NoResult,
  Results,
  BookHeader,
  BookSidebar,
  PassengerDetailsContent,
  CompletingBookingContent,
  BookingFooter,
} from "components/trip"

class PassengersDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stage: "details",
      paymentMethod: "card",
    }
  }

  _handleStateChange = ({ state, value }) => {
    return this.setState({
      [state]: value,
    })
  }

  changeStage = stage => {
    return this._handleStateChange("stage", stage)
  }

  changePaymentMethod = method => {
    return this._handleStateChange("paymentMethod", method)
  }

  render() {
    return (
      <Layout {...this.props}>
        <SEO title="Passengers Details" />
        <BookHeader stage="details" />
        <ResultWrapper
          sidebar={<BookSidebar />}
          footer={<BookingFooter buttonText="Pay Now" />}
        >
          {false && <PassengerDetailsContent />}
          {true && <CompletingBookingContent />}
        </ResultWrapper>
      </Layout>
    )
  }
}

export default PassengersDetails

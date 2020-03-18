import React, { Component } from "react"
import Layout from "components/layout/layout"
import SEO from "components/seo"
import {
  ResultWrapper,
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
      stage: 0,
      paymentMethod: "card",
      breadCrumbs: ["Passengers Details", "Complete Booking"],
    }
  }

  _handleStateChange = (state, value) => {
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
    const { breadCrumbs, stage, paymentMethod } = this.state

    return (
      <Layout {...this.props}>
        <SEO title={breadCrumbs[stage]} />
        <BookHeader stage={stage} breadCrumbs={breadCrumbs} />
        <ResultWrapper
          sidebar={<BookSidebar />}
          footer={
            stage === breadCrumbs.length - 1 && (
              <BookingFooter
                buttonText={
                  paymentMethod === "card" ? "Pay Now" : "Finish Booking"
                }
              />
            )
          }
        >
          {stage === 0 && (
            <PassengerDetailsContent onDone={() => this.changeStage(1)} />
          )}
          {stage === 1 && (
            <CompletingBookingContent
              paymentMethod={paymentMethod}
              changePaymentMethod={this.changePaymentMethod}
            />
          )}
        </ResultWrapper>
      </Layout>
    )
  }
}

export default PassengersDetails

import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { AuthLayout, PasswordResetForm } from "../components/auth"

const PasswordReset = props => (
  <Layout {...props}>
    <SEO title="Password Reset" />
    <AuthLayout>
      <PasswordResetForm />
    </AuthLayout>
  </Layout>
)

export default PasswordReset

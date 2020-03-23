import React from "react"
import { UnauthenticatedLayout } from "components/layout"
import SEO from "../components/seo"
import { AuthLayout, PasswordResetForm } from "../components/auth"

const PasswordReset = props => (
  <UnauthenticatedLayout {...props}>
    <SEO title="Password Reset" />
    <AuthLayout>
      <PasswordResetForm />
    </AuthLayout>
  </UnauthenticatedLayout>
)

export default PasswordReset

import React from "react"
import { UnauthenticatedLayout } from "components/layout"
import SEO from "../components/seo"
import { AuthLayout, RegisterForm } from "../components/auth"

const Register = props => (
  <UnauthenticatedLayout {...props}>
    <SEO title="Sign In" />
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  </UnauthenticatedLayout>
)

export default Register

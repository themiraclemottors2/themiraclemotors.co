import React from "react"
import { UnauthenticatedLayout } from "components/layout"
import SEO from "../components/seo"
import { AuthLayout, SignInForm } from "../components/auth"

const SignIn = props => (
  <UnauthenticatedLayout {...props}>
    <SEO title="Sign In" />
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  </UnauthenticatedLayout>
)

export default SignIn

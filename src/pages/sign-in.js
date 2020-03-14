import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { AuthLayout, SignInForm } from "../components/auth"

const SignIn = props => (
  <Layout {...props}>
    <SEO title="Sign In" />
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  </Layout>
)

export default SignIn

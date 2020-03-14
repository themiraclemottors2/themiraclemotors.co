import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { AuthLayout, RegisterForm } from "../components/auth"

const Register = props => (
  <Layout {...props}>
    <SEO title="Sign In" />
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  </Layout>
)

export default Register

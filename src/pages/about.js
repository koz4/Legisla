import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
const AboutPage = () => (
    <Layout>
    <SEO title="About" />
  <main>
    <h1>About the Author</h1>
    <p>Welcome to my Gatsby site.</p>
  </main>
  <Link to="/">Go back to the homepage</Link>
  </Layout>
)
export default AboutPage
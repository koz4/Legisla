import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"



const AddAktPage = ({data}) => (
    <Layout>
    <SEO title="Dodaj Akt" />
  <main>
  <form>
        <label>
          Nazwa
          <input type="text" name="firstName" />
        </label>
        <label>
          Opis
          <input type="text" name="lastName" />
        </label>
        <label>
          Typ
          <input type="text" name="lastName" />
        </label>
        <label>
          Data
          <input type="text" name="lastName" />
        </label>
        <label>
          Link
          <input type="text" name="lastName" />
        </label>
        <button type="submit">Submit</button>
      </form>
  </main>
  <Link to="/">Go back to the homepage</Link>
  </Layout>
)
export default AddAktPage

import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
query list {
    legisla {
      listAktys {
        items {
          id
          name
          type
          description
          date
          link
        }
      }
    }
  }`

const ListaAktyPage = ({data}) => (
    <Layout>
    <SEO title="Lista Aktów" />
  <main>
    <h1>Lista nowo uchwalonych Aktów</h1>
    {
        data.legisla.listAktys.items.map((item, index) =>(
        <div>
        <a href={item.link}><h2>{item.name}</h2></a> 
        <p>{item.description}</p> 
        <p>{item.type}</p> 
        </div>
        ))
    }
   
  </main>
  <Link to="/">Go back to the homepage</Link>
  </Layout>
)
export default ListaAktyPage








  
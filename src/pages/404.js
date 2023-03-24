import { graphql } from "gatsby"
import React from "react"

import SEO from "../components/seo"
import Layout from "../templates/layout"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteDescription = data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteDescription}>
        <SEO title="Oops, couldn't find that article" date="2020-01-13" />
        <h1>Not Found</h1>
        <p>You just hit a page that doesn&#39;t exist... the sadness.</p>
        <p>
          Hopefully, you should find what you're looking for{" "}
          <a href="../">on the home page</a>!
        </p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`

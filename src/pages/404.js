import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteDescription = data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteDescription}>
        <SEO title="Oops, couldn't find that article" />
        <h1>Not Found</h1>
        <p>You just hit a page that doesn&#39;t exist... the sadness.</p>
        {/* TODO: add list of latest articles */}
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

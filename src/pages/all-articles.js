import { graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import Bio from "../components/bio"
import SEO from "../components/seo"
import Layout from "../templates/layout"
import { rhythm } from "../utils/typography"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteDescription = data.site.siteMetadata.description
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} description={siteDescription}>
        <SEO
          date="2020-01-13"
          title="Understand Legacy Code (all articles)"
          description={siteDescription}
          keywords={[
            "legacy code",
            "technical debt",
            "refactoring",
            "documentation",
          ]}
        />
        <h2>
          <span role="img" aria-label="Lightbulb">
            💡
          </span>{" "}
          All articles
        </h2>
        <Ul>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Li key={node.fields.slug}>
                <LargeLink to={`blog${node.fields.slug}`}>{title}</LargeLink>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </Li>
            )
          })}
        </Ul>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
      </Layout>
    )
  }
}

const Li = styled.li`
  &&::before {
    top: 16px;
  }
`

const Ul = styled.ul`
  margin: "20px 0 40px";
`

const LargeLink = props => <Link style={{ fontSize: "21px" }} {...props} />

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

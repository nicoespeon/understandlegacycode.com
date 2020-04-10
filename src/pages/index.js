import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import CTA from "../components/cta"
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
          title="Understand Legacy Code"
          description={siteDescription}
          keywords={[
            "legacy code",
            "technical debt",
            "refactoring",
            "documentation",
          ]}
        />
        <CTA />
        <h2>Helpful Guides</h2>
        <ul style={{ margin: "20px 0 40px" }}>
          <Li key="getting-into-large-codebase">
            <Link
              style={{ fontSize: "21px" }}
              to={`getting-into-large-codebase`}
            >
              Getting into a large codebase
            </Link>
            <p>
              Diving into a large, undocumented codebase is overwhelming. Let's
              see some techniques to approach it.
            </p>
          </Li>
          <Li key="best-practice-or-code-smell">
            <Link
              style={{ fontSize: "21px" }}
              to={`best-practice-or-code-smell`}
            >
              Is it a best practice or a code smell?
            </Link>
            <p>
              Not sure if a pattern will make the code more maintainable? Here
              are a few resources that will help.
            </p>
          </Li>
          <Li key="approval-tests">
            <Link style={{ fontSize: "21px" }} to={`approval-tests`}>
              Approval Testing
            </Link>
            <p>
              Techniques to quickly put Legacy Code under tests, so you can
              refactor it safely.
            </p>
          </Li>
        </ul>
        <h2>Latest articles</h2>
        <ul style={{ margin: "20px 0 40px" }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Li key={node.fields.slug}>
                <Link
                  style={{ fontSize: "21px" }}
                  to={`blog${node.fields.slug}`}
                >
                  {title}
                </Link>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </Li>
            )
          })}
        </ul>
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

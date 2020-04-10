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
        <h2>📖 Helpful Guides</h2>
        <Ul>
          <Li key="getting-into-large-codebase">
            <LargeLink to={`getting-into-large-codebase`}>
              Getting into a large codebase
            </LargeLink>
            <p>
              Diving into a large, undocumented codebase is overwhelming. Let's
              see some techniques to approach it.
            </p>
          </Li>
          <Li key="best-practice-or-code-smell">
            <LargeLink to={`best-practice-or-code-smell`}>
              Is it a best practice or a code smell?
            </LargeLink>
            <p>
              Not sure if a pattern will make the code more maintainable? Here
              are a few resources that will help.
            </p>
          </Li>
          <Li key="approval-tests">
            <LargeLink to={`approval-tests`}>Approval Testing</LargeLink>
            <p>
              Techniques to quickly put Legacy Code under tests, so you can
              refactor it safely.
            </p>
          </Li>
          <Li key="code-feels-impossible-to-maintain">
            <LargeLink to={`code-feels-impossible-to-maintain`}>
              Code feels impossible to maintain
            </LargeLink>
            <p>
              Sometimes, you seem to hit a point of no return and that the best
              strategy would be to burn it all and start over. Are there
              alternatives?
            </p>
          </Li>
        </Ul>
        <h2>💡 Latest articles</h2>
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

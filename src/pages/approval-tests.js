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
          title="Approval Tests"
          keywords={[
            `legacy code`,
            `approval tests`,
            `characterization tests`,
            `snapshot tests`,
            `golden master`,
          ]}
        />
        <h2>I need to change this code, but it has no tests! 🙀</h2>
        <p>
          <a
            href="https://github.com/nicoespeon/talk-how-to-change-untested-code/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slides
          </a>
        </p>
        <h3>Related blog posts</h3>
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
        <CTA />
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
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: ["approval tests"] } } }
    ) {
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
            tags
          }
        }
      }
    }
  }
`

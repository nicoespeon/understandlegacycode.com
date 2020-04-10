import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import CTA from "../components/cta"
import Title from "../components/title"
import { rhythm } from "../utils/typography"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteDescription = data.site.siteMetadata.description
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} description={siteDescription}>
        <SEO
          title="Is it a best practice or a code smell?"
          description="Not sure if a pattern will make the code more maintainable? Here are a few resources that will help."
          date="2020-04-10"
          slug="/best-practice-or-code-smell"
          keywords={["legacy code", "code smell", "design pattern", "refactor"]}
        />

        <Title>Is it a best practice or a code smell?</Title>
        <p>
          There are plenty of patterns you can apply to code to make it more
          maintainable.
        </p>
        <p>
          But sometimes, it's hard to see what are the actual benefits of these
          patterns. Will they actually make the code easier to change? Aren't
          you just trading a complexity for another?
        </p>
        <p>
          If you feel confused about what direction to take to address technical
          debt, here are a few resources that will help.
        </p>
        <h2>
          <span role="img" aria-label="mortar board">
            🎓
          </span>
          &nbsp;Related articles
        </h2>
        <ul style={{ margin: "20px 0 40px" }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Li key={node.fields.slug}>
                <Link
                  style={{ fontSize: "19px" }}
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
      filter: {
        frontmatter: { tags: { in: ["best practice or code smell?"] } }
      }
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

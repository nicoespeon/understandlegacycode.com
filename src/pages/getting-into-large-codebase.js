import React from "react"
import { graphql } from "gatsby"

import Guide from "../components/guide"
import SEO from "../components/seo"
import Title from "../components/title"

function Page(props) {
  return (
    <Guide {...props}>
      <SEO
        title="Getting into a large codebase"
        description="Diving into a large, undocumented codebase is overwhelming. Let's see some techniques to approach it."
        date="2020-04-10"
        slug="/getting-into-large-codebase"
        keywords={["legacy code", "large codebase"]}
      />
      <Title>Getting into a large codebase</Title>
      <p>
        When you have to dive into a large codebase, it's challenging to know
        when to start.
      </p>
      <p>
        Feeling overwhelmed is normal. Most of the time, the original developers
        are long gone, there's no or poor documentation and let's not talk about
        tests…
      </p>
      <p>Here are a few approaches to make sense out of Legacy Code.</p>
    </Guide>
  )
}

export default Page

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
        frontmatter: { tags: { in: ["getting into a large codebase"] } }
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

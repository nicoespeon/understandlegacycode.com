import React from "react"
import { graphql } from "gatsby"

import Guide from "../components/guide"
import SEO from "../components/seo"
import Title from "../components/title"

function Page(props) {
  return (
    <Guide {...props}>
      <SEO
        title="Code feels impossible to maintain"
        description="Sometimes, you seem to hit a point of no return and that the best strategy would be to burn it all and start over. Are there alternatives?"
        date="2020-04-10"
        slug="/code-feels-impossible-to-maintain"
        keywords={[
          "legacy code",
          "large codebase",
          "strangler pattern",
          "greenfield",
        ]}
      />
      <Title>Code feels impossible to maintain</Title>
      <p>At some point, you can feel like you hit a point of no return.</p>
      <p>
        The codebase is so big, with so many issues that it's just impossible to
        do anything! It's really tempting to just trash it and start over… But
        is it the best thing to do? What else can you do?
      </p>
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
        frontmatter: { tags: { in: ["code feels impossible to maintain"] } }
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

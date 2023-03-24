import { graphql } from "gatsby"
import React from "react"

import SEO from "../components/seo"
import Title from "../components/title"
import Guide from "../templates/guide"

function Page(props) {
  return (
    <Guide {...props}>
      <SEO
        title="Changing untested code, without breaking it"
        description="Without tests, every code change is risky. But how to put tests on a code that wasn't design for it?"
        date="2020-04-10"
        slug="/changing-untested-code"
        keywords={["legacy code", "tests", "approval tests"]}
      />
      <Title>Changing untested code, without breaking it</Title>
      <p>
        In general, Legacy Code was not designed to be testable. Putting the
        existing codebase into a test suite is a very challenging step.
      </p>
      <p>
        Problem is: without tests, every code change is risky. How do you know
        if you broke something?
      </p>
      <p>
        Let's see what can get in the way and how you can solve every obstacle.
        Let's put some automated tests on your codebase!
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
      filter: { frontmatter: { tags: { in: ["changing untested code"] } } }
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

import { graphql } from "gatsby"
import React from "react"

import SEO from "../components/seo"
import Title from "../components/title"
import Guide from "../templates/guide"

function Page(props) {
  return (
    <Guide {...props}>
      <SEO
        title="Making others care about refactoring"
        description="What you can do when it seems that no-one cares about the technical debt that's piling up."
        date="2020-04-10"
        slug="/getting-into-large-codebase"
        keywords={["legacy code", "management", "refactoring"]}
      />
      <Title>Making others care about refactoring</Title>
      <p>
        Do you feel like you're working with a dumpster fire, but no-one cares?
      </p>
      <p>
        Like many things in programming, the real problem is not technical, it's
        people.
      </p>
      <p>
        Management doesn't seem interesting in fixing what's already there? How
        can clients understand benefits of cleaning the codebase? Co-workers
        quit or act like they just don't care?
      </p>
      <p>Let's see what you can do.</p>
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
      filter: { frontmatter: { tags: { in: ["making others care about it"] } } }
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

import React from "react"
import { graphql } from "gatsby"

import Guide from "../templates/guide"
import SEO from "../components/seo"
import Title from "../components/title"

function Page(props) {
  return (
    <Guide {...props}>
      <SEO
        title="AI Support"
        description="How Artificial Intelligence can help you analyze a large codebase"
        date="2023-12-04"
        slug="/ai-support"
        keywords={[
          "legacy code",
          "ai",
          "artificial intelligence",
          "chatGPT",
          "copilot",
        ]}
      />
      <Title>AI Support</Title>
      <blockquote>
        <p>Can AI help me tame legacy codebases?</p>
      </blockquote>
      <p>
        With the development of AI and the rise of ChatGPT, this is a relevant
        question to ask. Sure, it can generate new code you have to maintain.
        But can it help you maintain existing code?
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
      filter: { frontmatter: { tags: { in: ["ai"] } } }
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

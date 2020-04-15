import React from "react"

import Guide from "../components/guide"
import SEO from "../components/seo"
import Title from "../components/title"

function Page(props) {
  return (
    <Guide {...props}>
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
        patterns. Will they actually make the code easier to change? Aren't you
        just trading a complexity for another?
      </p>
      <p>
        If you feel confused about what direction to take to address technical
        debt, here are a few resources that will help.
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
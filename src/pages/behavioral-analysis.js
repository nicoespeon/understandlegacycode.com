import React from "react"
import { graphql } from "gatsby"

import Guide from "../components/guide"
import SEO from "../components/seo"
import ExtLink from "../components/ext-link"
import Title from "../components/title"

function Page(props) {
  return (
    <Guide {...props}>
      <SEO
        title="Behavioral Analysis"
        description="A technique to get insights from large codebases, using VCS information"
        date="2020-07-01"
        slug="/behavioral-analysis"
        keywords={[
          "legacy code",
          "behavioral analysis",
          "hotspots",
          "technical debt",
          "change coupling",
        ]}
      />
      <Title>Behavioral Analysis</Title>
      <blockquote>
        <p>How do you analyze a very large Legacy codebase?</p>
      </blockquote>
      <p>
        If you're using a Version Control System (VCS), you're sitting on a gold
        mine! You can leverage it to get useful insights from any codebase,
        based on <em>how</em> people interact with it.
      </p>
      <p>This approach has been detailed by Adam Tornhill in his books:</p>
      <ul>
        <li>
          <ExtLink href="https://www.google.com/search?q=your+code+as+a+crime+scene">
            Your Code as a Crime Scene
          </ExtLink>
        </li>
        <li>
          <ExtLink href="https://www.google.com/search?q=software+design+x-rays">
            Software Design X-Rays
          </ExtLink>
        </li>
      </ul>
      <p>There are many information you can get from Behavioral Analysis:</p>
      <ol>
        <li>Identify Hotspots and prioritize Tech Debt</li>
        <li>Find actual code duplication</li>
        <li>Proactively detect potential bugs, based on empirical behavior</li>
        <li>Prioritize knowledge transfer</li>
        <li>Spot coordination bottlenecks</li>
        <li>
          Find misalignments between your organization and software architecture
        </li>
      </ol>
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
      filter: { frontmatter: { tags: { in: ["behavioral analysis"] } } }
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

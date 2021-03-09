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
        title="Dependency Graphs"
        description="A technique to understand the structure of a codebase"
        date="2021-03-08"
        slug="/dependency-graphs"
        keywords={[
          "dependency graphs",
          "dependencies",
          "software architecture",
        ]}
      />
      <Title>Draw Dependency Graphs</Title>
      <p>
        A dependency graph is a directed graph that represents the dependencies
        of several objects towards each other. There are different flavors of
        such graphs.
      </p>
      <p>
        The main question you need to answer is:{" "}
        <em>if I touch this, what else would be impacted?</em>
      </p>
      <p>
        You can generate these graphs with a pen and a paper. Automated tools
        may be helpful but are usually cluttered with noise. Don't underestimate
        the low-tech approach to get started!
      </p>
      <p>
        Techniques like the Mikado Method leverages such graphs. Concretely, it
        makes you discover the graph of <em>tasks</em> that needs to be
        completed before you can achieve your main goal.
      </p>

      <h2>
        <span role="img" aria-label="toolbox">
          🧰
        </span>
        &nbsp;Tools to draw them manually
      </h2>
      <ul>
        <li>
          <ExtLink href="https://mermaid-js.github.io/mermaid-live-editor/#/edit">
            Mermaid online editor
          </ExtLink>{" "}
          is really good
        </li>
        <li>
          <ExtLink href="https://playground.diagram.codes/d/graph">
            diagrams.code playground
          </ExtLink>{" "}
          is very smooth to use, but can feel more restricted
        </li>
        <li>
          <ExtLink href="https://www.lucidchart.com/">Lucidchart</ExtLink> might
          be helpful, although I recommend not spending too much energy in the
          layout—unless you are creating it for documentation purpose.
        </li>
      </ul>

      <h2>
        <span role="img" aria-label="toolbox">
          🤖
        </span>
        &nbsp;Tools to draw them automatically
      </h2>
      <ul>
        <li>
          <ExtLink href="https://github.com/glato/emerge">emerge</ExtLink>{" "}
          covers many languages—I'm contributing to this one!
        </li>
        <li>
          <ExtLink href="https://www.ndepend.com/">NDepend</ExtLink> for .NET
          developers
        </li>
        <li>
          <ExtLink href="https://github.com/sensiolabs-de/deptrac">
            deptrac
          </ExtLink>{" "}
          for PHP developers
        </li>
        <li>
          <ExtLink href="https://github.com/thebjorn/pydeps">pydeps</ExtLink>{" "}
          for Python developers
        </li>
        <li>
          <ExtLink href="https://github.com/emad-elsaid/rubrowser">
            rubrowser
          </ExtLink>{" "}
          for Ruby developers
        </li>
        <li>
          <ExtLink href="https://github.com/pahen/madge">madge</ExtLink> for
          JavaScript developers
        </li>
      </ul>
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
      filter: { frontmatter: { tags: { in: ["dependency graph"] } } }
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

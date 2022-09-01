import { graphql } from "gatsby"
import React from "react"

import ExtLink from "../components/ext-link"
import Guide from "../components/guide"
import SEO from "../components/seo"
import Title from "../components/title"

function Page(props) {
  return (
    <Guide {...props}>
      <SEO
        title="Types at the edges of your system"
        description="Your TypeScript codebase has blind spots. Here is how to find and fix them!"
        date="2022-09-01"
        slug="/typing-the-edges"
        keywords={[
          "legacy code",
          "typescript",
          "static types",
          "api",
          "databases",
        ]}
      />
      <Title>Types at the edges of your system</Title>
      <blockquote>
        <p>Find and fix your TypeScript blind spots</p>
      </blockquote>
      <p>😃 Coding with TypeScript feels safe, the compiler has your back.</p>
      <p>
        😨 But today, you got a critical issue in prod: payments are failing! A
        quick check of the logs left you puzzled:{" "}
        <code>TypeError: discount.toFixed is not a function</code>.
      </p>
      <p>
        😕 Wait… Isn't <code>discount</code> supposed to be a number here? How
        did that happen? Why didn't TS catch it before?! Worry no more.
      </p>
      <p>
        🤠 In this talk, I will show you where your blind spots are, and a
        simple way for you to fix them.
      </p>

      <p style={{ textAlign: "center" }}>
        <img
          src="/assets/typing-the-edges.png"
          alt="Mazda head units got bricked by a local NPR station in Seattle in February 2022. Better validation at the edges would have save them a lot of trouble (and money)."
        />
      </p>

      <h2>
        <span role="img" aria-label="toolbox">
          🧰
        </span>
        &nbsp;Resources
      </h2>
      <ul>
        <li>
          <ExtLink href="https://understandlegacycode.com/assets/talks/types-at-the-edges-of-your-system.pdf">
            Slides of my talk
          </ExtLink>
        </li>
        <li>
          <ExtLink href="https://stackoverflow.com/a/50647536">
            Why <code>array[0]</code> doesn't return <code>T | undefined</code>{" "}
            by default?
          </ExtLink>
        </li>
        <li>
          <ExtLink href="https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/">
            Parse, Don't Validate
          </ExtLink>
        </li>
        <li>
          <ExtLink href="https://www.jonmellman.com/posts/typescript-for-api-contracts">
            Advanced TypeScript Patterns: API Contracts
          </ExtLink>
        </li>
        <li>
          <ExtLink href="https://www.youtube.com/watch?v=rY_XqfSHock">
            Fixing TypeScript's Blindspots: Runtime Typechecking
          </ExtLink>
        </li>
        <li>
          <ExtLink href="https://github.com/colinhacks/zod">
            colinhacks/zod
          </ExtLink>{" "}
          the TypeScript-first schema validation with static type inference
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
      filter: { frontmatter: { tags: { in: ["typescript"] } } }
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

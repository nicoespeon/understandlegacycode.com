import { graphql } from "gatsby"
import React from "react"

import ExtLink from "../components/ext-link"
import SEO from "../components/seo"
import Title from "../components/title"
import Guide from "../templates/guide"

function Page(props) {
  return (
    <Guide {...props}>
      <SEO
        title="Approval Tests"
        description="A technique to quickly put Legacy Code under tests, so you can refactor it"
        date="2020-02-27"
        slug="/approval-tests"
        keywords={[
          "legacy code",
          "approval tests",
          "characterization tests",
          "snapshot tests",
          "golden master",
        ]}
      />
      <Title>Approval Testing</Title>
      <blockquote>
        <p>I need to change this code, but it has no test!</p>
      </blockquote>
      <p>
        This is the title of a talk I gave at{" "}
        <ExtLink href="https://confoo.ca/en/yul2020/session/i-need-to-change-this-code-but-it-has-no-test">
          ConFoo 2020
        </ExtLink>
        . Can you relate?
      </p>
      <p>I present a technique known under different names:</p>
      <ul>
        <li>Approval Tests</li>
        <li>Characterization Tests</li>
        <li>Golden Master</li>
        <li>Snapshot Tests</li>
        <li>Locking Tests</li>
        <li>Regression Tests</li>
      </ul>
      <p>
        The purpose of the technique is to{" "}
        <strong>capture the existing behavior of system</strong> to create{" "}
        <strong>regression tests</strong> that will tell you if it changes.
      </p>
      <p>
        It's used to <strong>quickly put Legacy Code under tests</strong> so you
        can refactor it safely.
      </p>

      <h2>
        <span role="img" aria-label="open book">
          📖
        </span>
        &nbsp;Synopsis
      </h2>
      <p style={{ textAlign: "center" }}>
        <img src="/assets/confoo-2019.jpg" alt="" />
      </p>
      <p>
        Have you ever felt helpless, facing some cryptic code you had to change?
        You know, the kind of code that has no test to tell you if something
        breaks…
      </p>
      <p>
        This is a scenario I frequently faced. And I learned better ways to work
        with such Legacy Code.
      </p>
      <p>
        In this session, I'll show you how to write tests on existing code, even
        when you don't understand what it does. You'll learn how to modify this
        code and know that nothing broke when you’re done.
      </p>

      <h2>
        <span role="img" aria-label="toolbox">
          🧰
        </span>
        &nbsp;Resources
      </h2>
      <ul>
        <li>
          <ExtLink href="https://github.com/nicoespeon/talk-how-to-change-untested-code/">
            Slides of my talk
          </ExtLink>
        </li>
        <li>
          <ExtLink href="https://jestjs.io/">
            Jest, the JavaScript test runner
          </ExtLink>{" "}
          I used in the presentation
        </li>
        <li>
          <ExtLink href="https://www.npmjs.com/package/jest-extended-snapshot">
            jest-extended-snapshot
          </ExtLink>{" "}
          which provides Jest matchers to write Approval Tests
        </li>
        <li>
          <ExtLink href="https://approvaltests.com/">approvaltests.com</ExtLink>{" "}
          which contains resources to do the same if you're not using JavaScript
          and Jest
        </li>
        <li>
          <ExtLink href="https://github.com/nicoespeon/kata-gilded-rose-js">
            My Gilded Rose kata starter
          </ExtLink>{" "}
          in JavaScript. You can find the Approval Tests solution in the
          `approval-testing` branch.
        </li>
        <li>
          <ExtLink href="https://github.com/emilybache/GildedRose-Refactoring-Kata">
            Emily Bache's Gilded Rose kata starter
          </ExtLink>{" "}
          in many, many languages
        </li>
        <li>
          <ExtLink href="https://touca.io/">Touca</ExtLink> is a continuous
          regression testing tool that help you do that!
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
      filter: { frontmatter: { tags: { in: ["approval tests"] } } }
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

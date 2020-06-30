import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import LandingPageLayout from "../components/landing-page-layout"
import SEO from "../components/seo"
import Title from "../components/title"
import { ComingSoonCTA } from "../components/cta"

function Page() {
  return (
    <>
      <LandingPageLayout>
        <SEO
          title="Legacy Code: First Aid Kit"
          description=""
          date="2020-06-19"
          slug="/first-aid-kit"
          keywords={["legacy code", "refactoring", "deadline"]}
        />
        <Title>Should I start refactoring, risking the deadline?</Title>
        <h2>How do you feel about your codebase?</h2>
        <p>
          <strong>Worried</strong>, because you don't know if you'll break
          anything once you release this change you've been working on for a
          week already.
        </p>
        <p>
          <strong>Exhausted</strong>, because everything is such a tangled mess
          that you spend hours looking through 20 classes nesting and calling
          each other just to figure out what happens when you check or uncheck a
          checkbox.
        </p>
        <p>
          <strong>Confused</strong>, because you're not sure the code you're
          reading is even used.
        </p>
        <p>
          <strong>Pissed</strong>, because it takes weeks before you feel safe
          making any changes, and months before you start feeling "at home" in
          the code. Finally, you are tasked to fix a bug on a different part of
          the codebase: the nightmare starts over again.
        </p>
        <h2 class="quote">
          I wish I'd been given more time to refactor this code!
        </h2>
        <p>
          But you have short deadlines. Because the focus is always on cost and
          time. Because users don't care your eyes bleed while reading the code.
        </p>
        <p>
          Your boss doesn't understand <em>why</em> it takes you longer and
          longer to finish tasks.
        </p>
        <p>
          <strong>
            You want to refactor. But would you risk the deadline?
          </strong>{" "}
          So you pile up on Technical Debt, looking for a workaround that would
          get the job done while making the code worse.
        </p>
        <p>
          You know Clean Code would be a breeze to work with… but you don't know
          where to start, and you certainly don't have enough time to get there.
        </p>
        <h2>
          Imagine applying proven recipes to clean up Legacy Code as you go.
        </h2>
        <p>
          What if you had a catalog of techniques to bring your codebase under
          tests?
        </p>
        <p>
          If you know the moves, you can give your code first aid that will stop
          its hemorrhage. Imagine how proud and relieved you'll feel as you put
          it back into a healthier shape.
        </p>
        <p>
          Refactoring would become second nature to you. Your reflexes will make
          you clean up Legacy Code in no time! You'll consistently meet clients'
          expectations and delight your peers.
        </p>
        <p>
          You can start making this codebase a better place — the next time you
          touch it.
        </p>
        <p>
          When you have short deadlines, trying to refactor the code is a risky
          move… unless you know <u>exactly</u> what you're doing.
        </p>
        {/* <h2>Refactor code in no time with my first aid kit.</h2>
        <p>
          Learn 12 moves to get your Legacy Code under control with my e-book.
        </p>
        <ul style={{ marginTop: 0 }}>
          <CheckedLi>Identify what makes code impossible to test.</CheckedLi>
          <CheckedLi>
            Deploy a quick safety net around the code you need to touch.
          </CheckedLi>
          <CheckedLi>Raise up code quality incrementally.</CheckedLi>
          <CheckedLi>Ship anytime!</CheckedLi>
        </ul>{" "}
        <p>
          Screencasts will show you the moves in action. You can get back to
          them when you're in doubt. Use the tools I crafted to assist you and
          automate parts of your refactoring.
        </p>
        <p>
          You'll learn how to concretely start turning a codebase into a
          testable, easy-to-read, well-designed system — while shipping features
          and fixes. 😉🍷
        </p>
        <h2>
          The <span class="highlight">Legacy Code: First Aid Kit</span> is
          designed to give you clear instructions to follow.
        </h2>
        <p>
          Simply start with the next issue you have to work with, buy my kit,
          and you'll finally start making confident changes to your code in no
          time.
        </p> */}
        <h2>
          The <span class="highlight">Legacy Code: First Aid Kit</span> is
          coming soon.
        </h2>
        <p>
          I'm building a toolbox of techniques that will help you get your
          Legacy Code under control.
        </p>
        <p>
          You'll learn how to concretely start turning a codebase into a
          testable, easy-to-read, well-designed system — while shipping features
          and fixes{" "}
          <span role="img" aria-label="Cheers">
            😉🍷
          </span>
        </p>
      </LandingPageLayout>
      <Section>
        <BackgroundDark />
        <ComingSoonCTA />
      </Section>
    </>
  )
}

// const CheckedLi = styled.li`
//   &::before {
//     content: " ✅" !important;
//     background: initial !important;
//     transform: rotate(0) !important;
//     top: 0 !important;
//   }
// `

const Section = styled.div`
  margin-top: 15rem;
  position: relative;

  form {
    margin: -15rem auto 5rem;
    position: relative;
    z-index: 2;
    box-shadow: 0 24px 120px rgba(0, 0, 0, 0.3) !important;
  }

  .formkit-column {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .formkit-header h1 {
    margin: 0 !important;
  }

  .formkit-subheader p {
    margin: 0 !important;
  }
`

const BackgroundDark = styled.div`
  background-color: hsla(280, 95%, 45%, 1);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  margin-top: 15rem;
`

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

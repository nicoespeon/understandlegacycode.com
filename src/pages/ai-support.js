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

      <h2>
        <span role="img" aria-label="camera">
          🎥
        </span>
        &nbsp;Talks
      </h2>
      <ul>
        <li>
          <ExtLink href="https://www.youtube.com/watch?v=iXGBIX8gudE">
            ChatGPT & Copilot are NOT Refactoring Tools
          </ExtLink>{" "}
          is a short explanation from Emily Bache on why AI is technically not a
          refactoring tool.
        </li>
      </ul>
      <h2>
        <span role="img" aria-label="toolbox">
          🧰
        </span>
        &nbsp;Tools
      </h2>
      <p>
        There are many tools popping up around, here are some I want to
        highlight:
      </p>
      <ul>
        <li>
          <ExtLink href="https://www.codium.ai/">CodiumAI</ExtLink> can help you
          generate tests on existing code. I gave them a hand on the VS Code
          extension in early 2023.
        </li>
        <li>
          <ExtLink href="https://marketplace.visualstudio.com/items?itemName=Rubberduck.rubberduck-vscode">
            Rubberduck for VS Code
          </ExtLink>
          . I also contributed to this one. It's an open-source extension that
          can be an helpful assistant.
        </li>
        <li>
          <ExtLink href="https://denigma.app/">Denigma</ExtLink> which seems to
          be really good at explaining what spaghetti code is doing.
        </li>
      </ul>
      <h2>
        <span role="img" aria-label="microscope">
          🔬
        </span>
        &nbsp;Studies
      </h2>
      <p>
        Here are interesting studies related to the usage of AI to deal with
        existing codebases:
      </p>
      <ul>
        <li>
          <ExtLink href="https://codescene.com/hubfs/whitepapers/Refactoring-vs-Refuctoring-Advancing-the-state-of-AI-automated-code-improvements.pdf">
            Refactoring vs. Refuctoring
          </ExtLink>{" "}
          by CodeScene. They figured that LLMs will generally introduce a
          regression when attempting to refactor complex code. But coupled to a
          fact-checking validation step, tooling could leverage these and only
          suggest the ones that actually work. This is promising because it
          would unlock more powerful automated refactorings.
        </li>
        <li>
          <ExtLink href="https://arxiv.org/pdf/2312.12450.pdf">
            Can It Edit? Evaluating the Ability of Large Language Models to
            Follow Code Editing Instructions.
          </ExtLink>
          This one concludes that it's a good idea to train models on the
          codebase commits. Also, closed and distilled models seem to be doing a
          better job than open ones. Finally, the more specific the
          instructions, the better.
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

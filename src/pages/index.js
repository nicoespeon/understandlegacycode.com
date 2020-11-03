import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import CTA from "../components/cta"
import { rhythm, colors } from "../utils/typography"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteDescription = data.site.siteMetadata.description
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} description={siteDescription}>
        <SEO
          date="2020-01-13"
          title="Understand Legacy Code"
          description={siteDescription}
          keywords={[
            "legacy code",
            "technical debt",
            "refactoring",
            "documentation",
          ]}
        />
        <Callout>
          Frustrated of not having enough time to refactor Legacy Code?
          <br />
          <span role="img" aria-label="Rescue Worker Helmet">
            ⛑
          </span>{" "}
          I'm building up{" "}
          <strong>
            <Link to={`first-aid-kit`}>
              a kit to help you rescue your codebase
            </Link>
            !
          </strong>
        </Callout>
        <p>
          When I say "Legacy Code" I mean{" "}
          <Link to={"/blog/what-is-legacy-code-is-it-code-without-tests/"}>
            valuable code you're afraid to change
          </Link>
          .
        </p>
        <p>We all have to deal with Legacy Code. But it's damn hard to!</p>
        <p>
          Here you'll find answers to your questions. I'm sharing{" "}
          <strong>useful tips and concrete advice</strong> that will help you
          tame the legacy codebase you've inherited.
        </p>
        <CTA />
        <h2>
          <span role="img" aria-label="Open book">
            📖
          </span>{" "}
          Helpful Guides
        </h2>
        <Ul>
          <Li key="getting-into-large-codebase">
            <LargeLink to={`getting-into-large-codebase`}>
              Getting into a large codebase
            </LargeLink>
            <p>
              Diving into a large, undocumented codebase is overwhelming. Let's
              see some techniques to approach it.
            </p>
          </Li>
          <Li key="best-practice-or-code-smell">
            <LargeLink to={`best-practice-or-code-smell`}>
              Is it a best practice or a code smell?
            </LargeLink>
            <p>
              Not sure if a pattern will make the code more maintainable? Here
              are a few resources that will help.
            </p>
          </Li>
          <Li key="changing-untested-code">
            <LargeLink to={`changing-untested-code`}>
              Changing untested code without breaking it
            </LargeLink>
            <p>
              Without tests, every code change is risky. But how to put tests on
              a code that wasn't design for it?
            </p>
          </Li>
          <Li key="code-feels-impossible-to-maintain">
            <LargeLink to={`code-feels-impossible-to-maintain`}>
              Code feels impossible to maintain
            </LargeLink>
            <p>
              Sometimes, you seem to hit a point of no return and that the best
              strategy would be to burn it all and start over. Are there
              alternatives?
            </p>
          </Li>
          <Li key="making-others−care-about-it">
            <LargeLink to={`making-others−care-about-it`}>
              Making others care about it
            </LargeLink>
            <p>
              What you can do when it seems that no-one cares about the
              technical debt that's piling up.
            </p>
          </Li>
        </Ul>
        <h2>
          <span role="img" aria-label="Kimono">
            🥋
          </span>{" "}
          Specific techniques
        </h2>
        <Ul>
          <Li key="approval-tests">
            <LargeLink to={`approval-tests`}>Approval Testing</LargeLink>
            <p>
              A technique to quickly put tests on Legacy Code, so you can
              refactor safely.
            </p>
          </Li>
          <Li key="behavioral-analysis">
            <LargeLink to={`behavioral-analysis`}>
              Behavioral Analysis
            </LargeLink>
            <p>
              A technique to get insights from large codebases, using VCS
              information.
            </p>
          </Li>
        </Ul>
        <h2>
          <span role="img" aria-label="Lightbulb">
            💡
          </span>{" "}
          Latest articles
        </h2>
        <Ul>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Li key={node.fields.slug}>
                <LargeLink to={`blog${node.fields.slug}`}>{title}</LargeLink>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </Li>
            )
          })}
          <Li key="all-articles">
            If you want more, check{" "}
            <Link to={`all-articles`}>all my published articles</Link>
          </Li>
        </Ul>
        <h2>
          <span role="img" aria-label="Headphones">
            🎧
          </span>{" "}
          Podcasts
        </h2>
        <Ul>
          <Li key="rails-with-jason">
            <LargeExternalLink to="https://www.codewithjason.com/rails-with-jason-podcast/nicolas-carlo/">
              Tips for Working with Legacy Code
            </LargeExternalLink>
            <p>
              I talk with Jason Swett about working with legacy code, adding
              tests to legacy code, how to safely make changes to legacy
              applications, and more.
            </p>
          </Li>
          <Li key="maintainable">
            <LargeExternalLink to="https://maintainable.fm/episodes/nicolas-carlo-changing-messy-software-without-breaking-it">
              Changing Messy Software Without Breaking It
            </LargeExternalLink>
            <p>
              I talk with Robby Russell about practices like feature toggling or
              sustainability weeks to work on improving things. I also give
              advice for listeners who struggle to get stakeholder buy-in on
              dealing with technical debt challenges.
            </p>
          </Li>
        </Ul>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
      </Layout>
    )
  }
}

const Li = styled.li`
  &&::before {
    top: 16px;
  }
`

const Ul = styled.ul`
  margin: "20px 0 40px";
`

const Callout = styled.div`
  margin: 3rem 0;
  padding: 1rem;
  border: 3px ${colors.primary} solid;
  background: ${colors.backgroundLightest};
`

const LargeLink = props => <Link style={{ fontSize: "21px" }} {...props} />
const LargeExternalLink = props => (
  <a
    style={{ fontSize: "21px" }}
    href={props.to}
    target="_blank"
    rel="noopener"
  >
    {props.children}
  </a>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 5) {
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
          }
        }
      }
    }
  }
`

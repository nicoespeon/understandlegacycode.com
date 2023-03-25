import { graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Bio from "../components/bio"
import CTA from "../components/cta"
import SEO from "../components/seo"
import Layout from "../templates/layout"
import { colors, rhythm } from "../utils/typography"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteDescription = data.site.siteMetadata.description
    const posts = data.articles.edges
    const books = data.books.edges
    const talks = data.talks.edges

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
        <Disclaimer className="title-font">
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
            tame the legacy codebase you've inherited. 😉
          </p>
          <p>— Nicolas</p>
        </Disclaimer>
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
          <span role="img" aria-label="Kimono">
            🥋
          </span>{" "}
          Specific techniques
        </h2>
        <GridUl>
          <Li key="approval-tests">
            {" "}
            <ImgLink to="approval-tests">
              <img alt="" src="/assets/approval-testing.png" />
            </ImgLink>
            <Link className="title-font" to="approval-tests">
              Approval Testing
            </Link>
            <p>
              A technique to quickly put tests on Legacy Code, so you can
              refactor safely.
            </p>
          </Li>
          <Li key="behavioral-analysis">
            {" "}
            <ImgLink to="behavioral-analysis">
              <img alt="" src="/assets/behavioral-analysis.png" />
            </ImgLink>
            <Link className="title-font" to="behavioral-analysis">
              Behavioral Analysis
            </Link>
            <p>
              A technique to get insights from large codebases, using VCS
              information.
            </p>
          </Li>
          <Li key="dependency-graphs">
            {" "}
            <ImgLink to="dependency-graphs">
              <img alt="" src="/assets/draw-dependency-graph.png" />
            </ImgLink>
            <Link className="title-font" to="dependency-graphs">
              Draw Dependency Graphs
            </Link>
            <p>A technique to understand the structure of a codebase.</p>
          </Li>
        </GridUl>
        <h2 id="books">
          <span role="img" aria-label="Books">
            📚
          </span>{" "}
          Useful books on Legacy Code
        </h2>
        <Ul>
          {books.map(({ node }) => {
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
        </Ul>
        <h2>
          <span role="img" aria-label="Open book">
            📖
          </span>{" "}
          Helpful Guides
        </h2>
        <GridUl>
          <Li key="getting-into-large-codebase">
            <ImgLink to="getting-into-large-codebase">
              <img alt="" src="/assets/getting-into-large-codebases.png" />
            </ImgLink>
            <Link className="title-font" to="getting-into-large-codebase">
              Getting into a large codebase
            </Link>
            <p>
              Diving into a large, undocumented codebase is overwhelming. Let's
              see some techniques to approach it.
            </p>
          </Li>
          <Li key="best-practice-or-code-smell">
            <ImgLink to="best-practice-or-code-smell">
              <img alt="" src="/assets/best-practice-or-code-smell.png" />
            </ImgLink>
            <Link className="title-font" to="best-practice-or-code-smell">
              Best practice or a code smell?
            </Link>
            <p>
              Not sure if a pattern will make the code more maintainable? Here
              are a few resources that will help.
            </p>
          </Li>
          <Li key="changing-untested-code">
            <ImgLink to="changing-untested-code">
              <img alt="" src="/assets/changing-untested-code.png" />
            </ImgLink>
            <Link className="title-font" to="changing-untested-code">
              Changing untested code without breaking it
            </Link>
            <p>
              Without tests, every code change is risky. But how to put tests on
              a code that wasn't design for it?
            </p>
          </Li>
          <Li key="code-feels-impossible-to-maintain">
            <ImgLink to="code-feels-impossible-to-maintain">
              <img alt="" src="/assets/impossible-to-maintain.png" />
            </ImgLink>
            <Link className="title-font" to="code-feels-impossible-to-maintain">
              Code feels impossible to maintain
            </Link>
            <p>
              Sometimes, you seem to hit a point of no return and that the best
              strategy would be to burn it all and start over. Are there
              alternatives?
            </p>
          </Li>
          <Li key="making-others−care-about-it">
            <ImgLink to="making-others−care-about-it">
              <img alt="" src="/assets/making-others-care.png" />
            </ImgLink>
            <Link className="title-font" to="making-others−care-about-it">
              Making others care about it
            </Link>
            <p>
              What you can do when it seems that no-one cares about the
              technical debt that's piling up.
            </p>
          </Li>
        </GridUl>
        <h2>
          <span role="img" aria-label="Headphones">
            🎧
          </span>{" "}
          If you prefer podcasts
        </h2>
        <Ul>
          <Li key="rails-with-jason">
            <LargeExternalLink to="https://www.codewithjason.com/podcast/9478269-046-tips-for-working-with-legacy-code-with-nicolas-carlo/">
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
        <h2>
          <span role="img" aria-label="Mic">
            🎤
          </span>{" "}
          If you prefer talks
        </h2>
        <Ul>
          <Li key="mendercon-2021">
            <LargeExternalLink to="https://youtu.be/6KUUbV0NcA8">
              7 techniques to tame a Legacy Codebase
            </LargeExternalLink>
            <p>
              You spend most of our time changing existing code that is not
              documented, nor tested! It's painful because you're always in a
              hurry to ship new features and bug fixes… What if you had a secret
              weapon to make things better as you go? Here are 7 concrete
              techniques that will help you regain control of your Legacy.
            </p>
          </Li>
          {talks.map(({ node }) => {
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
        </Ul>
        <hr
          style={{
            marginBottom: rhythm(1.5),
          }}
        />
        <div style={{ marginBottom: rhythm(2) }} id="subscribe">
          <CTA />
        </div>
        <Bio />
      </Layout>
    )
  }
}

const Disclaimer = styled.section`
  padding: 0.75rem 0.5rem 0.75rem 1rem;
  border-left: 5px ${colors.primary} solid;
  border-radius: 0 0.5rem 0.5rem 0;
  background: ${colors.backgroundLightest};

  p:last-of-type {
    margin-bottom: 0;
  }
`

const Li = styled.li`
  &&::before {
    top: 16px;
  }
`

const GridUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  grid-row-gap: 1.5rem;
  margin-left: 0 !important;

  & > li {
    grid-column: span 2;
    margin-left: 0 !important;
  }

  & > li:last-child:nth-child(2n + 1) {
    grid-column-start: 2;
    grid-column-end: 4;
  }

  & > li::before {
    display: none !important;
  }

  img {
    margin-bottom: 0.75rem;
    border: 1px solid ${colors.background};
    border-radius: 1rem;
    box-shadow: -0.5rem 0.75rem 0 ${colors.background};
  }
  & > li:nth-of-type(2n) {
    img {
      box-shadow: 0.5rem -0.75rem 0 ${colors.background};
    }

    a:hover,
    a:active,
    a:focus {
      img {
        box-shadow: 0.5rem -0.75rem 0 ${colors.primary};
      }
    }
  }

  & a {
    font-size: 1.2rem;
    line-height: 0.5rem;

    &:hover,
    &:active,
    &:focus {
      transition: all 0.2s ease-in-out;

      img {
        box-shadow: -0.5rem 0.75rem 0 ${colors.primary};
      }
    }
  }

  & p {
    margin-top: 0.5rem;
  }

  @media (min-width: 1000px) {
    margin-left: -4rem !important;
    margin-right: -4rem;
    grid-gap: 1.5rem;
  }

  @media (max-width: 500px) {
    & {
      grid-template-columns: 1fr;
    }

    & > li {
      grid-column: span 1;
    }

    & > li:last-child:nth-child(2n + 1) {
      grid-column-start: 1;
      grid-column-end: 2;
    }
  }
`

const Ul = styled.ul`
  margin: "20px 0 40px";
`

const ImgLink = props => <Link style={{ boxShadow: "none" }} {...props} />
const LargeLink = props => <Link style={{ fontSize: "21px" }} {...props} />
const LargeExternalLink = props => (
  <a
    style={{ fontSize: "21px" }}
    href={props.to}
    target="_blank"
    rel="noopener noreferrer"
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
    articles: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
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
          }
        }
      }
    }
    books: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: ["book review"] } } }
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
          }
        }
      }
    }
    talks: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: ["conference"] } } }
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
          }
        }
      }
    }
  }
`

import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import { Twitter, Facebook, Reddit, Mail } from "react-social-sharing"

import SimilarArticles from "../components/similar-articles"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CTA from "../components/cta"
import Title from "../components/title"
import { rhythm, colors } from "../utils/typography"
import profilePic from "../../content/assets/profile-pic.png"

class BlogPostTemplate extends React.Component {
  state = { clapped: false }

  clap() {
    this.setState({ clapped: true })
  }

  render() {
    const post = this.props.data.mdx
    const siteDescription = this.props.data.site.siteMetadata.description

    const link = this.props.location.href
    const message = post.frontmatter.title

    return (
      <Layout location={this.props.location} description={siteDescription}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          date={post.frontmatter.date}
          slug={this.props.uri}
          type="article"
          image={post.frontmatter.image || profilePic}
        />
        <Title>{post.frontmatter.title}</Title>
        <Content>
          <MDXRenderer>{post.body}</MDXRenderer>
        </Content>
        <CTA title={post.frontmatter.ctaTitle} />
        <div
          style={{
            marginTop: rhythm(2),
            textAlign: "center",
          }}
        >
          <Cheers
            className={this.state.clapped ? "is-clapped" : ""}
            onClick={() => this.clap()}
          >
            <Hidden>Cheers!</Hidden>
            {this.state.clapped && (
              <div className="share">
                {/* 📕 https://react-social-sharing.now.sh/#/linkedin */}
                <p>
                  Glad you liked this post!{" "}
                  <span role="img" aria-label="Wine">
                    🍷
                  </span>
                  <br />
                  Mind to share it where it can be helpful?
                </p>
                <Twitter solid small message={message} link={link} />
                <Facebook solid small link={link} />
                <Reddit solid small link={link} />
                <Mail solid small subject={message} link={link} />
              </div>
            )}
          </Cheers>
        </div>
        <div
          style={{
            marginBottom: rhythm(3),
          }}
        >
          <Bio />
        </div>

        <SimilarArticles tags={post.frontmatter.tags} slug={post.fields.slug} />
        <Link to="/">← Go back to the home page</Link>
      </Layout>
    )
  }
}

const Cheers = styled.button`
  position: relative;
  width: 6em;
  height: 6em;
  border-radius: 50%;
  border-width: 0;
  margin-bottom: 5.5em; // 3.5 (base) + 2
  background: ${colors.white};
  box-shadow: inset 0 0 0 0.25em ${colors.primary},
    inset 0 0 0 2em ${colors.white}, inset 0 0 0 6em ${colors.primary};
  transition: box-shadow 0.5s, margin 1s;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "+1";
    font-weight: bold;
    font-size: 2em;
    color: ${colors.white};
    opacity: 0;
    transition: opacity 0;
  }

  &::after {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    content: "💡 Kudos!";
    padding-top: 0.25em;
    font-size: 1.25em;
  }

  &:hover,
  &.is-clapped {
    // Don't visual outline at this point (still accessible on focus)
    outline: none;

    cursor: pointer;
    box-shadow: inset 0 0 0 6.25em ${colors.primary};
    transition-duration: 1.2s;

    &::before {
      opacity: 1;
      transition-delay: 0.2s;
      transition-duration: 0.8s;
    }
  }

  .share {
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(1.5em, -50%);
    width: 300px;
    text-align: left;
    display: none;
    opacity: 0;

    p {
      margin-bottom: 0;
    }

    a {
      margin-top: 0.25em;
      box-shadow: none;

      &:first-of-type {
        margin-left: 0;
      }
    }
  }

  &.is-clapped {
    .share {
      display: block;
      opacity: 1;
      animation: appear 1s cubic-bezier(0.99, 0.02, 0.38, 0.99);
    }

    // Keep the whole thing centered
    margin-left: -300px;

    // Hide Kudos
    margin-bottom: 3.5em;

    &::after {
      content: "";
    }
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const Hidden = styled.span`
  // Accessible way to hide content visually
  // https://webaim.org/techniques/css/invisiblecontent/
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`

const Content = styled.div`
  .vscode-highlight-code {
    background-color: transparent;
  }

  h3 {
    text-transform: uppercase;
    text-rendering: optimizeLegibility;
    color: ${colors.primary};
    font-family: -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell,
      Helvetica Neue, sans-serif;
    letter-spacing: -0.01em;
  }

  .title-anchor {
    position: absolute;
    margin-left: -0.3em;
    padding: 0 1em;
    opacity: 0;
    box-shadow: none !important;
    transition: all 0.25s linear;
    transition-delay: 0;
  }

  h2,
  h3 {
    transition: all 0.25s linear;
    transition-delay: 0.15s;
  }

  h2:hover,
  h3:hover {
    padding-left: 1.3em;
    transition-delay: 0;

    & > .title-anchor {
      opacity: 1;
      margin-left: -2.2em !important;
      transition-delay: 0.15s;

      &:hover svg,
      &:focus svg,
      &:active svg {
        fill: ${colors.primary};
      }
    }
  }

  code {
    font-size: 1em;
  }

  @media (min-width: 600px) {
    p,
    li {
      font-size: 19px;
    }

    h1 {
      font-size: 3.5rem;
    }
  }

  @media (min-width: 1100px) {
    h1,
    h2 {
      position: relative;
    }

    h1::after {
      content: "";
      position: absolute;
      left: -3em;
      width: calc(100% + 3em);
      height: 0.3em;
      bottom: 0;
      background: ${colors.background};
    }

    h2::after {
      content: "";
      position: absolute;
      position: absolute;
      left: -3.5em;
      width: 3em;
      top: 0;
      bottom: 0;
      background: ${colors.background};
    }
  }
`

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        description
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image
        tags
        ctaTitle
      }
    }
  }
`

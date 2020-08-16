import { MDXProvider } from "@mdx-js/react"
import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import { toClipboard } from "copee"
import ColorHash from "color-hash"

import SimilarArticles from "../components/similar-articles"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CTA from "../components/cta"
import Title from "../components/title"
import Cheers from "../components/cheers"
import { rhythm, colors } from "../utils/typography"
import profilePic from "../../content/assets/profile-pic.png"

function parseHighlightedCode(chunks) {
  // Unwrap the code that has been splitted and nested
  // inside React components for syntax highlighting
  if (!chunks) return ""
  if (typeof chunks === "string") return chunks
  if ("props" in chunks) return parseHighlightedCode(chunks.props.children)

  return chunks.map(parseHighlightedCode).join("")
}

const CopyCode = ({ code }) => {
  const [notificationActive, setNotificationActive] = useState(false)

  const handleCopy = () => {
    toClipboard(code)
    setNotificationActive(true)

    setTimeout(() => {
      setNotificationActive(false)
    }, 3000)
  }

  return (
    <button
      style={{ position: "absolute", right: "16px" }}
      onClick={() => handleCopy()}
    >
      {notificationActive ? "Copied" : "Copy"}
    </button>
  )
}

const colorHash = new ColorHash({
  lightness: 0.6,
  saturation: 0.4,
})

function getColourFromString(item) {
  const tagHsl = colorHash.hsl(item)
  const tagColor = `hsla(${tagHsl[0]}, ${tagHsl[1] * 100}%, ${tagHsl[2] *
    100}%, 1)`
  return tagColor
}

const CodeLabel = ({ language }) => {
  if (!language) {
    return null
  }

  return (
    <div
      style={{
        position: "absolute",
        top: "-16px",
        left: "16px",
        fontFamily: "monospace",
        fontSize: "1rem",
        color: "white",
        backgroundColor: getColourFromString(language),
        textTransform: "uppercase",
        padding: "8px 4px",
        lineHeight: 1,
        borderRadius: "0 0 4px 4px",
        userSelect: "none",
        height: "auto",
      }}
    >
      {language}
    </div>
  )
}

const Code = ({ children, classes, code, language, index }) => {
  return (
    <pre className={classes} data-language={language} data-index={index}>
      <div
        style={{
          position: "relative",
          borderRadius: "4px 4px 0 0",
          bg: "background",
          padding: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CodeLabel language={language} />
        <CopyCode code={parseHighlightedCode(code)} />
      </div>
      <div style={{ marginTop: "16px" }}>{children}</div>
    </pre>
  )
}

const components = {
  pre: props => {
    return (
      <Code
        code={props.children}
        classes={props.className}
        language={props["data-language"]}
        index={props["data-index"]}
      >
        {props.children}
      </Code>
    )
  },
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteDescription = this.props.data.site.siteMetadata.description

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
          <MDXProvider components={components}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </Content>
        <div
          style={{
            marginTop: rhythm(2),
            marginBottom: rhythm(2),
          }}
        >
          <CTA title={post.frontmatter.ctaTitle} />
        </div>
        <Cheers
          link={this.props.location.href}
          message={post.frontmatter.title}
        />
        <div
          style={{
            marginBottom: rhythm(3),
          }}
        >
          <Bio />
        </div>
        <SimilarArticles tags={post.frontmatter.tags} slug={post.fields.slug} />
        <Link to="/">← Find more tips to work with Legacy Code</Link>
      </Layout>
    )
  }
}

const Content = styled.div`
  .grvsc-code {
    background-color: transparent;
    counter-reset: line;
  }

  // If there's a language set, add line count in the gutter
  .grvsc-container[data-language]:not([data-language=""]) .grvsc-line {
    &::before {
      counter-increment: line;
      content: counter(line);
      margin-right: 16px;
      margin-left: -8px;
      -webkit-user-select: none;
      user-select: none;
      text-align: right;
      width: 16px;
      display: inline-block;
    }

    // Except if there's only one line
    &:first-of-type:last-of-type::before {
      content: "";
    }
  }

  .grvsc-line-highlighted {
    background-color: ${colors.background};
    box-shadow: inset 4px 0 0 0 ${colors.primary};
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

import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CTA from "../components/cta"
import Title from "../components/title"
import { rhythm, colors } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteDescription = this.props.data.site.siteMetadata.description
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} description={siteDescription}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          slug={this.props.uri}
        />
        <Title>{post.frontmatter.title}</Title>
        <Content>
          <MDXRenderer>{post.body}</MDXRenderer>
        </Content>
        <CTA />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <Li>
            {previous && (
              <Link to={`blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </Li>
          <Li>
            {next && (
              <Link to={`blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </Li>
        </ul>
      </Layout>
    )
  }
}

const Content = styled.div`
  blockquote > p {
    font-size: 1.5em;
    line-height: 1.3em;
  }

  h3 {
    text-transform: uppercase;
    text-rendering: optimizeLegibility;
    color: ${colors.primary};
    font-family: -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell,
      Helvetica Neue, sans-serif;
    letter-spacing: -0.01em;
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

    blockquote {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
  }

  @media (min-width: 1100px) {
    h1,
    h2,
    blockquote {
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

    blockquote {
      border-color: transparent;
    }

    blockquote::after {
      content: "“";
      position: absolute;
      left: -0.3em;
      font-size: 5em;
      color: hsla(280, 85%, 55%, 0.7);
      font-family: "Helvetica Neue", Helvetica, serif;
      top: 0.15em;
    }
  }
`

const Li = styled.li`
  &&::before {
    display: none;
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
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
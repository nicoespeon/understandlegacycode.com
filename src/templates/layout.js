import { Link } from "gatsby"
import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import { colors, rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, description, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to="/"
          >
            <small style={{ color: colors.primary }}>Understand</small>
            <br />
            Legacy Code
            <Description>{description}</Description>
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to="/"
          >
            <span style={{ color: colors.primary }}>Understand</span> Legacy
            Code
            <Description>{description}</Description>
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
        <Helmet>
          <link
            rel="alternate"
            type="application/rss+xml"
            title="Understand Legacy Code"
            href="https://understandlegacycode.com/rss.xml"
          />
        </Helmet>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer>
          Copyright © 2019-{new Date().getFullYear()}, Nicolas Carlo
        </Footer>
      </Wrapper>
    )
  }
}

const Description = styled.small`
  display: block;
  margin-top: 1.5rem;
  font-weight: 200;
  line-height: 1;
  letter-spacing: -0.05rem;
  font-size: 28px !important;
`

const Wrapper = styled.div`
  min-height: 100vh;
  border-top: 5px solid hsla(280, 85%, 55%, 1);
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;

  code {
    background-color: ${colors.backgroundLightest};
  }

  del {
    text-decoration-thickness: from-font;
    text-decoration-style: double;
  }

  @media (min-width: 900px) {
    background-repeat: repeat-y;
    background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
  }

  ul,
  ol {
    margin-left: 1.75rem;
  }

  p + ul,
  p + ol {
    margin-top: -0.75rem;
  }

  ul > li,
  ol > li {
    list-style-type: none;
    margin-left: 20px;
    position: relative;
  }

  ol {
    padding-left: 20px;
  }

  ol > li {
    counter-increment: step-counter;
  }

  ul > li::before {
    display: inline-block;
    content: " ";
    background: ${colors.primary};
    width: 14px;
    height: 5px;
    position: absolute;
    top: 13px;
    left: -26px;
    transform: rotate(-5deg);
  }

  ol > li::before {
    content: counter(step-counter);
    margin-right: 1em;
    line-height: 1;
    background-color: ${colors.primary};
    box-shadow: 0.2em 0.2em 0 rgba(128, 128, 128, 0.2);
    color: ${colors.white};
    padding: 2px 0;
    width: 2.7em;
    height: 1.2em;
    display: block;
    position: absolute;
    box-sizing: border-box;
    margin-left: -62px;
    margin-top: -3px;
    top: 8px;
    text-align: center;
    font-size: 0.9em;
    font-style: normal;
    font-family: sharp-sans, sans-serif;
    font-variant-numeric: lining-nums;
    font-feature-settings: "lnum";
  }

  ul > li:nth-of-type(2n + 1)::before,
  ol > li:nth-of-type(2n + 1)::before {
    transform: rotate(4deg);
  }

  a {
    text-decoration: none;
    color: inherit;
    padding: 1px 0 0 0;
    box-shadow: inset 0 -2px 0 ${colors.primary};
    background: 0 0;
    transition: box-shadow 0.2s;
  }

  a:hover,
  a:focus,
  a:active {
    box-shadow: inset 0 -1.3em 0 ${colors.background};
  }

  .gatsby-resp-image-link {
    box-shadow: none !important;
  }

  small {
    font-size: 75%;
  }

  blockquote > p {
    font-size: 1.5em;
    line-height: 1.3em;
  }

  @media (min-width: 600px) {
    blockquote {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
  }

  @media (min-width: 1100px) {
    blockquote {
      position: relative;
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

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
  font-size: 14px;
`

export default Layout

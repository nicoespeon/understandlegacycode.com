import React from "react"
import styled from "styled-components"

import { rhythm, colors } from "../utils/typography"

class LandingPageLayout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(26),
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            fontSize: "18px",
          }}
        >
          <main>{children}</main>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  border-top: 5px solid hsla(280, 85%, 55%, 1);
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;

  .highlight {
    color: ${colors.primary};
  }

  h2 {
    line-height: 1.5em;
    letter-spacing: -0.02em;

    &.quote {
      position: relative;
      font-style: italic;

      &::before {
        position: absolute;
        z-index: -1;
        top: -30px;
        left: -60px;
        content: "";
        width: 72px;
        height: 72px;
        display: block;
        opacity: 0.75;
        background-image: url("data:image/svg+xml,%3Csvg width='72' height='72' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z' fill='%23AD2BEE' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
      }
    }
  }

  code {
    background-color: ${colors.backgroundLightest};
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

export default LandingPageLayout

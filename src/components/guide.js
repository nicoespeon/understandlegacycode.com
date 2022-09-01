import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import Bio from "./bio"
import CTA from "./cta"
import Layout from "./layout"

function Guide({ data, location, children }) {
  const siteDescription = data.site.siteMetadata.description
  const posts = data.allMdx.edges

  return (
    <Layout location={location} description={siteDescription}>
      {children}
      {posts.length > 0 && (
        <>
          <h2>
            <span role="img" aria-label="mortar board">
              🎓
            </span>
            &nbsp;Related articles
          </h2>
          <ul style={{ margin: "20px 0 40px" }}>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <Li key={node.fields.slug}>
                  <Link
                    style={{ fontSize: "19px" }}
                    to={`blog${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </Li>
              )
            })}
          </ul>
        </>
      )}
      <CTA />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <Bio />
    </Layout>
  )
}

const Li = styled.li`
  &&::before {
    top: 16px;
  }
`

export default Guide

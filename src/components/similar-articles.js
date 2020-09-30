import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

export default props => (
  <StaticQuery
    query={graphql`
      query SimilarArticles {
        posts: allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
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
                image
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { tags, slug } = props
      if (!tags) return null

      const relatedArticles = data.posts.edges
        .map(({ node }) => node)
        .filter(
          otherArticle =>
            otherArticle.frontmatter.tags &&
            otherArticle.frontmatter.tags.some(tag => tags.includes(tag))
        )
        .filter(article => article.fields.slug !== slug)
        .filter(article => !!article.frontmatter.image)
        // Shuffle, depending on the date (it rotates every day)
        .map((a, index) => ({
          sort:
            ((new Date().getDate() % relatedArticles.length) + index) %
            relatedArticles.length,
          value: a,
        }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        // Keep the first 4
        .filter((_, index) => index < 4)

      if (relatedArticles.length === 0) return null

      return (
        <>
          <h2>Similar articles that will help you…</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {relatedArticles.map((article, index) => (
              <RelatedArticle key={index}>
                <Link
                  to={`blog${article.fields.slug}`}
                  style={{ display: "flex", boxShadow: "none" }}
                >
                  <Image
                    style={{
                      backgroundImage: `url("${article.frontmatter.image}")`,
                    }}
                  />
                </Link>
                <Content>
                  <p style={{ fontWeight: "bold", marginBottom: "0.5em" }}>
                    <Link to={`blog${article.fields.slug}`}>
                      {article.frontmatter.title}
                    </Link>
                  </p>
                  <p>{article.frontmatter.description || article.excerpt}</p>
                </Content>
              </RelatedArticle>
            ))}
          </div>
        </>
      )
    }}
  />
)

const RelatedArticle = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 600px) {
    & {
      width: 48%;
    }
  }
`

const Content = styled.div`
  display: block;

  @media (min-width: 600px) {
    & {
      min-height: 170px;
    }
  }
`

const Image = styled.div`
  height: 200px;
  width: 100%;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  background-position: center;
  background-size: cover;
`

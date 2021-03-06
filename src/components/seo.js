/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import profilePic from "../../content/assets/profile-pic.png"

function SEO({
  description,
  lang,
  date,
  keywords = [],
  title,
  slug = "",
  image = profilePic,
  type = "website",
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const url = `${site.siteMetadata.siteUrl}${slug}`
  const metaDescription = description || site.siteMetadata.description
  const metaImage = `${site.siteMetadata.siteUrl}${image}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          // Seems required for LinkedIn to acknowledge the og tag
          prefix: "og: http://ogp.me/ns#",
          property: "og:url",
          content: url,
        },
        {
          // Seems required for LinkedIn to acknowledge the og tag
          prefix: "og: http://ogp.me/ns#",
          property: `og:title`,
          content: title,
        },
        {
          name: "title",
          content: title,
        },
        {
          // Seems required for LinkedIn to acknowledge the og tag
          prefix: "og: http://ogp.me/ns#",
          property: "og:description",
          content: metaDescription,
        },
        {
          name: "description",
          content: metaDescription,
        },
        {
          // Seems required for LinkedIn to acknowledge the og tag
          prefix: "og: http://ogp.me/ns#",
          property: "og:type",
          content: type,
        },
        {
          // Seems required for LinkedIn to acknowledge the og tag
          prefix: "og: http://ogp.me/ns#",
          property: "og:image",
          content: metaImage,
        },
        {
          name: "image",
          content: metaImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `@${site.siteMetadata.social.twitter}`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "twitter:image",
          content: metaImage,
        },
        {
          name: "keywords",
          content: keywords.join(`, `),
        },
      ]}
    >
      <link rel="canonical" href={url} />
      {/* Validate with https://search.google.com/structured-data/testing-tool/ */}
      <script type="application/ld+json">
        {`{
  "@context": "https://schema.org",
  "@type": "${type === "article" ? "TechArticle" : "Website"}",
  "publisher": {
      "@type": "Organization",
      "name": "${site.siteMetadata.title} | ${site.siteMetadata.description}",
      "logo": {
        "@type": "ImageObject",
        "url": "${profilePic}"
      }
  },
  "author": {
      "@type": "Person",
      "name": "${site.siteMetadata.author}",
      "image": "${profilePic}",
      "url": "https://nicoespeon.com",
      "sameAs": [
          "https://twitter.com/nicoespeon",
          "https://github.com/nicoespeon"
      ]
  },
  "headline": "${title.replace(/"/g, "'")} | ${site.siteMetadata.title}",
  "url": "${url}",
  "description": "${metaDescription.replace(/"/g, "'")}",
  "image": "${metaImage}",
  "keywords": "${keywords.join(", ")}",
  "datePublished": "${date}",
  "dateModified": "${date}",
  "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "${site.siteMetadata.siteUrl}"
  }
}`}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

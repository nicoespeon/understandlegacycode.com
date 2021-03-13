import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"

function Page(props) {
  return (
    <Layout
      location={props.location}
      description="You've opted out these emails!"
    >
      <h1>
        You have unsubscribed from the First Aid Kit launch{" "}
        <span role="img" aria-label="Empty mailbox">
          📭
        </span>
      </h1>
      <p>You won't receive emails about it anymore! No more noise.</p>
      <p>
        But <strong>you'll still receive my weekly tips & tricks</strong> to
        deal with Legacy Code! Of course, you can unsubscribe anytime too.{" "}
        <span role="img" aria-label="Thumbs up">
          👍
        </span>
      </p>
      <p>
        <em>
          P.S: if you change your mind, the "Legacy Code: First Aid Kit" will be{" "}
          <a href="./">available here</a>.
        </em>
      </p>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`

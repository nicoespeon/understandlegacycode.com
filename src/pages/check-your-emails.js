import { graphql } from "gatsby"
import React from "react"

import Layout from "../templates/layout"

function Page(props) {
  return (
    <Layout
      location={props.location}
      description="Hooray!! Almost there, just one last step…"
    >
      <h1>
        Check your emails!{" "}
        <span role="img" aria-label="Wink">
          😉
        </span>
      </h1>
      <p>
        If you're reading this, it means you have subscribed to my newsletter,
        but I can't send you articles until you{" "}
        <strong>check your emails and confirm your subscription.</strong>
      </p>
      <p>
        Now, go check that. I'll send you a confirmation email when you're all
        set{" "}
        <span role="img" aria-label="Thumbs up">
          👍
        </span>
      </p>
      <p>
        <em>P.S: if you're using GMail, check the "Promotions" tab!</em>
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

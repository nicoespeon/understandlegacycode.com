import React from "react"
import styled from "styled-components"

import { colors } from "../utils/typography"

function CTA() {
  const botsHoneypot = (
    <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
      <input
        type="text"
        name="b_ca05d369ee1b4a4e803dce32c_2fd39e1501"
        tabIndex="-1"
        defaultValue=""
      />
    </div>
  )

  const form = React.createRef()

  const url =
    "https://nicoespeon.us4.list-manage.com/subscribe/post?u=ca05d369ee1b4a4e803dce32c&amp;id=2fd39e1501"

  const trackAndSubmit = event => {
    event.preventDefault()

    if (typeof window.ga === "function") {
      window.ga(
        "send",
        "event",
        "Subscribe",
        "Click",
        "page",
        window.location.pathname
      )
    }

    if (form.current) {
      form.current.submit()
    }
  }

  return (
    <Wrapper>
      <Form
        ref={form}
        onSubmit={trackAndSubmit}
        action={url}
        method="post"
        name="mc-embedded-subscribe-form"
        target="_blank"
      >
        <h2>
          Learn to <em>understand</em> Legacy Code
        </h2>
        <p>
          Every week I share <strong>practical tips</strong> to help people work
          with Legacy Code.
          <br />
          Drop your email below and receive my advices for FREE.
        </p>
        <Container>
          <Input type="name" placeholder="First name" name="FNAME" />
          <Input
            type="email"
            placeholder="Email address"
            name="EMAIL"
            required
          />
          {botsHoneypot}
          <Button type="submit">
            Subscribe{" "}
            <span role="img" aria-label="Inbox">
              📨
            </span>
          </Button>
        </Container>
        <p>I won't spam you. I won't share your email. Unsubscribe anytime.</p>
      </Form>
    </Wrapper>
  )
}

const rotation = "1.5deg"

const Wrapper = styled.div`
  background-color: ${colors.background};
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  transform: rotate(-${rotation});
  padding: 5px 15px;
  margin-bottom: 2rem;
`

const Form = styled.form`
  transform: rotate(${rotation});
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.75rem;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`

const Input = styled.input`
  padding: 10px 20px;
  margin: 0 0 10px 0;

  @media (min-width: 600px) {
    margin: 0 10px 0 0;

    &[type="name"] {
      width: 25%;
    }

    &[type="email"] {
      width: 45%;
    }
  }
`

const Button = styled.button`
  padding: 15px 50px;
  align-self: center;
  color: white;
  font-weight: 700;
  background: ${colors.primary};
  border: none;
  box-shadow: inset 0 1px 0 hsl(280, 100%, 90%), 0 1px 3px hsla(0, 0%, 0%, 0.2);

  &:hover {
    cursor: pointer;
    background: hsl(280, 100%, 75%);
  }

  &:active {
    background: hsl(280, 90%, 60%);
    border-color: hsl(280, 90%, 60%);
    box-shadow: 0 2px 0 hsla(0, 0%, 100%, 0.15),
      inset 0 2px 2px hsla(0, 0%, 0%, 0.1);
  }

  @media (min-width: 600px) {
    width: 30%;
    padding: 15px 20px;
  }
`

export default CTA

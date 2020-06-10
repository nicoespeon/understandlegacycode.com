import React from "react"
import styled from "styled-components"

class CTA extends React.Component {
  componentDidMount() {
    const script = document.createElement("script")
    script.async = true
    script.src = "https://understandlegacycode.ck.page/1c42a88117/index.js"
    script.setAttribute("data-uid", "1c42a88117")
    this.signupForm.appendChild(script)
  }

  render() {
    return <Form ref={el => (this.signupForm = el)}></Form>
  }
}

const Form = styled.div`
  .formkit-form {
    transform: rotate(-1.5deg);
  }

  [data-style="minimal"] {
    transform: rotate(1.5deg);
    padding: 20px 40px !important;
  }

  .formkit-modal {
    transform: rotate(1.5deg);
  }

  .formkit-background {
    opacity: 0.25;
  }

  .formkit-header h1,
  .formkit-subheader p {
    color: black !important;
  }
`

export default CTA

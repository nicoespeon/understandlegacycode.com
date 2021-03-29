import React from "react"

class FirstAidKitParity extends React.Component {
  componentDidMount() {
    const script = document.createElement("script")
    script.async = true
    script.src = `https://cdn.paritybar.com/paritybar.js`
    document.body.appendChild(script)
  }

  render() {
    return null
  }
}

export { FirstAidKitParity }

import * as React from "react"

import Header from "../components/Header";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Header />
      <div>About Us</div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

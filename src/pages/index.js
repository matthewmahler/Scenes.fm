import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import background from "../images/bg.jpg"

const Hero = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
  background: url(${background}) no-repeat center center;
  background-size: cover !important;
  align-content: center;
  grid-template-rows: 1fr auto;
  div.hero {
    display: grid;
    grid-template-columns: 1fr;
    align-content: center;
  }
  h1 {
    font-family: "Pacifico", cursive;
    text-align: center;
    font-size: 6rem;
    color: #39bace;
    text-shadow: 10px 10px 10px #000;
  }
  h4 {
    font-family: "Open Sans", sans-serif;
    text-align: center;
    font-size: 2rem;
    color: #39bace;
    text-shadow: 5px 5px 5px #000;
  }
  p {
    font-family: "Open Sans", sans-serif;
    text-align: center;
    font-size: 1rem;
    margin: 0 auto;
    color: #39bace;
    text-shadow: 5px 5px 5px #000;
  }
  footer {
    font-family: "Open Sans", sans-serif;
    text-align: center;
    font-size: 1rem;
    margin: 0 auto;
    color: #39bace;
    text-shadow: 5px 5px 5px #000;
    a {
      text-decoration: none;
      color: #39bace;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero>
      <div className="hero">
        <h1>Scenes.fm</h1>
        <h4>Revolutionizing discovering and listening to local music.</h4>
        <p>(Under Construction)</p>
      </div>

      <footer>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://www.mattmahler.tech">Matt Mahler</a>
      </footer>
    </Hero>
  </Layout>
)

export default IndexPage

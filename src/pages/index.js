import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/styles/Hero"

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

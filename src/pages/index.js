import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Have a rad idea for an app? <br /> Get in touch yo!</h1>
    <p>We build quality apps using the best tools and design systems to prototype and build at pace.</p>
    <p>Tech for good is our jam, so let's build better together.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
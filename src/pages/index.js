import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <div>
      <h1 className="bg-red-200">Hello</h1>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from '../components/layout'

const Index = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <AniLink fade to="/page-2/">
      Go to page 2
    </AniLink>
  </Layout>
)

export default Index

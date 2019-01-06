import React from 'react'
import Layout from '../components/layout'
import { Main, Error, Info } from './_404.elements'

const NotFoundPage = () => (
  <Layout>
    <Main>
      <Error>404</Error>
      <br />
      <br />
      <Info>Page not found</Info>
    </Main>
  </Layout>
)

export default NotFoundPage

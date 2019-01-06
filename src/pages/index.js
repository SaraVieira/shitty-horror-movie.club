import React from 'react'

import logo from '../images/logo.svg'
import styled from '@emotion/styled'
import RandomMovieButton from '../components/randomMovieButton'
import Layout from '../components/layout'

const Flex = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Logo = styled.img`
  margin-bottom: 40px;
`
const Index = () => (
  <Layout>
    <Flex>
      <Logo src={logo} alt="logo" width={200} />
      <h1>Shitty Horror Movie Club</h1>
      <RandomMovieButton />
    </Flex>
  </Layout>
)

export default Index

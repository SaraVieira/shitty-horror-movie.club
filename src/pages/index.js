import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import logo from '../images/logo.svg'
import styled from '@emotion/styled'
import RandomMovie from '../components/randomMovie'

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

      <RandomMovie>
        {movieLink => (
          <AniLink paintDrip hex="#EF6D51" to={`/movies/${movieLink}/`}>
            Go to a random movie
          </AniLink>
        )}
      </RandomMovie>
    </Flex>
  </Layout>
)

export default Index

import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import urlify from 'urlify'

const linkify = urlify.create({
  addEToUmlauts: true,
  szToSs: true,
  spaces: '-',
  nonPrintable: '-',
  trim: true
})

const Poster = styled(Img)`
  position: relative;
  box-shadow: -2px -4px 8px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 10px;

  :after {
    content: '';
    opacity: 0;
    background: #151515;
    width: 100%;
    height: 100%;
    display: block;
    top: 0;
    left: 0;
    transition: all 200ms ease;
  }

  &:hover {
    :after {
      opacity: 0.6;
    }
    + h2 {
      opacity: 1;
      transform: translateY(-50%) translateX(-50%);
    }
  }
`

const Container = styled.main`
  width: 1024px;
  max-width: 90vw;
  margin: auto;
  padding: 60px 0;
`
const List = styled.main`
  display: flex;
  flex-wrap: wrap;
`

const H2 = styled.h2`
  text-align: center;
  padding: 0 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(200%) translateX(-50%);
  opacity: 0;
  transition: all 200ms ease;
`

const NotFoundPage = () => {
  const [seen, setSeen] = useState([])

  useEffect(() => {
    const localStorageSeen =
      JSON.parse(localStorage.getItem('shitty-horror-movies-seen')) || []

    setSeen(localStorageSeen)
  }, [])

  return (
    <Layout>
      <Container>
        <h1 className="animated fadeIn">Movies Seen</h1>
        <List>
          {seen.map(movie => (
            <AniLink
              style={{ position: 'relative' }}
              paintDrip
              hex="#EF6D51"
              className="animated fadeIn"
              to={`/movies/${linkify(movie.title.toLowerCase())}`}
              key={movie.id}
            >
              <Poster fixed={movie.poster_path.childImageSharp.fixed} />
              <H2>{movie.title}</H2>
            </AniLink>
          ))}
        </List>
      </Container>
    </Layout>
  )
}

export default NotFoundPage

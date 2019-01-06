import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import RandomMovie from '../components/randomMovie'
import styled from '@emotion/styled'

const Button = styled(AniLink)`
  font-family: 'Cabin', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 10px 15px;
  border: 3px solid #ef6d51;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    &:after,
    &:before {
      width: 50%;
    }
  }
  &:after,
  &:before {
    transition: all 200ms ease;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background: #ef6d51;
    z-index: -1;
  }
  &:before {
    right: 0;
    left: auto;
  }
`

const RandomMovieButton = ({ text }) => (
  <RandomMovie>
    {movieLink => (
      <Button paintDrip hex="#EF6D51" to={`/movies/${movieLink}/`}>
        {text || 'Go to a random movie'}
      </Button>
    )}
  </RandomMovie>
)

export default RandomMovieButton

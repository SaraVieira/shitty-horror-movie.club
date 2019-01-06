import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import urlify from 'urlify'

const random = arr => arr[Math.floor(Math.random() * arr.length)]

const linkify = urlify.create({
  addEToUmlauts: true,
  szToSs: true,
  spaces: '-',
  nonPrintable: '-',
  trim: true
})

const RandomMovie = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        allTmdbAccountFavoriteMovies {
          edges {
            node {
              title
            }
          }
        }
      }
    `}
    render={data => {
      const movies = data.allTmdbAccountFavoriteMovies.edges
      const movie = random(movies).node.title.toLowerCase()

      return children(linkify(movie))
    }}
  />
)

export default RandomMovie

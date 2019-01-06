const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)

var urlify = require('urlify').create({
  addEToUmlauts: true,
  szToSs: true,
  spaces: '-',
  nonPrintable: '-',
  trim: true
})

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allTmdbAccountFavoriteMovies {
        edges {
          node {
            title
            imdb_id
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const template = path.resolve(`./src/templates/movie.js`)

  _.each(result.data.allTmdbAccountFavoriteMovies.edges, edge => {
    createPage({
      path: `/pages/${urlify(edge.node.title.toLowerCase())}/`,
      component: slash(template),
      context: {
        id: edge.node.imdb_id
      }
    })
  })
}

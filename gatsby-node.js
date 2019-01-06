// const _ = require(`lodash`)
// const path = require(`path`)
// const slash = require(`slash`)

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     query {
//     }
//   `)

//   if (result.errors) {
//     throw result.errors
//   }

//   const template = path.resolve(`./src/templates/template.js`)

//   _.each(result.data.allContentfulCaseStudy.edges, edge => {
//     if (edge.node.slug) {
//       createPage({
//         path: `/pages/${edge.node.slug}/`,
//         component: slash(template),
//         context: {
//           id: edge.node.id
//         }
//       })
//     }
//   })
// }

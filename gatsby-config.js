let env = process.env.NODE_ENV || 'development'
require('dotenv').config({ path: `./.env.${env}` })

module.exports = {
  siteMetadata: {
    title: 'Shitty Horror Movie Club',
    description: 'All the terrible horror movies you can handle'
  },
  plugins: [
    {
      resolve: 'gatsby-source-tmdb',
      options: {
        apiKey: process.env.API_KEY,
        sessionID: process.env.SESSION_ID,
        modules: {
          account: {
            activate: true,
            endpoints: {
              movies: ['accountFavoriteMovies']
            }
          }
        },
        backdrop: true,
      }
    },
    `gatsby-plugin-accessibilityjs`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'GA_TRACKING_ID'
      }
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/favicon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Cabin:500i', 'Oswald:300', 'Karma']
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'My App',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/images/favicon.png'
      }
    }, // 'gatsby-plugin-offline',
    `gatsby-plugin-purgecss` // always last
  ]
}

import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Global } from '@emotion/core'
import Header from './header'
import Tags from './tags'
import 'tachyons'
import globalcss from '../utils/global'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Global styles={globalcss} />
        <Tags title={data.site.siteMetadata.title} />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1100
          }}
        >
          {children}
        </div>
      </Fragment>
    )}
  />
)

export default Layout

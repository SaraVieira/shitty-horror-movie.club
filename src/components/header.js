import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Header = ({ siteTitle }) => (
  <nav className="dt w-100 border-box pa3 ph5-ns mb4">
    <AniLink fade class="dtc v-mid mid-gray link dim w-25" to="/" title="Home">
      <img
        src="http://tachyons.io/img/logo.jpg"
        className="dib w2 h2 br-100"
        alt={siteTitle}
      />
    </AniLink>
    <div className="dtc v-mid w-75 tr">
      <AniLink
        fade
        className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns"
        to="/page-2/"
        title="page 2"
      >
        Page 2
      </AniLink>
      <AniLink
        fade
        className="link dim dark-gray f6 f5-ns dib"
        to="#"
        title="Contact"
      >
        Test
      </AniLink>
    </div>
  </nav>
)

export default Header

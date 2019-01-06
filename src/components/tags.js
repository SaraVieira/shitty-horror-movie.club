import React from 'react'
import Helmet from 'react-helmet'

const Tags = ({ title }) => (
  <Helmet title={title}>
    <html lang="en" />
    <meta charset="utf-8" />
    <meta name="description" content="description" />
    <meta
      name="image"
      content="https://transitionlink.tylerbarnes.ca/static/e8d87a8b10d9cf54dc5c642854738957/419fb/transition-link-logo-2.png"
    />
    <meta itemProp="name" content="App" />
    <meta itemProp="description" content="description" />
    <meta
      itemProp="image"
      content="https://transitionlink.tylerbarnes.ca/static/e8d87a8b10d9cf54dc5c642854738957/419fb/transition-link-logo-2.png"
    />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="App" />
    <meta name="twitter:description" content="description" />
    <meta name="twitter:site" content="@NikkitaFTW" />
    <meta name="twitter:creator" content="@NikkitaFTW" />
    <meta
      name="twitter:image:src"
      content="https://transitionlink.tylerbarnes.ca/static/e8d87a8b10d9cf54dc5c642854738957/419fb/transition-link-logo-2.png"
    />
    <meta name="og:title" content="App" />
    <meta name="og:description" content="description" />
    <meta
      name="og:image"
      content="https://transitionlink.tylerbarnes.ca/static/e8d87a8b10d9cf54dc5c642854738957/419fb/transition-link-logo-2.png"
    />
    <meta name="og:url" content="https://example.com" />
    <meta name="og:site_name" content="App" />
    <meta name="og:type" content="website" />
  </Helmet>
)

export default Tags

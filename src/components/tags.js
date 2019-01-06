import React from 'react'
import Helmet from 'react-helmet'

const Tags = ({ title, description }) => (
  <Helmet title={title}>
    <html lang="en" />
    <meta charset="utf-8" />
    <meta
      name="description"
      content="All the terrible horror movies you can handle"
    />
    <meta
      name="image"
      content="https://rawcdn.githack.com/SaraVieira/shitty-horror-movie.club/31b1016d733256b5071db6588a077b0f3f79b92a/src/images/favicon.png"
    />
    <meta itemProp="name" content="App" />
    <meta
      itemProp="description"
      content="All the terrible horror movies you can handle"
    />
    <meta
      itemProp="image"
      content="https://rawcdn.githack.com/SaraVieira/shitty-horror-movie.club/31b1016d733256b5071db6588a077b0f3f79b92a/src/images/favicon.png"
    />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="App" />
    <meta
      name="twitter:description"
      content="All the terrible horror movies you can handle"
    />
    <meta name="twitter:site" content="@NikkitaFTW" />
    <meta name="twitter:creator" content="@NikkitaFTW" />
    <meta
      name="twitter:image:src"
      content="https://rawcdn.githack.com/SaraVieira/shitty-horror-movie.club/31b1016d733256b5071db6588a077b0f3f79b92a/src/images/favicon.png"
    />
    <meta name="og:title" content="App" />
    <meta
      name="og:description"
      content="All the terrible horror movies you can handle"
    />
    <meta
      name="og:image"
      content="https://rawcdn.githack.com/SaraVieira/shitty-horror-movie.club/31b1016d733256b5071db6588a077b0f3f79b92a/src/images/favicon.png"
    />
    <meta name="og:url" content="https://example.com" />
    <meta name="og:site_name" content="App" />
    <meta name="og:type" content="website" />
  </Helmet>
)

export default Tags

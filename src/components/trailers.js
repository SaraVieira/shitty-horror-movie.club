import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const H3 = styled.h3`
  margin-top: 20px;
`

const Trailers = ({ id }) => {
  const [trailer, setTrailer] = useState(null)
  const [teaser, setTeaser] = useState(null)

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=7feb83087acd0bcec36d1798ef6b8771&language=en-US`

    fetch(url)
      .then(d => d.json())
      .then(data => data.results)
      .then(videos =>
        setTrailer(
          videos.filter(v => v.type === 'Trailer' && v.site === 'YouTube')
        )
      )
  }, [])

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=7feb83087acd0bcec36d1798ef6b8771&language=en-US`

    fetch(url)
      .then(d => d.json())
      .then(data => data.results)
      .then(videos =>
        setTeaser(
          videos.filter(v => v.type === 'Teaser' && v.site === 'YouTube')
        )
      )
  }, [])

  return [
    trailer &&
      trailer.map(t => (
        <div className="animated fadeInUp" key={t.id}>
          <H3>Trailer</H3>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${t.key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )),
    teaser &&
      teaser.map(t => (
        <div className="animated fadeInUp" key={t.id}>
          <H3>Teaser</H3>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${t.key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ))
  ]
}

export default Trailers

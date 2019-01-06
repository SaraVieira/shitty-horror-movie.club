import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const AbstractContainer = styled.section`
  margin-top: 20px;
`
const Small = styled.small`
  font-weight: bold;
  padding-top: 10px;
  display: block;
`

const Abstract = ({ title }) => {
  const [abstract, setAbstract] = useState(null)

  useEffect(() => {
    try {
      fetch(`https://api.duckduckgo.com/?q=${title}&format=json&no_html=1`)
        .then(d => d.json())
        .then(data => setAbstract(data.AbstractText))
    } catch {
      fetch(
        `https://api.duckduckgo.com/?q=${title} movie&format=json&no_html=1`
      )
        .then(d => d.json())
        .then(data => setAbstract(data.AbstractText))
    }
  }, [])

  return abstract ? (
    <AbstractContainer className="animated fadeInUp">
      <h3>Abstract:</h3>
      <p>{abstract}</p>
      <Small>
        Search by{' '}
        <a
          href="https://duckduckgo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          DuckDuckGo
        </a>
      </Small>
    </AbstractContainer>
  ) : null
}

export default Abstract

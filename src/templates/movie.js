import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import {
  FaEyeSlash,
  FaEye,
  FaCalendarPlus,
  FaCalendarMinus
} from 'react-icons/fa'
import Layout from '../components/layout'
import Rating from '../components/rating'
import Img from 'gatsby-image'
import Trailers from '../components/trailers'
import Abstract from '../components/abstract'
import RandomMovieButton from '../components/randomMovieButton'

import IMDB from '../images/imdb.svg'
import open from '../images/open.svg'

const Background = styled.section`
  position: absolute;
  z-index: -2;
  width: 100vw;
  height: 100vh;

  > div.gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100vw;
    max-height: 100vh;
  }

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background: #151515;
    left: 0;
    top: 0;
    opacity: 0.5;
  }
`

const Main = styled.main`
  width: 1024px;
  max-width: 90%;
  margin: auto;
  padding-bottom: 60px;
`

const Container = styled.div`
  background: #151515;
  padding: 50px 30px;
  position: relative;
  z-index: 0;
  margin-top: 40vh;
  height: calc(100% - 40vh);
  box-shadow: 1px -3px 4px 0px rgba(0, 0, 0, 0.2);
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

const Poster = styled(Img)`
  position: relative;
  transform: translateY(-30%);
  box-shadow: -2px -4px 8px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  flex-shrink: 0;
`

const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 24px);
  grid-gap: 20px;
  margin-bottom: 40px;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`

const RandomMovie = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
`

const Button = styled.button`
  appearance: none;
  background: transparent;
  padding: 0;
  border: none;
`

const Movie = ({ data: { tmdbAccountFavoriteMovies: movie } }) => {
  const [seen, setSeen] = useState([])
  const [watchList, setWatchList] = useState([])

  const toggleSeenMovie = async movie => {
    if (seen.find(v => v.id === movie.id)) {
      const remove = seen.filter(s => s.id !== movie.id)
      setSeen(remove)
      await localStorage.setItem(
        'shitty-horror-movies-seen',
        JSON.stringify(remove)
      )

      return
    }
    const add = seen.concat(movie)
    setSeen(add)
    await localStorage.setItem('shitty-horror-movies-seen', JSON.stringify(add))
  }

  const toggleWatchListMovie = async movie => {
    if (watchList.find(v => v.id === movie.id)) {
      const remove = watchList.filter(s => s.id !== movie.id)
      setWatchList(remove)
      await localStorage.setItem(
        'shitty-horror-movies-watchList',
        JSON.stringify(remove)
      )

      return
    }
    const add = watchList.concat(movie)
    setWatchList(add)
    await localStorage.setItem(
      'shitty-horror-movies-watchList',
      JSON.stringify(add)
    )
  }

  useEffect(() => {
    const localStorageSeen =
      JSON.parse(localStorage.getItem('shitty-horror-movies-seen')) || []
    const localStorageWatchList =
      JSON.parse(localStorage.getItem('shitty-horror-movies-watchList')) || []

    setSeen(localStorageSeen)
    setWatchList(localStorageWatchList)
  }, [])

  return (
    <Layout>
      <RandomMovie>
        <RandomMovieButton text={'Next Movie'} />
      </RandomMovie>
      <Background>
        {movie.backdrop_path && (
          <Img fluid={movie.backdrop_path.childImageSharp.fluid} />
        )}
        <Container>
          <Main>
            <Header>
              <div
                style={{
                  paddingRight: 40
                }}
              >
                <Flex>
                  <div>
                    <h1 className="animated fadeInUp">{movie.title}</h1>
                    <h2 className="animated fadeInUp"> {movie.tagline}</h2>
                    <Links className="animated fadeInUp">
                      {movie.homepage ? (
                        <a
                          href={`${movie.homepage}/`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={open}
                            width="24px"
                            alt="Open Movie Webpage"
                          />
                        </a>
                      ) : null}
                      <a
                        href={`https://www.imdb.com/title/${movie.imdb_id}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={IMDB} width="24px" alt="IMDB logo" />
                      </a>
                      <Button
                        aria-label={`Mark as ${
                          watchList.find(v => v.id === movie.id)
                            ? 'Unseen'
                            : 'seen'
                        }`}
                        onClick={() => toggleSeenMovie(movie)}
                      >
                        {seen.find(v => v.id === movie.id) ? (
                          <FaEyeSlash fill="#fafafa" size="24" />
                        ) : (
                          <FaEye fill="#fafafa" size="24" />
                        )}
                      </Button>

                      <Button
                        aria-label={`${
                          seen.find(v => v.id === movie.id) ? 'Remove' : 'Add'
                        } to Watchlist`}
                        onClick={() => toggleWatchListMovie(movie)}
                      >
                        {watchList.find(v => v.id === movie.id) ? (
                          <FaCalendarMinus fill="#fafafa" size="24" />
                        ) : (
                          <FaCalendarPlus fill="#fafafa" size="24" />
                        )}
                      </Button>
                    </Links>
                  </div>
                  <Rating votes={movie.vote_average / 10} />
                </Flex>
                <Abstract title={movie.title} />
              </div>
              <Poster
                className="animated fadeIn"
                fixed={movie.poster_path.childImageSharp.fixed}
              />
            </Header>
            <Trailers id={movie.accountFavoriteMoviesId} />
          </Main>
        </Container>
      </Background>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    tmdbAccountFavoriteMovies(imdb_id: { eq: $id }) {
      accountFavoriteMoviesId
      title
      id
      backdrop_path {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      budget
      homepage
      budget
      poster_path {
        childImageSharp {
          fixed(width: 300, height: 450) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imdb_id
      revenue
      tagline
      vote_average
      tagline
    }
  }
`

export default Movie

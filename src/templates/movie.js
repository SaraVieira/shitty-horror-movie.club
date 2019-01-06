import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import Rating from '../components/rating'
import Img from 'gatsby-image'
import Trailers from '../components/trailers'
import Abstract from '../components/abstract'
import RandomMovieButton from '../components/randomMovieButton'

import IMDB from '../images/imdb.svg'
import open from '../images/open.svg'

const imageURL = `https://image.tmdb.org/t/p/original/`

const Background = styled.section`
  position: absolute;
  z-index: -2;
  width: 100vw;
  height: 100vh;
  background-image: url(${imageURL}/${props => props.bg});
  background-size: cover;
  background-position: center center;

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

const Movie = ({ data: { tmdbAccountFavoriteMovies: movie } }) => {
  return (
    <Layout>
      <RandomMovie>
        <RandomMovieButton text={'Next Movie'} />
      </RandomMovie>
      <Background bg={movie.backdrop_path}>
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
                      {' '}
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
      backdrop_path
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

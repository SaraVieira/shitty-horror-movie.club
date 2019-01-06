import { css } from '@emotion/core'
import typography from './css/type.js'
import reset from './css/reset.js'
import animate from 'animate.css'

export default css`
  ${reset}
  ${typography}
  ${animate}

body {
    font-family: 'Karma', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #151515;
    line-height: 1.5;
    color: #fafaff;
    overflow-x: hidden;

    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: border-box;
    }
  }

  h1 {
    font-family: 'Cabin', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Oswald', 'Helvetica', sans-serif;
    font-weight: 300;
    color: #cfcfcf;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-bottom: 20px;
    line-height: 1.125;
  }

  small {
    font-size: 0.8rem;
  }

  p {
    line-height: 1.5;
  }

  .video-container {
    position: relative;
    padding-bottom: calc(50% - 30px);
    padding-top: 30px;
    height: 0;
    overflow: hidden;

    iframe,
    object,
    embed {
      max-width: 854px;
      max-height: 480px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

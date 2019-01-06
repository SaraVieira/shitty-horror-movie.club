import { css } from '@emotion/core'
import typography from './css/type.js'
import reset from './css/reset.js'

export default css`
  ${reset}
  ${typography}

body {
    font-family: 'Karma', 'Avenir Next', sans-serif;
    background: #26262a;
    line-height: 1.33;
    color: #fafaff;
    overflow-x: hidden;

    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: border-box;
    }
  }

  h1 {
    font-family: 'Cabin';
    font-weight: 500;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Oswald';
    font-weight: 500;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-bottom: 20px;
  }

  small {
    font-size: 0.8rem;
    font-weight: bold;
    padding-top: 10px;
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

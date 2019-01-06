import { css } from '@emotion/core'
import typography from './css/type.js'
import reset from './css/reset.js'

export default css`
  ${reset}
  ${typography}

body {
    font-family: 'Avenir Next', 'Roboto', sans-serif;
    background: #fff;
    line-height: 1.33;
    color: #313131;
    overflow-x: hidden;

    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: border-box;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    padding-bottom: 20px;
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

import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const Noise1 = keyframes`
  0%, 20%, 40%, 60%, 70%, 90% {opacity: 0;}
  10% {opacity: .1;}
  50% {opacity: .5; left: -6px;}
  80% {opacity: .3;}
  100% {opacity: .6; left: 2px;}
`

const Noise2 = keyframes`
  0%, 20%, 40%, 60%, 70%, 90% {opacity: 0;}
  10% {opacity: .1;}
  50% {opacity: .5; left: 6px;}
  80% {opacity: .3;}
  100% {opacity: .6; left: -2px;}
`

const Noise3 = keyframes`
   0%,3%,5%,42%,44%,100% {opacity: 1; transform: scaleY(1);}
  4.3% {opacity: 1; transform: scaleY(4);}
  43% {opacity: 1; transform: scaleX(10) rotate(60deg);}
`

const Noise = keyframes`
  0%, 3%, 5%, 42%, 44%, 100% {opacity: 1; transform: scaleY(1);}
  4.3% {opacity: 1; transform: scaleY(1.7);}
  43% {opacity: 1; transform: scaleX(1.5);}
`

export const Main = styled.main`
  background: radial-gradient(#000, #111);
  color: white;
  overflow: hidden;
  height: 100vh;
  user-select: none;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
`

export const Error = styled.div`
  text-align: center;
  font-family: 'Roboto', serif;
  font-size: 95px;
  font-style: italic;
  text-align: center;
  width: 200px;
  height: 60px;
  line-height: 60px;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: -60px;
  right: 0;
  animation: ${Noise} 2s linear infinite;
  overflow: default;

  &:after {
    content: '404';
    font-family: 'Roboto', serif;
    font-size: 100px;
    font-style: italic;
    text-align: center;
    width: 200px;
    height: 60px;
    line-height: 60px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    color: blue;
    animation: ${Noise1} 0.2s linear infinite;
  }
`

export const Info = styled.div`
  font-family: 'Roboto', serif;
  font-size: 15px;
  font-style: italic;
  font-weight: bold;
  width: 130px;
  height: 60px;
  line-height: 60px;
  margin: auto;
  position: absolute;
  top: 140px;
  bottom: 0;
  left: 0;
  right: 0;
  animation: ${Noise3} 1s linear infinite;

  &:before {
    content: '404';
    font-family: 'Roboto', serif;
    font-size: 100px;
    font-style: italic;
    text-align: center;
    width: 200px;
    height: 60px;
    line-height: 60px;
    transform: translateY(-114%) translatex(-15%);
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    color: red;
    animation: ${Noise2} 0.2s linear infinite;
  }
`

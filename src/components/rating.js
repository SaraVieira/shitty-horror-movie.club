import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const progress = votes => keyframes`
  from {
    stroke-dashoffset: 339.292;
  }
  to {
    stroke-dashoffset: ${votes * 339.292};
  }
`

const CircleContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;

  p {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    font-weight: bold;
    transform: translateX(-50%) translateY(-50%);
  }

  .progress {
    transform: rotate(-90deg);
  }
  .progress__value {
    stroke-dasharray: 339.292;
    stroke-dashoffset: 339.292;
    animation: ${props => progress(1 - props.votes)} 2s;
    animation-fill-mode: forwards;
    animation-delay: 1s;
  }
`

const Circle = ({ votes }) => {
  const color = votes > 0.5 ? '#4AB83E' : '#D83838'

  return (
    <CircleContainer className="animated jackInTheBox delay-1s" votes={votes}>
      <p>{(votes * 10).toFixed(1)} / 10</p>
      <svg className="progress" width="120" height="120" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="#e6e6e6"
          strokeWidth="12"
        />
        <circle
          className="progress__value"
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke={color}
          strokeWidth="12"
        />
      </svg>
    </CircleContainer>
  )
}

export default Circle

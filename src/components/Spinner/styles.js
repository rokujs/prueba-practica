import { css } from '@emotion/react'
import { colors } from '@/styles/theme'

export const container = css`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 6px solid ${colors.red};
  border-color: ${colors.red} transparent ${colors.red} transparent;
  animation: spinner 1.2s linear infinite;


  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

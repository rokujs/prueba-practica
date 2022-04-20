import { css } from '@emotion/react'
import { colors, fontSize } from '@/styles/theme'

export const container = css``

export const btn = css`
  background-color: ${colors.white};
  border: none;
  border-radius: 1.5rem;
  padding: 1.5rem 5rem;
  cursor: pointer;

  & > span {
    font-size: ${fontSize.medium};
    font-weight: 400;
    color: ${colors.blue};
  }
`

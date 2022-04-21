import { css } from '@emotion/react'
import { fontSize, queries } from '@/styles/theme'

export const image = css`
  display: inline-block;
  width: ${fontSize.large};
  margin-right: 1rem;

  @media (${queries.tablet}) {
    width: ${fontSize.medium};
  }
`

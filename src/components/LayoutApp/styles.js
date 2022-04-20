import { css } from '@emotion/react'
import { colors } from '@/styles/theme'

export const container = css`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.bg};
`

export const main = css`
  height: auto;
  width: 1200px;
  margin: 0 auto;
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
`

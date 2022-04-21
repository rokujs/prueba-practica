import { css } from '@emotion/react'
import { colors, queries } from '@/styles/theme'

export const container = css`
  min-height: 100vh;
  height: 100%;
  min-width: 100vw;
  background-color: ${colors.bg};
`

export const main = css`
  height: auto;
  width: 1200px;
  margin: 0 auto;
  margin-top: 7rem;
  display: flex;
  flex-direction: column;

  @media (${queries.laptop}) {
    width: 900px;
    margin-top: 5rem;
  }

  @media (${queries.tablet}) {
    width: 700px;
    margin-top: 3rem;
  }

  @media (${queries.mobile}) {
    width: 100%;
    margin-top: 1.5rem;
  }
`

import { css } from '@emotion/react'
import { queries } from '@/styles/theme'

export const container = css`
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  grid-template-rows: 1fr 2fr;
  column-gap: 3rem;
  row-gap: 1rem;

  @media (${queries.mobile}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
    row-gap: 1.5rem;
    column-gap: 0;
  }
`

export const card = css`
  grid-row: 1 / 3;
  grid-column: 1 / 2;

  @media (${queries.mobile}) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
`
export const navbar = css`
  grid-row: 1 / 2;
  grid-column: 2 / 4;

  @media (${queries.mobile}) {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }
`
export const filter = css`
  grid-row: 2 / 3;
  grid-column: 3 / 4;
  align-self: start;
  justify-self: end;

  @media (${queries.mobile}) {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
    align-self: center;
    justify-self: center;
  }
`

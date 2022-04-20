import { css } from '@emotion/react'

export const container = css`
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  grid-template-rows: 1fr 2fr;
  column-gap: 3rem;
  row-gap: 1rem;
`

export const card = css`
  grid-row: 1 / 3;
  grid-column: 1 / 2;
`
export const navbar = css`
  grid-row: 1 / 2;
  grid-column: 2 / 4;
`
export const filter = css`
  grid-row: 2 / 3;
  grid-column: 3 / 4;
  align-self: start;
  justify-self: end;
`

import { css } from '@emotion/react'
import { colors, fontSize } from '@/styles/theme'

export const container = css`
  background: linear-gradient(to right, ${colors.blue}, ${colors.red});
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 12rem;
  padding: 0 5rem;
`

export const menu = css`
  min-width: 22rem;

  nav > ul {
    display: inline-flex;
    width: 100%;
    justify-content: space-between;
  }

  nav > ul > li {
    list-style: none;
  }

  nav > ul > li > a {
    text-decoration: none;
    color: ${colors.white};
    font-size: ${fontSize.large};
    transition: text-decoration 0.15s;
    &:hover {
      text-decoration: underline;
    }
  }
`
export const image = css`
  max-width: 12rem;

  img {
    width: 100%;
  }
`

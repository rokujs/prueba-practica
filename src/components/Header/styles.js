import { css } from '@emotion/react'
import { colors, fontSize, queries } from '@/styles/theme'

export const container = css`
  background: linear-gradient(to right, ${colors.blue}, ${colors.red});
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 12rem;
  padding: 0 5rem;

  @media (${queries.mobile}) {
    height: 10rem;
    padding: 0 1.4rem;
  }
`

export const menu = css`
  min-width: 22rem;

  @media (${queries.mobile}) {
    min-width: 16rem;
  }

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
    font-size: ${fontSize.medium};
    transition: text-decoration 0.15s;

    @media (${queries.mobile}) {
      font-size: ${fontSize.small};
    }

    &:hover {
      text-decoration: underline;
    }
  }
`
export const image = css`
  max-width: 12rem;

  @media (${queries.mobile}) {
    max-width: 8rem;
  }

  img {
    width: 100%;
  }
`

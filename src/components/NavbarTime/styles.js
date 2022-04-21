import { css } from '@emotion/react'
import { colors, fontSize, queries } from '@/styles/theme'

export const container = css`
  background-color: ${colors.white};
  width: 100%;
  border-radius: 1.2rem;

  @media (${queries.mobile}) {
    border-radius: 0;
  }
`

export const menu = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  @media (${queries.mobile}) {
    justify-content: center;
    padding: 0.2rem;
  }

  & > li {
    list-style: none;
    flex: 1;
    text-align: center;
    margin: 0 1rem;

    @media (${queries.mobile}) {
      margin: 0 0.2rem;
    }

    & > button {
      background-color: ${colors.white};
      padding: 1rem;
      border-radius: 99rem;
      font-size: ${fontSize.small};
      font-weight: bold;
      color: ${colors.blue};
      cursor: pointer;
      border: none;
      width: 100%;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: ${colors.bg};
      }
    }
  }
`

export const active = css`
  background-color: ${colors.bg} !important;
`

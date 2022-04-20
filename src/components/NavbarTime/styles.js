import { css } from '@emotion/react'
import { colors, fontSize } from '@/styles/theme'

export const container = css`
  background-color: ${colors.white};
  width: 100%;
`

export const menu = css`
  background-color: ${colors.white};
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;

  & > li {
    list-style: none;
    flex: 1;
    text-align: center;
    margin: 0 1rem;
    padding: 1rem;
    border-radius: 99rem;
    font-size: ${fontSize.small};
    font-weight: bold;
    color: ${colors.blue};
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${colors.bg};
    }
  }
`

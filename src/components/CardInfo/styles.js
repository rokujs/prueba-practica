import { css } from '@emotion/react'
import { colors, fontSize, queries } from '@/styles/theme'

export const container = css`
  background-color: ${colors.white};
  height: 100%;
  min-width: 360px;
  width: 100%;
  border-radius: 1.5rem;
  min-height: 22rem;
  overflow: hidden;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);

  @media (${queries.mobile}) {
    min-width: 240px;
    border-radius: 0;
    min-height: 18rem;
    box-shadow: none;
  }
`

export const content = css`
  margin-top: 2rem;
  text-align: center;
`

export const title = css`
  background: linear-gradient(to right, ${colors.blue}, ${colors.red});
  font-size: ${fontSize.medium};
  color: ${colors.white};
  padding: 2rem;
  font-weight: 500;

  @media (${queries.mobile}) {
    padding: 1.8rem;
    font-size: ${fontSize.small};
  }
`
export const totalMoney = css`
  font-size: 5rem;
  background: linear-gradient(to right, ${colors.blue}, ${colors.red});
  background-clip: text;
  text-fill-color: transparent;
  font-weight: bold;
  text-align: center;

  @media (${queries.mobile}) {
    font-size: 3.8rem;
  }

  &::before {
    content: "$";
  }
`
export const date = css`
  font-size: ${fontSize.small};
  color: ${colors.blue};
  text-align: center;
  display: inline-block;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
`

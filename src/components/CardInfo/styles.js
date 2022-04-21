import { css } from '@emotion/react'
import { colors, fontSize } from '@/styles/theme'

export const container = css`
  background-color: ${colors.white};
  height: 100%;
  min-width: 360px;
  width: 100%;
  border-radius: 1.5rem;
  height: 22rem;
  overflow: hidden;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
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
`
export const totalMoney = css`
  font-size: 5rem;
  background: linear-gradient(to right, ${colors.blue}, ${colors.red});
  background-clip: text;
  text-fill-color: transparent;
  font-weight: bold;
  text-align: center;

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

import { css } from '@emotion/react'
import { colors, fontSize, queries } from '@/styles/theme'

export const container = css`
  background-color: ${colors.white};
  border-radius: 1.5rem;
  position: relative;
`

export const btn = css`
  background-color: transparent;
  border: none;
  padding: 1.5rem 5rem;
  cursor: pointer;

  & > span {
    font-size: ${fontSize.medium};
    font-weight: 400;
    color: ${colors.blue};
  }
`

export const form = css`
  background-color: ${colors.white};
  padding: 1rem 2rem 2rem 2rem;
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  border-radius: inherit;
  width: max-content;
  text-align: center;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);

  @media (${queries.mobile}) {
    left: 50%;
    transform: translateX(-50%);
  }

  & > div {
    text-align: center;
    margin-bottom: 3rem;
    width: 100%;
  }

  & > div > h5 {
    display: inline-block;
    font-size: ${fontSize.small};
    color: ${colors.blue};
    font-weight: 400;
  }

  & > div > button {
    position: absolute;
    right: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: ${fontSize.large};
    color: ${colors.blue};
  }

  & form > div {
    text-align: left;
    margin-bottom: 2rem;
    & > label {
      font-size: ${fontSize.medium};
      color: ${colors.blue};
      cursor: pointer;

      & > span {
        margin-left: 1rem;
        font-weight: 500;
      }

      & > input {
        height: ${fontSize.medium};
        width: ${fontSize.medium};
      }
    }
  }

  & > form button {
    background-color: ${colors.lightRed};
    color: ${colors.white};
    border: none;
    padding: 1.5rem 5rem;
    margin-top: 3rem;
    cursor: pointer;
    font-size: ${fontSize.medium};
    font-weight: bold;
    border-radius: 99rem;
  }
`

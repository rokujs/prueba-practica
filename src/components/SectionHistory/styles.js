import { css } from '@emotion/react'
import { colors, fontSize, queries } from '@/styles/theme'

export const container = css`
  margin-top: 2rem;
  border-radius: 1.5rem;
  overflow: hidden;

  @media (${queries.mobile}) {
    border-radius: 0;
  }
`

export const headerContainer = css`
  background: linear-gradient(to right, ${colors.blue} 0%, ${colors.red} 150%);
  width: 100%;
  padding: 1.2rem 3rem;
  font-size: ${fontSize.large};
  color: ${colors.white};
`

export const tableContainer = css`
  width: 100%;
  background-color: ${colors.white};
  height: 45vh;
  overflow-y: auto;
  overflow-x: auto;

  @media (${queries.mobile}) {
    height: 40vh;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.white};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${colors.lightGrey}99;
  }

  & > table {
    border-collapse: collapse;
    width: 100%;

    @media (${queries.mobile}) {
      width: 900px;
    }
  }
`

export const tableHeader = css`
  color: ${colors.darkGrey};
  font-size: ${fontSize.medium};

  @media (${queries.tablet}) {
    font-size: ${fontSize.small};
  }

  & > tr {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: ${colors.white};
    border-bottom: 1px solid ${colors.lightGrey};

    & > th {
      padding: 1.5rem 0;
      text-align: left;

      &:first-of-type {
        padding-left: 5rem;

        @media (${queries.tablet}) {
          padding-left: 2rem;
        }
      }
    }
  }
`

export const tableBody = css`
  width: 100%;
`

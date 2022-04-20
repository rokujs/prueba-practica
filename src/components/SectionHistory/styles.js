import { css } from '@emotion/react'
import { colors, fontSize } from '@/styles/theme'

export const container = css`
margin-top: 2rem;
  border-radius: 1.5rem;
  overflow: hidden;
`

export const tableContainer = css`
  width: 100%;
  background-color: ${colors.white};
  height: 45vh;
  overflow-y: auto;

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
  }
`

export const headerContainer = css`
  background: linear-gradient(to right, ${colors.blue} 0%, ${colors.red} 150%);
  width: 100%;
  padding: 1.2rem 3rem;
  font-size: ${fontSize.large};
  color: ${colors.white};
`

export const tableHeader = css`
  color: ${colors.darkGrey};
  font-size: ${fontSize.medium};

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
      }
    }
  }
`

export const tableBody = css`
  width: 100%;
`

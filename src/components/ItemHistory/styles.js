import { css } from '@emotion/react'
import { colors, fontSize, queries } from '@/styles/theme'

export const item = (transaction) => css`
  border-left: 1rem solid ${transaction ? colors.blue : colors.lightGrey};
  border-bottom: 1px solid ${colors.lightGrey};

  & > td {
    color: ${colors.lightGrey};
    font-size: ${fontSize.medium};
    padding: 2rem 0;

    @media (${queries.tablet}) {
      font-size: ${fontSize.small};
    }

    &:first-of-type {
      color: ${colors.blue};
      padding-left: 5rem;

      @media (${queries.tablet}) {
        padding-left: 2rem;
      }
    }

    & > p {
      font-size: ${fontSize.small};
      margin: .5rem 0;

      &:first-of-type {
        font-size: ${fontSize.medium};
        color: ${colors.blue};

        &:before {
          content: "$";
        }
      }
    }
  }
`

export const negative = css`
  color: ${colors.lightRed};

  &:before {
    content: "-$";
  }
`

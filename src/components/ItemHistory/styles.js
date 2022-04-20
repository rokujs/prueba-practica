import { css } from '@emotion/react'
import { colors, fontSize } from '@/styles/theme'

export const item = css`
  border-left: 1rem solid ${colors.blue};

  & > td {
    /* text-align: center; */
    color: ${colors.lightGrey};
    font-size: ${fontSize.medium};
    padding: 2rem 0;
    border-bottom: 1px solid ${colors.lightGrey};

    &:first-of-type {
      color: ${colors.blue};
      padding-left: 5rem;
    }
  }
`

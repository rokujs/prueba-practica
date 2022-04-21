import { useContext } from 'react'

import context from '@/context/SalesContext'

import { container, title, totalMoney, date as StylesDate, content } from './styles'

function CardInfo () {
  const { viewDate, amount, startDate } = useContext(context)

  return (
    <div css={container}>
      <h3 css={title}>Total de ventas de {viewDate}</h3>
      <div css={content}>
        <p css={totalMoney}>{amount}</p>
        <p css={StylesDate}>{startDate}</p>
      </div>
    </div>
  )
}

export default CardInfo

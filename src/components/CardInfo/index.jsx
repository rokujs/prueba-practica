import { container, title, totalMoney, date, content } from './styles'

function CardInfo() {
  return (
    <div css={container}>
      <h3 css={title}>Total de ventas de dia selección</h3>
      <div css={content}>
        <p css={totalMoney}>1'560.000</p>
        <p css={date}>Septiembre, 2020</p>
      </div>
    </div>
  )
}

export default CardInfo

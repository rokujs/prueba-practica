import { item, negative } from './styles'

function ItemHistory ({
  id,
  paymentMethod,
  numbersCard,
  amount,
  transaction,
  date,
  deduction
}) {
  return (
    <tr css={item(transaction)}>
      <td>{transaction ? 'Cobro Exitoso' : 'Cobro no realizado'}</td>
      <td>{date}</td>
      <td>**** **** **** {numbersCard}</td>
      <td>{id}</td>
      <td>
        <p>{amount}</p>
        {deduction > 0 && (
          <>
            <p>Deducción Bold</p>
            <p css={negative}>{deduction}</p>
          </>
        )}
      </td>
    </tr>
  )
}

export default ItemHistory

import { useState, useEffect } from 'react'

import getSales from '@/services/getSales'
import ItemHistory from '@/components/ItemHistory'

function ListOfItemsHistory () {
  const [isLoading, setIsLoading] = useState(true)
  const [historyItems, setHistoryItems] = useState([])

  useEffect(() => {
    getSales().then(data => {
      setHistoryItems(data.today.transactions)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return (
      <tr>
        <td>
          <div>Loading...</div>
        </td>
      </tr>
    )
  }

  return (
    <>
      {historyItems.map(
        ({ id, paymentMethod, amount, transaction, date, deduction }) => (
          <ItemHistory
            key={id}
            id={id}
            paymentMethod={paymentMethod.name}
            numbersCard={paymentMethod.numbers}
            amount={amount}
            transaction={transaction}
            date={date}
            deduction={deduction}
          />
        )
      )}
    </>
  )
}

export default ListOfItemsHistory

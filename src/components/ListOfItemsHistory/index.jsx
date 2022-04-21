import { useState, useEffect, useContext } from 'react'

import getSales from '@/services/getSales'
import { styleAmount } from '@/utils/styleAmount'
import { styleDate } from '@/utils/styleDate'
import context from '@/context/SalesContext'
import ItemHistory from '@/components/ItemHistory'
import Spinner from '@/components/Spinner'

function ListOfItemsHistory () {
  const [isLoading, setIsLoading] = useState(true)
  const { historyItems, dispatch } = useContext(context)

  useEffect(() => {
    getSales().then(res => {
      dispatch({ type: 'SET_DATA', payload: res })
      dispatch({ type: 'TODAY' })
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return (
      <tr>
        <td>
          <Spinner />
        </td>
      </tr>
    )
  }

  return (
    <>
      {historyItems.map(
        ({ id, paymentMethod, amount, transaction, date, deduction }) => {
          const newDate = styleDate(date)
          const newAmount = styleAmount(amount)
          const newDeduction = styleAmount(deduction)

          return (
            <ItemHistory
              key={id}
              id={id}
              paymentMethod={paymentMethod.name}
              numbersCard={paymentMethod.numbers}
              amount={newAmount}
              transaction={transaction}
              date={newDate}
              deduction={newDeduction}
            />
          )
        }
      )}
    </>
  )
}

export default ListOfItemsHistory

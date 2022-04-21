import React, { useReducer } from 'react'

import { styleAmount } from '@/utils/styleAmount'
import { styleDay, styleMonth } from '@/utils/styleDate'

const Context = React.createContext({})

const initailState = {
  data: [],
  historyItems: [],
  date: 'today',
  amount: 0,
  startDate: '',
  viewDate: 'hoy'
}

function reducer (state, action) {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload
      }
    case 'TODAY':
      return {
        ...state,
        viewDate: 'hoy',
        date: 'today',
        historyItems: state.data.today.transactions,
        amount: styleAmount(state.data.today.totalAmount),
        startDate: styleDay(state.data.today.dateStart)
      }
    case 'WEEK':
      return {
        ...state,
        viewDate: 'esta semana',
        date: 'week',
        historyItems: state.data.week.transactions,
        amount: styleAmount(state.data.week.totalAmount),
        startDate: styleDay(state.data.week.dateStart)
      }
    case 'MONTH':
      return {
        ...state,
        viewDate: 'abril',
        date: 'month',
        historyItems: state.data.month.transactions,
        amount: styleAmount(state.data.month.totalAmount),
        startDate: styleMonth(state.data.month.dateStart)
      }
    default:
      return state
  }
}

export function SalesContextProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initailState)

  return (
    <Context.Provider
      value={{
        dispatch,
        date: state.date,
        amount: state.amount,
        viewDate: state.viewDate,
        startDate: state.startDate,
        historyItems: state.historyItems
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context

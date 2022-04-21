import { useContext } from 'react'

import context from '@/context/SalesContext'

import { menu, container, active } from './styles'

function NavbarTime () {
  const { dispatch, date } = useContext(context)

  return (
    <nav css={container}>
      <ul css={menu}>
        <li>
          <button
            onClick={() => dispatch({ type: 'TODAY' })}
            css={date === 'today' && active}
          >
            Hoy
          </button>
        </li>
        <li>
          <button
            onClick={() => dispatch({ type: 'WEEK' })}
            css={date === 'week' && active}
          >
            Esta semana
          </button>
        </li>
        <li>
          <button
            onClick={() => dispatch({ type: 'MONTH' })}
            css={date === 'month' && active}
          >
            Abril
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default NavbarTime

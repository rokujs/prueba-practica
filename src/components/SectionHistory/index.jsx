import { useContext } from 'react'

import Context from '@/context/SalesContext'
import ListOfItemsHistory from '@/components/ListOfItemsHistory'

import {
  container,
  headerContainer,
  tableHeader,
  tableBody,
  tableContainer
} from './styles'

function SectionHistory () {
  const { viewDate } = useContext(Context)
  return (
    <section css={container}>
      <header css={headerContainer}>Tus ventas de {viewDate}</header>
      <div css={tableContainer}>
        <table>
          <thead css={tableHeader}>
            <tr>
              <th>Transacción</th>
              <th>Fecha y hora</th>
              <th>Método de pago</th>
              <th>ID transacción Bold</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody css={tableBody}>
            <ListOfItemsHistory />
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default SectionHistory

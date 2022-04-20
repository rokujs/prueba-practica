import ItemHistory from '@/components/ItemHistory'

import { container, headerContainer, tableHeader, tableBody, tableContainer } from './styles'

function SectionHistory () {
  return (
    <section css={container}>
      <header css={headerContainer}>Tus ventas del dia seleccionado</header>
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
            <ItemHistory />
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default SectionHistory

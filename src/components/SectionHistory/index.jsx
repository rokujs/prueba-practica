import React from "react"
import ItemHistory from "@/components/ItemHistory"

function SectionHistory() {
  return (
    <section>
      <header>Tus ventas del dia seleccionado</header>
      <table>
        <thead>
          <tr>
            <th>Transacción</th>
            <th>Fecha y hora</th>
            <th>Método de pago</th>
            <th>ID transacción Bold</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          <ItemHistory />
        </tbody>
      </table>
    </section>
  )
}

export default SectionHistory

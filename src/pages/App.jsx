import Header from "@/components/Header"
import React from "react"

function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <article>
            <h3>Total de ventas de dia seleccionado</h3>
            <p>1'560.000</p>
            <p>Septiembre, 2020</p>
          </article>
          <article>
            <nav>
              <ul>
                <li>Hoy</li>
                <li>Esta semana</li>
                <li>Septiembre</li>
              </ul>
            </nav>
          </article>
          <article>
            <button>FILTRAR</button>
          </article>
        </section>
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
              <tr>
                <td>Cobro exitoso</td>
                <td>04/06/2020 - 17:14:24</td>
                <td>**** **** **** 7711</td>
                <td>IDLAÑDJFLKSADJF</td>
                <td>$25.000</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  )
}

export default App

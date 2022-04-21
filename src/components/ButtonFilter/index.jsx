import { useState } from 'react'
import { btn, container, form } from './styles'

function ButtonFilter () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div css={container}>
      <button onClick={() => setIsOpen(true)} css={btn}>
        <span>FILTRAR</span>
      </button>
      {isOpen && (
        <div css={form}>
          <div>
            <h5>FILTRAR</h5>
            <button type='button' onClick={() => setIsOpen(false)}>X</button>
          </div>
          <form>
            <div>
              <label>
                <input type='checkbox' />
                <span>Cobro con datáfono</span>
              </label>
            </div>
            <div>
              <label>
                <input type='checkbox' />
                <span>Cobros con link de pago</span>
              </label>
            </div>
            <div>
              <label>
                <input type='checkbox' />
                <span>Ver todos</span>
              </label>
            </div>
            <button type='button'>Aplicar</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default ButtonFilter

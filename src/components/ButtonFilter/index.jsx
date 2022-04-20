import { btn, container } from "./styles"

function ButtonFilter() {
  return (
    <div css={container}>
      <button css={btn}>
        <span>FILTRAR</span>
      </button>
    </div>
  )
}

export default ButtonFilter

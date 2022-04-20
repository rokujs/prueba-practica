import { menu, container } from './styles'

function NavbarTime() {
  return (
    <nav css={container}>
      <ul css={menu}>
        <li>Hoy</li>
        <li>Esta semana</li>
        <li>Septiembre</li>
      </ul>
    </nav>
  )
}

export default NavbarTime

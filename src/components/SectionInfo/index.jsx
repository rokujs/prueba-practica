import CardInfo from "@/components/CardInfo"
import NavbarTime from "@/components/NavbarTime"
import ButtonFilter from "@/components/ButtonFilter"

import { container, card, navbar, filter } from './styles'

function SectionInfo() {
  return (
    <section css={container}>
      <article css={card}>
        <CardInfo />
      </article>
      <article css={navbar}>
        <NavbarTime />
      </article>
      <article css={filter}>
        <ButtonFilter />
      </article>
    </section>
  )
}

export default SectionInfo

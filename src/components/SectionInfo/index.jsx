import React from "react"
import CardInfo from "@/components/CardInfo"
import NavbarTime from "@/components/NavbarTime"
import ButtonFilter from "@/components/ButtonFilter"

function SectionInfo() {
  return (
    <section>
      <article>
        <CardInfo />
      </article>
      <article>
        <NavbarTime />
      </article>
      <article>
        <ButtonFilter />
      </article>
    </section>
  )
}

export default SectionInfo

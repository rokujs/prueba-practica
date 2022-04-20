import Header from '@/components/Header'
import SectionInfo from '@/components/SectionInfo'
import SectionHistory from '@/components/SectionHistory'

import { container, main } from './styles'

function LayoutApp () {
  return (
    <div css={container}>
      <Header />
      <main css={main}>
        <SectionInfo />
        <SectionHistory />
      </main>
    </div>
  )
}

export default LayoutApp

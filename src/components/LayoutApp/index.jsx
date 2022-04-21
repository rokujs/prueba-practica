import Header from '@/components/Header'
import SectionInfo from '@/components/SectionInfo'
import SectionHistory from '@/components/SectionHistory'

import { SalesContextProvider } from '@/context/SalesContext'

import { container, main } from './styles'

function LayoutApp () {
  return (
    <div css={container}>
      <Header />
      <main css={main}>
        <SalesContextProvider>
          <SectionInfo />
          <SectionHistory />
        </SalesContextProvider>
      </main>
    </div>
  )
}

export default LayoutApp

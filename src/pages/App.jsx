import Header from "@/components/Header"
import SectionInfo from "@/components/SectionInfo"
import SectionHistory from "@/components/SectionHistory"
import React from "react"

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <SectionInfo />
          <SectionHistory />
        </main>
      </div>
    </>
  )
}

export default App

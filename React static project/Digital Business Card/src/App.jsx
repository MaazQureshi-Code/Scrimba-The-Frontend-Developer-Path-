import { useState } from 'react'
import Info from './components/info'
import About from './components/About'
import Interest  from './components/interests'
import Footer from './components/Foot'
import './App.css'

function App() {

  return (
    <>
      <header>
        <Info  />
      </header>
      <main>
        <About />
        <Interest />
      </main>

      <footer>
      <Footer />
      </footer>
    </>
  )
}

export default App

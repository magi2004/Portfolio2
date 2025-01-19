import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About />
      <Services />
      <Projects />
    </div>
  )
}

export default App
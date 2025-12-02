import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import TopBar from './components/TopBar/TopBar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import './App.css'

function App() {

  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Services />
    </>
  )
}

export default App

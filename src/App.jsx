import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import TopBar from './components/TopBar/TopBar'
import Hero from './components/Hero/Hero'
import './App.css'

function App() {

  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
    </>
  )
}

export default App

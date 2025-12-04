import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import TopBar from './components/TopBar/TopBar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import './App.css'

function App() {

  return (
    <>
      {/* 1. The Fixed Header Wrapper */}
      <div className="fixed top-0 left-0 w-full z-[1000] flex flex-col">
        <TopBar />   {/* Should no longer have 'fixed' or 'top-[...]' */}
        <Navbar />   {/* Should no longer have 'fixed' or 'top-[...]' */}
      </div>

      {/* 2. Main Content Area */}
      {/* Add padding-top (pt-32) to prevent content from hiding underneath the fixed header. 
          Adjust this value based on the combined height of the TopBar and Navbar. */}
      <main className="pt-32">
        <Hero />
        <Services />
      </main>
    </>
  )
}

export default App

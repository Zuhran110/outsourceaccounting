import Hero from './components/Hero/Hero'
import Services from './components/Services/Services.jsx'
import Outsource from './components/WhyOutsource/Outsource.jsx'
import JoinUs from "./components/JoinUs/JoinUs.jsx"
import HowWeWork from './components/HowWeWork/HowWeWork.jsx'

import './App.css'
import Layout from './layout'
import ClientsTestimonials from './components/ClientsTestimonials/ClientsTestimonials.jsx'

function App() {

  return (
    <Layout>

      <Hero />
      <Outsource />
      <Services />
      <HowWeWork />
      <JoinUs />
      <ClientsTestimonials />
    </Layout>
  )
}

export default App

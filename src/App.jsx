import Hero from './components/Hero/Hero'
import Services from './components/Services/Services.jsx'
import Outsource from './components/WhyOutsource/Outsource.jsx'
import './App.css'
import Layout from './layout'

function App() {

  return (
    <Layout>

      <Hero />
      <Outsource />
      <Services />

    </Layout>
  )
}

export default App

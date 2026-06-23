import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="sec-hero">
        <Hero />
      </div>
      <div className="sec-about">   <About />   </div>
      <div className="sec-skills">  <Skills />  </div>
      <div className="sec-projects"><Projects /></div>
      <div className="sec-contact"> <Contact />  </div>
    </>
  )
}

export default App

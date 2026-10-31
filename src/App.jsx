import './App.css'
import Preloader from './components/Preloader'
import SplashCursor from './components/SplashCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Projects from './components/Projects'
import Internships from './components/Internships'
import Leadership from './components/Leadership'
import SoftSkills from './components/SoftSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Preloader />
      <SplashCursor />
      <Navbar />
      <Hero />
      <About />
      {/* IntroVideo — will be added later */}
      <TechnicalSkills />
      <Services />
      <Projects />
      <Internships />    {/* returns null when internshipsList is empty */}
      <Leadership />     {/* returns null when leadershipList is empty */}
      <SoftSkills />
      <Contact />
      <Footer />
    </>
  )
}

export default App

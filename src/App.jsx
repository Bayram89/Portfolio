import './App.css'
import Navigation from './components/navigation/navigation'
import Hero from './components/hero/hero'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Skills from './components/skills/skills'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import { projects } from './components/projects/data'
import { skills } from './components/skills/data'

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Hero scrollToSection={scrollToSection}>
        <Navigation scrollToSection={scrollToSection} />
      </Hero>
      <About />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}

export default App

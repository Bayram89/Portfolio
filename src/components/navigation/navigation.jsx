import './navigation.css'

function Navigation({ scrollToSection }) {
  return (
    <nav className="nav">
      <div className="nav-content">
        <div className="nav-logo">BE</div>
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
          <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation

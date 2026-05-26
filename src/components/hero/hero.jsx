import './hero.css'

function Hero({ scrollToSection, children }) {
  return (
    <header className="hero" id="home">
      {children}
      <div className="hero-content">
        <h1 className="hero-title">Bayram Erdem</h1>
        <p className="hero-subtitle">Junior Software Engineer (Full-Stack)</p>
        <p className="hero-tagline">Building clean, functional, and user-friendly web experiences</p>
        <button className="hero-cta" onClick={() => scrollToSection('contact')}>
          Get In Touch
        </button>
      </div>
    </header>
  )
}

export default Hero

import './hero.css'
import recentPic from '../../assets/recent-pic.png'

function Hero({ scrollToSection, children }) {
  return (
    <header className="hero" id="home">
      {children}
      <div className="hero-content">
        <div className="hero-copy">
          <h1 className="hero-title">Bayram Erdem</h1>
          <p className="hero-subtitle">Software Engineer (Full-Stack)</p>
          <p className="hero-tagline">Building clean, functional, and user-friendly web experiences</p>
          <button className="hero-cta" onClick={() => scrollToSection('contact')}>
            Get In Touch
          </button>
        </div>
        <div className="hero-photo-frame">
          <img
            className="hero-photo"
            src={recentPic}
            alt="Bayram Erdem portrait"
          />
        </div>
      </div>
    </header>
  )
}

export default Hero

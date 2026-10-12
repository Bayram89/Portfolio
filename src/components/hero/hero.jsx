import './hero.css'
import recentPic from '../../assets/recent-pic.png'

function Hero({ scrollToSection, children }) {
  return (
    <header className="hero" id="home">
      {children}
      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Copenhagen, Denmark / People &amp; software</p>
          <h1 className="hero-title">Bayram Erdem</h1>
          <p className="hero-subtitle">Junior Full-Stack Software Developer</p>
          <p className="hero-tagline">+8 years leading teams and workshops. Now building the systems behind the screen.</p>
          <button className="hero-cta" onClick={() => scrollToSection('contact')}>
            Get In Touch
          </button>
          <button className="hero-projects" onClick={() => scrollToSection('projects')}>See what I&apos;m building &rarr;</button>
        </div>
        <div className="hero-photo-frame">
          <img
            className="hero-photo"
            src={recentPic}
            alt="Bayram Erdem portrait"
          />
          <p className="photo-caption">Hey, I&apos;m Bayram. Good to meet you.</p>
        </div>
      </div>
      <div className="hero-footnote"><span>From leading workshops to building APIs.</span><span>Still curious. Still learning.</span></div>
    </header>
  )
}

export default Hero

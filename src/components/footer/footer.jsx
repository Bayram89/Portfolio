import './footer.css'

function Footer({ scrollToSection }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">&copy; 2025 Bayram Erdem. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/Bayram89" className="footer-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/bayramerdem/" className="footer-link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <button className="back-to-top" onClick={() => scrollToSection('home')}>
          ↑
        </button>
      </div>
    </footer>
  )
}

export default Footer

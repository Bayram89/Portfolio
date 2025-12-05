import './contact.css'

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-grid">
          <a href="mailto:bayram9erdem@gmail.com" className="contact-card">
            <div className="contact-icon email-icon"></div>
            <h3 className="contact-title">Email</h3>
            <p className="contact-detail">bayram9erdem@gmail.com</p>
          </a>
          <a href="https://github.com/Bayram89" className="contact-card" target="_blank" rel="noopener noreferrer">
            <div className="contact-icon github-icon"></div>
            <h3 className="contact-title">GitHub</h3>
            <p className="contact-detail">@Bayram89</p>
          </a>
          <a href="https://www.linkedin.com/in/bayramerdem/" className="contact-card" target="_blank" rel="noopener noreferrer">
            <div className="contact-icon linkedin-icon"></div>
            <h3 className="contact-title">LinkedIn</h3>
            <p className="contact-detail">Bayram Erdem</p>
          </a>
          <div className="contact-card location-card">
            <div className="contact-icon location-icon"></div>
            <h3 className="contact-title">Location</h3>
            <p className="contact-detail">Copenhagen, Denmark</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

import './about.css'

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-avatar">
            <div className="avatar-circle">BE</div>
          </div>
          <div className="about-text">
            <p>
              Hey, I&apos;m Bayram.
            </p>
            <p>
              I&apos;m a junior software developer who enjoys building human-friendly web applications. I mostly work with React, JavaScript, Node.js, MySQL, and Python, and I like turning rough ideas into something clean, practical, and easy to use.
            </p>
            <p>
              Before moving into tech, I spent years coordinating international projects, working closely with people, solving problems, and keeping things moving. That experience still shapes how I work today. I care about clear communication, teamwork, and building things that actually help people.
            </p>
            <p>
              Lately, I&apos;ve been especially interested in AI, thoughtful product ideas, and small tools that make everyday work simpler. I&apos;m still learning, still building, and enjoying the process of becoming better with every project.
            </p>
            <p>
              Outside of coding, I&apos;m usually enjoying good food, fixing something small DIY at home, or out hiking between lakes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

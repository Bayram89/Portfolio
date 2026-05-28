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
              I build web apps and enjoy turning ideas into something real and useful. Most of the time I work with React, Node.js, JavaScript, and MySQL.
            </p>
            <p>
              Before tech, I spent years working with people, coordinating projects, solving problems, and keeping things moving. That part of me never changed. I still enjoy bringing people together just as much as building software.
            </p>
            <p>
              These days I&apos;m curious about AI, good product ideas, and simple tools that actually make life easier.
            </p>
            <p>
              Outside of coding, I&apos;m usually somewhere in nature, drinking coffee, eating good food, or having long conversations with good people.
            </p>
            <p>
              Glad you stopped by.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

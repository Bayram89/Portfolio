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
              Hey, I'm Bayram. I'm a full stack web developer based in Copenhagen. I recently finished a year long bootcamp and I built projects with HTML, CSS, JavaScript, React, Node.js, Next.js, and MySQL. It was intense, but I loved every part of it. Now I'm putting this portfolio together to share what I've been building and where I'm headed next.
            </p>
            <p>
              I also help out at HackYourFuture Denmark, keeping our developers, mentors, and volunteers connected and moving forward. I've always had a passion for working with people and seeing what's possible when a team clicks.
            </p>
            <p>
              Before coding, I spent over eight years coordinating international projects in the medical field. It taught me a lot about trust, teamwork, and getting things done, lessons I carry into tech every day.
            </p>
            <p>
              Lately, I've been exploring how AI can make work simpler and more meaningful. I like building things that help people communicate better and work smarter.
            </p>
            <p>
              Outside of all that, I try to keep life simple, like good food, good people and time to breathe out in the nature.
            </p>
            <p>
              Thanks for stopping by. If something here speaks to you, don't hesitate to say hi.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

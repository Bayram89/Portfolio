import './projects.css'

function Projects({ projects }) {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">What I&apos;ve been building, from everyday tools to the systems behind an API.</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <span className="project-number">{String(index + 1).padStart(2, '0')} / {project.demo ? 'Web application' : 'Backend & tools'}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span className="tech-tag" key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  <span className="link-icon">{"</>"}</span>
                  GitHub
                </a>
                {project.demo && (
                  <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                    <span className="link-icon">↗</span>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

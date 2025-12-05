import './skills.css'

function Skills({ skills }) {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">Tools and technologies I work with</p>
        <div className="skills-container">
          {Object.entries(skills).map(([category, items], index) => (
            <div className="skills-category" key={index}>
              <h3 className="skills-category-title">{category}</h3>
              <div className="skills-grid">
                {items.map((skill, i) => (
                  <div className="skill-card" key={i}>
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

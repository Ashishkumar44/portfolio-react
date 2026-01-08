import React from 'react';

const Skills = () => {
  const frontendSkills = [
    { icon: 'fab fa-html5', name: 'HTML5', level: 95 },
    { icon: 'fab fa-css3-alt', name: 'CSS3', level: 90 },
    { icon: 'fab fa-js', name: 'JavaScript', level: 85 },
    { icon: 'fab fa-react', name: 'React.js', level: 80 },
    { icon: 'fab fa-bootstrap', name: 'Bootstrap', level: 85 },
    { icon: 'fas fa-wind', name: 'Tailwind CSS', level: 88 }
  ];

  const backendSkills = [
    { icon: 'fab fa-node', name: 'Node.js', level: 75 },
    { icon: 'fas fa-server', name: 'Express.js', level: 70 },
    { icon: 'fas fa-database', name: 'MongoDB', level: 75 },
    { icon: 'fas fa-database', name: 'MySQL', level: 70 }
  ];

  const toolsSkills = [
    { icon: 'fab fa-git-alt', name: 'Git & GitHub', level: 85 },
    { icon: 'fab fa-java', name: 'Java', level: 75 },
    { icon: 'fas fa-shield-alt', name: 'JWT/AWS', level: 80 },
    { icon: 'fas fa-cloud', name: 'Vercel', level: 85 }
  ];

  const SkillCategory = ({ title, icon, skills }) => (
    <div className="skill-category">
      <h3><i className={icon}></i> {title}</h3>
      <div className="skill-items">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item" data-skill={skill.level}>
            <i className={skill.icon}></i>
            <span>{skill.name}</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-container">
          <SkillCategory title="Frontend" icon="fas fa-laptop-code" skills={frontendSkills} />
          <SkillCategory title="Backend" icon="fas fa-server" skills={backendSkills} />
          <SkillCategory title="Tools & Others" icon="fas fa-tools" skills={toolsSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;

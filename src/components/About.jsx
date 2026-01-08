import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-card card-3d">
            <div className="card-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>Education</h3>
            <p><strong>B.Tech in Computer Science</strong></p>
            <p>Mangalmay Institute of Engineering and Technology</p>
            <p>Greater Noida (AKTU, Lucknow)</p>
            <p className="year">4th Year Student</p>
          </div>
          <div className="about-card card-3d">
            <div className="card-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Passion</h3>
            <p>💻 Crafting beautiful & functional web experiences</p>
            <p>🚀 Turning innovative ideas into reality</p>
            <p>🔥 Solving complex problems with elegant code</p>
            <p className="highlight">Continuous learner | Tech enthusiast | Innovation driven</p>
          </div>
          <div className="about-card card-3d">
            <div className="card-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h3>Goal</h3>
            <p>🎯 Build products that make a difference</p>
            <p>🌟 Contribute to impactful open-source projects</p>
            <p>📈 Master full-stack development & cloud technologies</p>
            <p className="highlight">Creating value through innovation & excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

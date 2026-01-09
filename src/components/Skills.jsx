import React, { useEffect } from 'react';

function Skills() {
  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const categories = document.querySelectorAll('.skill-category');
    categories.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(50px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });

    // Skill bars animation
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.style.width;
          bar.style.width = '0';
          setTimeout(() => {
            bar.style.width = width;
          }, 100);
          skillObserver.unobserve(bar);
        }
      });
    }, observerOptions);

    skillBars.forEach(bar => skillObserver.observe(bar));

    return () => {
      categories.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3><i className="fas fa-laptop-code"></i> Frontend</h3>
            <div className="skill-items">
              <div className="skill-item" data-skill="95">
                <i className="fab fa-html5"></i>
                <span>HTML5</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '95%'}}></div>
                </div>
              </div>
              <div className="skill-item" data-skill="90">
                <i className="fab fa-css3-alt"></i>
                <span>CSS3</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="skill-item" data-skill="85">
                <i className="fab fa-js"></i>
                <span>JavaScript</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="skill-item" data-skill="80">
                <i className="fab fa-react"></i>
                <span>React.js</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '80%'}}></div>
                </div>
              </div>
              <div className="skill-item" data-skill="85">
                <i className="fab fa-bootstrap"></i>
                <span>Bootstrap</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="skill-item" data-skill="88">
                <i className="fas fa-wind"></i>
                <span>Tailwind CSS</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '88%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-server"></i> Backend</h3>
            <div className="skill-items">
              <div className="skill-item" data-skill="75">
                <i className="fab fa-node"></i>
                <span>Node.js</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="skill-item" data-skill="70">
                <i className="fas fa-server"></i>
                <span>Express.js</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '70%'}}></div>
                </div>
              </div>
              <div className="skill-item" data-skill="75">
                <i className="fas fa-database"></i>
                <span>MongoDB</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="skill-item" data-skill="70">
                <i className="fas fa-database"></i>
                <span>MySQL</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-tools"></i> Tools & Others</h3>
            <div className="skill-items">
              <div className="skill-item" data-skill="85">
                <i className="fab fa-git-alt"></i>
                <span>Git & GitHub</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="skill-item" data-skill="75">
                <i className="fab fa-java"></i>
                <span>Java</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="skill-item" data-skill="80">
                <i className="fas fa-shield-alt"></i>
                <span>JWT/AWS</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '80%'}}></div>
                </div>
              </div>
              <div className="skill-item" data-skill="85">
                <i className="fas fa-cloud"></i>
                <span>Vercel</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

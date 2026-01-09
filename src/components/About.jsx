import React, { useEffect } from 'react';

function About() {
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

    const cards = document.querySelectorAll('.about-card');
    cards.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(50px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });

    // 3D tilt effect for cards
    const cards3D = document.querySelectorAll('.card-3d');
    cards3D.forEach(card => {
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
      };
      
      const handleMouseLeave = () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
      };
      
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      cards.forEach(el => observer.unobserve(el));
    };
  }, []);

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
}

export default About;

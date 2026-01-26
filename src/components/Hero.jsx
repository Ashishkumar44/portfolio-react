import React, { useState, useEffect, useMemo } from 'react';

const Hero = () => {
  const [titleText, setTitleText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = useMemo(() => ['Full Stack Developer & Problem Solver', 'Web Developer', 'MERN Stack Developer', 'Software Engineer'], []);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentTitle.length) {
        setTitleText(currentTitle.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setTitleText(currentTitle.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex, titles]);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="glitch" data-text="Hi, I'm Ashish Kumar">Hi, I'm Ashish Kumar</h1>
          <h2 className="title-animate">{titleText || 'Full Stack Developer & Problem Solver'}</h2>
          <p className="hero-description">
            Enthusiastic Software Developer with hands-on experience in building interactive projects using React, Tailwind CSS, 
            and JavaScript. Eager to learn and grow in a collaborative environment while delivering pixel-perfect and optimized 
            web applications.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <span>View My Work</span>
              <i className="fas fa-arrow-right"></i>
            </a>
            <a href="https://drive.google.com/file/d/1TV13PqO-rR1hyCPHqXVmcGEDIDJ7plI1/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <span>Download Resume</span>
              <i className="fas fa-download"></i>
            </a>
          </div>
          <div className="social-links">
            <a href="https://github.com/Ashishkumar44" target="_blank" rel="noopener noreferrer" className="social-icon" data-tooltip="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ashish-kumar44/" target="_blank" rel="noopener noreferrer" className="social-icon" data-tooltip="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="social-icon" data-tooltip="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="mailto:ashishsahay5@gmail.com" className="social-icon" data-tooltip="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-card">
            <div className="card-inner">
              <div className="avatar-container">
                <img src="https://avatars.githubusercontent.com/u/203948727?v=4" alt="Ashish Kumar" className="avatar" />
                <div className="status-indicator"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;

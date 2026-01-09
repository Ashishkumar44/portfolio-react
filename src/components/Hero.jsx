import React, { useEffect, useState } from 'react';

function Hero() {
  const [titleText, setTitleText] = useState('');

  useEffect(() => {
    const titles = ['Full Stack Developer', 'Web Developer', 'MERN Stack Developer', 'Software Engineer'];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeTitle() {
      const currentTitle = titles[titleIndex];
      
      if (isDeleting) {
        setTitleText(currentTitle.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTitleText(currentTitle.substring(0, charIndex + 1));
        charIndex++;
      }
      
      let typeSpeed = isDeleting ? 50 : 100;
      
      if (!isDeleting && charIndex === currentTitle.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typeSpeed = 500;
      }
      
      setTimeout(typeTitle, typeSpeed);
    }
    
    const timeout = setTimeout(typeTitle, 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Floating card 3D effect
    const floatingCard = document.querySelector('.floating-card');
    if (floatingCard) {
      const handleMouseMove = (e) => {
        const rect = floatingCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        const cardInner = floatingCard.querySelector('.card-inner');
        cardInner.style.transform = 
          `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      };
      
      const handleMouseLeave = () => {
        const cardInner = floatingCard.querySelector('.card-inner');
        cardInner.style.transform = 
          'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      };
      
      floatingCard.addEventListener('mousemove', handleMouseMove);
      floatingCard.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        floatingCard.removeEventListener('mousemove', handleMouseMove);
        floatingCard.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="glitch" data-text="Hi, I'm Ashish Kumar">Hi, I'm Ashish Kumar</h1>
          <h2 className="title-animate">{titleText}<span className="cursor">|</span></h2>
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
            <a href="https://drive.google.com/file/d/1dC7IWEWMSrYxyr-6XkyCbLLiX0Mpt6KF/view" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
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
            <a href="https://wa.me/917451915256" target="_blank" rel="noopener noreferrer" className="social-icon" data-tooltip="WhatsApp">
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
}

export default Hero;

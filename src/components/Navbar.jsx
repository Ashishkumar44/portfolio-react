import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Navbar scroll effect
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const navbar = document.querySelector('.navbar');
      
      if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
      } else {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
      }
      
      // Hide/show navbar on scroll
      if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }
      
      setLastScroll(currentScroll);

      // Active nav link on scroll
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href');
      const target = document.querySelector(targetId);
      
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
      
      // Close mobile menu
      setIsMenuActive(false);
    };

    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <span className="logo-text">AK</span>
        </div>
        <ul className={`nav-menu ${isMenuActive ? 'active' : ''}`}>
          <li><a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a></li>
          <li><a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a></li>
          <li><a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a></li>
          <li><a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a></li>
          <li><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a></li>
        </ul>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span style={{
            transform: isMenuActive ? 'rotate(45deg) translateY(10px)' : '',
          }}></span>
          <span style={{
            opacity: isMenuActive ? '0' : '1',
          }}></span>
          <span style={{
            transform: isMenuActive ? 'rotate(-45deg) translateY(-10px)' : '',
          }}></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

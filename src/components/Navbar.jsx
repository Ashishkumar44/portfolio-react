import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [navbarStyle, setNavbarStyle] = useState({ boxShadow: 'none', transform: 'translateY(0)' });
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      
      // Box shadow effect
      if (currentScroll <= 0) {
        setNavbarStyle(prev => ({ ...prev, boxShadow: 'none' }));
      } else {
        setNavbarStyle(prev => ({ ...prev, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }));
      }
      
      // Hide/show navbar on scroll
      if (currentScroll > lastScroll && currentScroll > 100) {
        setNavbarStyle(prev => ({ ...prev, transform: 'translateY(-100%)' }));
      } else {
        setNavbarStyle(prev => ({ ...prev, transform: 'translateY(0)' }));
      }
      
      setLastScroll(currentScroll);

      // Active nav link detection
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

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const handleNavClick = () => {
    setIsMenuActive(false);
  };

  const navLinks = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#skills', text: 'Skills' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' }
  ];

  return (
    <nav className="navbar" style={navbarStyle}>
      <div className="nav-container">
        <div className="logo">
          <span className="logo-text">AK</span>
        </div>
        <ul className={`nav-menu ${isMenuActive ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                onClick={handleNavClick}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span style={{
            transform: isMenuActive ? 'rotate(45deg) translateY(10px)' : ''
          }}></span>
          <span style={{
            opacity: isMenuActive ? '0' : '1'
          }}></span>
          <span style={{
            transform: isMenuActive ? 'rotate(-45deg) translateY(-10px)' : ''
          }}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

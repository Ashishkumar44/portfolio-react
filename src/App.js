import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Console messages
    console.log('%c👋 Hi there!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
    console.log('%cThanks for checking out my portfolio!', 'font-size: 14px; color: #8b5cf6;');
    console.log('%cFeel free to reach out if you want to collaborate!', 'font-size: 14px; color: #ec4899;');
    console.log('%c🚀 Portfolio Loaded Successfully!', 'font-size: 16px; font-weight: bold; color: #22c55e;');

    // Cursor trail effect
    const coords = { x: 0, y: 0 };
    const circles = [];

    // Create cursor circles
    for (let i = 0; i < 20; i++) {
      const circle = document.createElement('div');
      circle.className = 'circle';
      circle.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        pointer-events: none;
        z-index: 9999;
        opacity: ${1 - i * 0.05};
        transition: transform 0.1s ease;
      `;
      document.body.appendChild(circle);
      circles.push(circle);
      circle.x = 0;
      circle.y = 0;
    }

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;
      
      circles.forEach((circle, index) => {
        circle.style.left = x - 5 + 'px';
        circle.style.top = y - 5 + 'px';
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
        
        circle.x = x;
        circle.y = y;
        
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });
      
      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    // Particle background
    const particleContainer = document.querySelector('.animated-bg');
    if (particleContainer) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(99, 102, 241, 0.5);
          border-radius: 50%;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation: particleFloat ${5 + Math.random() * 10}s infinite ease-in-out;
        `;
        particleContainer.appendChild(particle);
      }
    }

    // Add particle animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes particleFloat {
        0%, 100% {
          transform: translate(0, 0);
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
        }
      }
    `;
    document.head.appendChild(style);

    // Scroll progress bar
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
      z-index: 9999;
      transition: width 0.2s ease;
    `;
    document.body.appendChild(progressBar);

    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      progressBar.style.width = scrolled + '%';
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      circles.forEach(circle => circle.remove());
      progressBar.remove();
    };
  }, []);

  return (
    <div className="App">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

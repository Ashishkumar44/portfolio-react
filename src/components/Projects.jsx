import React, { useEffect } from 'react';

function Projects() {
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

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(50px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);

      // Hover effect
      el.addEventListener('mouseenter', () => {
        el.style.zIndex = '10';
      });
      
      el.addEventListener('mouseleave', () => {
        el.style.zIndex = '1';
      });
    });

    return () => {
      projectCards.forEach(el => observer.unobserve(el));
    };
  }, []);

  const projects = [
    {
      title: 'Vibe Check App',
      description: 'A fun and interactive application to check your "vibe"! Built with modern web technologies.',
      image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800',
      tags: ['JavaScript', 'React', 'Vercel'],
      liveLink: 'https://vibe-check-app-eight.vercel.app/',
      githubLink: 'https://github.com/Ashishkumar44/Vibe-check-app'
    },
    {
      title: 'Prakriti Seva',
      description: 'Waste-management platform promoting responsible disposal, recycling, and environmental awareness through dharmic values.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
      tags: ['React.js', 'Node.js', 'MongoDB'],
      liveLink: 'https://prakriti-seva-the-eco-dharmik-platf.vercel.app/',
      githubLink: 'https://github.com/Ashishkumar44'
    },
    {
      title: 'Magma Clone',
      description: 'Front-end replica of Magma Web3 platform. Modern blockchain-powered real estate solution transforming buildings into digital assets.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://magmaclone-ivory.vercel.app/',
      githubLink: 'https://github.com/Ashishkumar44/MAGMACLONE'
    },
    {
      title: 'Meme Generator',
      description: 'Interactive meme generator with custom text and image manipulation features.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
      tags: ['JavaScript', 'React'],
      githubLink: 'https://github.com/Ashishkumar44/Meme-Generator'
    },
    {
      title: 'Simon Says Game',
      description: 'Classic memory game built with vanilla JavaScript. Test your memory skills!',
      image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800',
      tags: ['JavaScript', 'HTML', 'CSS'],
      githubLink: 'https://github.com/Ashishkumar44/Simon-Says-Game'
    },
    {
      title: 'Country App',
      description: 'Explore information about countries around the world with an intuitive interface.',
      image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800',
      tags: ['JavaScript', 'API'],
      githubLink: 'https://github.com/Ashishkumar44/Country-App'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card card-3d">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

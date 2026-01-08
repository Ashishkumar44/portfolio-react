import React from 'react';

const Projects = () => {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800',
      title: 'Vibe Check App',
      description: 'A fun and interactive application to check your "vibe"! Built with modern web technologies.',
      tags: ['JavaScript', 'React', 'Vercel'],
      liveLink: 'https://vibe-check-app-eight.vercel.app/',
      githubLink: 'https://github.com/Ashishkumar44/Vibe-check-app'
    },
    {
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
      title: 'Prakriti Seva',
      description: 'Waste-management platform promoting responsible disposal, recycling, and environmental awareness through dharmic values.',
      tags: ['React.js', 'Node.js', 'MongoDB'],
      liveLink: 'https://prakriti-seva-the-eco-dharmik-platf.vercel.app/',
      githubLink: 'https://github.com/Ashishkumar44'
    },
    {
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
      title: 'Magma Clone',
      description: 'Front-end replica of Magma Web3 platform. Modern blockchain-powered real estate solution transforming buildings into digital assets.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://magmaclone-ivory.vercel.app/',
      githubLink: 'https://github.com/Ashishkumar44/MAGMACLONE'
    },
    {
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
      title: 'Meme Generator',
      description: 'Interactive meme generator with custom text and image manipulation features.',
      tags: ['JavaScript', 'React'],
      githubLink: 'https://github.com/Ashishkumar44/Meme-Generator'
    },
    {
      image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800',
      title: 'Simon Says Game',
      description: 'Classic memory game built with vanilla JavaScript. Test your memory skills!',
      tags: ['JavaScript', 'HTML', 'CSS'],
      githubLink: 'https://github.com/Ashishkumar44/Simon-Says-Game'
    },
    {
      image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800',
      title: 'Country App',
      description: 'Explore information about countries around the world with an intuitive interface.',
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
};

export default Projects;

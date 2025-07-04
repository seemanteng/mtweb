// =============================================
// UPDATED PROJECTS.JS (Horizontal Layout)
// =============================================
import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <a 
            href="https://shimmering-frangollo-b5711a.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="project-content">
              <img 
                src="/images/smart-fridge-logo.png" 
                alt="Smart Fridge Project" 
                className="project-icon"
              />
              <div className="project-info">
                <h3 className="project-title">Smart Fridge</h3>
                <p className="project-description">An intelligent fridge management system</p>
              </div>
            </div>
          </a>
          
          {/* GitHub link positioned in bottom right */}
          <a 
            href="https://github.com/seemanteng/smart-fridge" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src="/images/github.png" 
              alt="GitHub Repository" 
              className="github-icon"
            />
            <span className="github-text">Click for github repo</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ activeSection, setActiveSection }) => {
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <ul className="nav-links">
          <li>
            <button 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => handleSectionChange('home')}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => handleSectionChange('about')}
            >
              About me
            </button>
          </li>
          <li>
            <button 
              className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
              onClick={() => handleSectionChange('portfolio')}
            >
              My Portfolio
            </button>
          </li>
          <li>
            <button 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => handleSectionChange('projects')}
            >
              Projects
            </button>
          </li>
        </ul>
        
        <div className="social-links">
          <span>Let's connect on</span>
          <a 
            href="https://github.com/seemanteng" 
            target="_blank" 
            rel="noopener noreferrer"
            title="Github"
            className="social-link"
          >
            <img 
              src="/images/github.png" 
              alt="Github" 
              className="social-icon"
            />
          </a>
          <a 
            href="https://www.instagram.com/mantxng/" 
            target="_blank" 
            rel="noopener noreferrer"
            title="Instagram"
            className="social-link"
          >
            <img 
              src="/images/instagram.svg" 
              alt="Instagram" 
              className="social-icon"
            />
          </a>
          <a 
            href="https://www.linkedin.com/in/man-teng-see-500552268" 
            target="_blank" 
            rel="noopener noreferrer"
            title="LinkedIn"
            className="social-link"
          >
            <img 
              src="/images/linkedin.svg" 
              alt="LinkedIn" 
              className="social-icon"
            />
          </a>
          <a 
            href="https://t.me/mantxng14" 
            target="_blank" 
            rel="noopener noreferrer"
            title="Telegram"
            className="social-link"
          >
            <img 
              src="/images/telegram.svg" 
              alt="Telegram" 
              className="social-icon"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React, { useState } from 'react';
import '../styles/About.css';

const About = () => {
  const [activeHobby, setActiveHobby] = useState(null);

  const hobbies = [
    {
      name: "Running",
      icon: "🏃‍♂️",
      description: "Long & short distance running enthusiast",
      details: "Regular 5K and 10K runs, training for half-marathon. Love exploring Singapore's park connectors!"
    },
    {
      name: "Chess",
      icon: "♟️", 
      description: "Destressing with a fun game of chess",
      details: "When commuting, I'm probably playing chess on chess.com. I may not be the best chess player but I'm always up for a challenge!"
    },
    {
      name: "Coding",
      icon: "💻",
      description: "Side projects and open source",
      details: "Building web apps, AI projects, and contributing to open source. Always experimenting with new frameworks!"
    },
    {
      name: "Swimming",
      icon: "🏊‍♂️",
      description: "Full-body fitness workout",
      details: "Freestyle and breaststroke swimmer, 2-3 times per week. Great for both cardio and strength."
    },
    {
      name: "Learning",
      icon: "📚",
      description: "Languages & new technologies",
      details: "Currently improving my Malay, exploring new programming paradigms, and staying updated with tech trends."
    },
    {
      name: "Cafe Hopper",
      icon: "☕",
      description: "Exploring Singapore's food lanscape",
      details: "I love trying new food and reccomending them to people!"
    }
  ];

  const personalityTraits = [
    { trait: "Curious", color: "#3498db", width: "95%" },
    { trait: "Collaborative", color: "#2ecc71", width: "90%" },
    { trait: "Driven", color: "#e74c3c", width: "88%" },
    { trait: "Creative", color: "#9b59b6", width: "85%" },
    { trait: "Adaptable", color: "#f39c12", width: "92%" }
  ];

  return (
    <section className="about-section">
      <h2 className="section-title">About me</h2>
      
      <div className="about-content">
        <div className="about-text">
          <p>
            I am See Man Teng, from Singapore studying in NUS as an Information Systems 
            major and I love all things tech! I enjoy creating my own side projects during 
            my free time and playing around with open source libraries.
          </p>
          <p>
            Beyond tech, I also love fitness, chess and learning new languages. I do both 
            long and short distance running, weight training, swimming and cycling.
          </p>
          <p>
            I love challenging myself, meeting new people and learning new things! Do drop 
            a / connect with me even if it's just to make friends :)
          </p>
        </div>
        
        <div className="profile-image-container">
          <img 
            src="/images/profile-photo.jpg" 
            alt="Man Teng See"
            className="profile-photo circular"
          />
        </div>
      </div>

      {/* Interactive Hobbies */}
      <div className="hobbies-section">
        <h3 className="hobbies-title">What I Love Doing</h3>
        <p className="hobbies-subtitle">Click on any card to learn more!</p>
        <div className="hobbies-grid">
          {hobbies.map((hobby, index) => (
            <div 
              key={index} 
              className={`hobby-card ${activeHobby === index ? 'active' : ''}`}
              onClick={() => setActiveHobby(activeHobby === index ? null : index)}
            >
              <div className="hobby-icon">{hobby.icon}</div>
              <div className="hobby-name">{hobby.name}</div>
              <div className="hobby-description">{hobby.description}</div>
              {activeHobby === index && (
                <div className="hobby-details">{hobby.details}</div>
              )}
              <div className="hobby-click-hint">
                {activeHobby === index ? '✕ Click to close' : '+ Click to expand'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Personality Traits */}
      <div className="personality-section">
        <h3 className="personality-title">My Personality</h3>
        <p className="personality-subtitle">What drives me and how I approach life</p>
        <div className="traits-container">
          {personalityTraits.map((item, index) => (
            <div key={index} className="trait-item">
              <div className="trait-label">{item.trait}</div>
              <div className="trait-bar">
                <div 
                  className="trait-fill" 
                  style={{ 
                    width: item.width, 
                    backgroundColor: item.color 
                  }}
                ></div>
                <span className="trait-percentage">{item.width}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Section */}
      <div className="quote-section">
        <blockquote className="personal-quote">
          "I believe that curiosity and continuous learning are the keys to personal growth and meaningful connections."
        </blockquote>
        <cite className="quote-author">— Man Teng</cite>
      </div>

      {/* Connect CTA */}
      <div className="connect-section">
        <h3 className="connect-title">Let's Connect! 🤝</h3>
        <p className="connect-text">
          Always excited to meet fellow tech enthusiasts, fitness buddies, or anyone interested in meaningful conversations!
        </p>
        <div className="connect-methods">
          <a 
            href="https://www.instagram.com/mantxng/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="connect-item"
          >
            <span className="connect-icon">📷</span>
            <span className="connect-label">Instagram</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/man-teng-see-500552268" 
            target="_blank" 
            rel="noopener noreferrer"
            className="connect-item"
          >
            <span className="connect-icon">💼</span>
            <span className="connect-label">LinkedIn</span>
          </a>
          <a 
            href="https://t.me/mantxng14" 
            target="_blank" 
            rel="noopener noreferrer"
            className="connect-item"
          >
            <span className="connect-icon">📱</span>
            <span className="connect-label">Telegram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
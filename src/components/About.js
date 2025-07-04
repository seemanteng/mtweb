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
      name: "Cooking",
      icon: "👩‍🍳", 
      description: "Home-cooked meals >> Outside food",
      details: "Always experimenting with new recipes. I enjoy making healthy meals and trying new food!"
    },
    {
      name: "Learning new Languages",
      icon: "🗣️",
      description: "Currently it's Spanish and Cantonese",
      details: "I love learning new languages to connect with people and understand different cultures. Oh, and it is also great to learn more langauges as you can understand more songs and films."
    },
    {
      name: "Gymming",
      icon: "🏋️‍♂️",
      description: "Absolutely neccessary as someone who sits down a lot and loves food",
      details: "Fav machine is the the elliptical and lat pulldowns. Strength and cardio are both important to me if not I get out of shape fast."
    },
    {
      name: "Photography",
      icon: "📸",
      description: "Not an expert, but love capturing moments on my Nikon Coolpix S2900",
      details: "Sometimes it feels like it's me and my digi cam against the workd. I love capturing the beauty of everyday life and nature!"
    },
    {
      name: "Cafe Hopping",
      icon: "☕",
      description: "Exploring Singapore's food landscape",
      details: "I love trying new food and reccomending them to people!"
    }
  ];

  const personalityTraits = [
    { trait: "Collaboration", color: "#3498db", width: "95%" },
    { trait: "Excellence", color: "#2ecc71", width: "90%" },
    { trait: "Resilient", color: "#e74c3c", width: "88%" },
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
            a connect with me even if it's just to make friends :)
          </p>
        </div>
        
        <div className="profile-image-container">
          <img 
            src="/images/my pic.JPG" 
            alt="Man Teng See"
            className="profile-photo circular"
          />
        </div>
      </div>

      {/* Interactive Hobbies */}
      <div className="hobbies-section">
        <h3 className="hobbies-title">What I Love Doing</h3>
        <p className="hobbies-subtitle">Besides coding of course, because you already knew that</p>
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

      {/* Connect CTA */}
      <div className="connect-section">
        <h3 className="connect-title">My Philosophy</h3>
        <p> Every person I meet teaches me something, and every challenge shapes me. I've learned that success isn't about avoiding failure but about staying curious and enthusiastic through all of life's ups and downs. </p>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <section className="home-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Hello, my name is <span className="name-highlight">Man Teng</span>
        </h1>
        <p className="hero-description">
          I am currently a year 3 student in the National University of Singapore (NUS) 
          taking Information Systems (Honors) looking to specialise in Digital Product 
          Specialisation and Management.
        </p>
        <div className="hero-contact">
          Email: mantengsee@gmail.com
        </div>
      </div>
    </section>
  );
};

export default Home;
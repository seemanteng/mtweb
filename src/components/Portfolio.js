import React from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
  // Organized chronologically from most recent to oldest
  const experiences = [
    {
      name: "National University of Singapore",
      description: "Bachelor of Computing in Information Systems (Honors)",
      period: "Aug 2023 - Aug 2027",
      type: "education",
      details: "Currently Year 3, specializing in Digital Product Management. Teaching Assistant for Data Management and Visualisation."
    },
    {
      name: "NUS College",
      description: "University Scholars Programme - Honors Programme",
      period: "2023 - Present",
      type: "education",
      details: "Interdisciplinary education focusing on global challenges. Newsletter Editor, Harvard Asia Programme Logistics Chair."
    },
    {
      name: "Defence Science and Technology Agency Singapore (DSTA)",
      description: "AI Engineer Intern",
      period: "May 2023 - Aug 2023",
      type: "work",
      details: "Integrated NLP and Speech Technologies, Fine-tuned LLMs including T5-Flan, OpenAI, Vicuna-13b. Mastered Weaviate databases."
    },
    {
      name: "Aspire Hub Singapore",
      description: "Mathematics Tutor",
      period: "Feb 2023 - Apr 2023",
      type: "work",
      details: "Instructed Secondary 1-4 students in Elementary and Advanced Mathematics for O-levels examination."
    },
    {
      name: "Raffles Institution",
      description: "Advanced Level (A levels) - 90/90 Rank points",
      period: "Feb 2021 - Dec 2022",
      type: "education",
      details: "Student Councillor, Vice House Captain of Hadley Hullett House. Member of Raffles Press. Perfect UAS score."
    },
    {
      name: "Ministry of Manpower Singapore (MOM)",
      description: "Content Creator Intern",
      period: "Nov 2021 - Dec 2021",
      type: "work",
      details: "Managed International Migrants' Day 2022 Exhibition. Created content for MOM's Facebook page and digital platforms."
    },
    {
      name: "Tanjong Katong Girls' School",
      description: "Ordinary Levels (O levels) - Net score of 2",
      period: "Feb 2017 - Nov 2020",
      type: "education",
      details: "Secretary of Prefectorial Board Executive Committee. Member of Student Leader Network Executive Committee."
    }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/See Man Teng Resume.pdf';
    link.download = 'Man_Teng_See_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="portfolio-section">
      <h2 className="section-title">My Journey</h2>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className={`timeline-item ${exp.type}`}>
            <div className="timeline-marker">
              <div className="marker-icon">
                {exp.type === 'work' ? '💼' : '🎓'}
              </div>
            </div>
            <div className="timeline-content">
              <div className="timeline-period">{exp.period}</div>
              <h4 className="timeline-title">{exp.name}</h4>
              <p className="timeline-role">{exp.description}</p>
              <p className="timeline-details">{exp.details}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="download-section">
        <p className="download-text">Please download my official CV from here:</p>
        <button className="download-btn" onClick={handleDownloadResume}>
          <span className="download-icon">✅</span>
          Download SMT resume
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
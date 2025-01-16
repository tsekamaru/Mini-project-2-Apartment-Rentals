import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Sophia Mascardo",
      github: "https://github.com/mscrdsophia",
      linkedin: "https://www.linkedin.com/in/sophia-mascardo-1036542b4/"
    },
    {
      name: "Tseka",
      github: "https://github.com/tsekamaru",
      linkedin: "https://linkedin.com/in/sophia-mascardo-1036542b4/"
    },
    
  ];

  return (
    <div className="about-container">
      <h1>About This Project</h1>
      <p>
        This is an Airbnb clone created as part of our project to learn full-stack development. 
        The application allows users to browse and book apartments, showcasing modern UI design 
        and dynamic functionality.
      </p>

      <h2>Meet the Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member-card">
            <h3>{member.name}</h3>
           
            <p>
              <a href={member.github} target="_blank" rel="noopener noreferrer">GitHub</a> | 
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;

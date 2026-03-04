import React, { useEffect } from 'react';

const Hero = () => {
  // Animation trigger on mount
  useEffect(() => {
    // Any JavaScript animations can go here
  }, []);

  return (
    <section className="hero">
      <div className="hero-text">
        <div className="greeting-wrapper">
          <span className="greeting">Hi, I'm</span>
          <h1 className="name">KRISH N KUMARESH</h1>
        </div>
        <h2 className="title">Computer Science Student</h2>
        <p className="description">
          Passionate about software development, problem solving, and building
          clean, user-focused applications. Interested in space technologies,
          AI, and modern systems.
        </p>
      </div>

      <div className="profile-container">
        <img src="/Images/main.JPG" alt="Profile" className="profile-img" />
        <div className="floating-icons">
          <img src="/Images/js.png" alt="JavaScript" className="icon" />
          <img src="/Images/mango.png" alt="MongoDB" className="icon" />
          <img src="/Images/post.png" alt="PostgreSQL" className="icon" />
          <img src="/Images/swift.jpeg" alt="Swift" className="icon" />
          <img src="/Images/agro.png" alt="Agro" className="icon" />
          <img src="/Images/react.png" alt="React" className="icon" />
          <img src="/Images/spring.png" alt="Spring Boot" className="icon" />
          <img src="/Images/figma.png" alt="Figma" className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container contact-page">
      <div className="super-bg-effects">
        <div className="tech-grid-overlay"></div>
        <div className="nebula-glow"></div>
        <div className="glow-orb super-orb-1"></div>
        <div className="glow-orb super-orb-2"></div>
      </div>

      <div className="section-header spotlight">
        <div className="pre-header">INITIATE CONNECTION</div>
        <h1 className="hero-text-glitch" data-text="CONTACT">CONTACT</h1>
        <div className="section-underline"></div>
        <p className="proj-subtitle">Ready to collaborate? Establish a secure connection through one of my direct communication channels below.</p>
      </div>

      <div className="communication-hub">
        <a href="mailto:nitheeshkrishn@gmail.com" className="comms-card" style={{ animationDelay: '0.1s' }}>
          <div className="comms-status">
            <div className="comms-dot"></div> ACTIVE
          </div>
          <div className="comms-scanline"></div>
          <div className="comms-icon">📧</div>
          <h3 className="comms-title">EMAIL SECURE LINE</h3>
          <span className="comms-detail">nitheesh8797@gmail.com</span>
        </a>

        <a href="tel:+918778721940" className="comms-card" style={{ animationDelay: '0.2s' }}>
          <div className="comms-status">
            <div className="comms-dot"></div> ACTIVE
          </div>
          <div className="comms-scanline"></div>
          <div className="comms-icon">📞</div>
          <h3 className="comms-title">DIRECT FREQUENCY</h3>
          <span className="comms-detail">+918778721940</span>
        </a>

        <a href="https://linkedin.com/in/krish-n-kumaresh-63bb06298" target="_blank" rel="noopener noreferrer" className="comms-card" style={{ animationDelay: '0.3s' }}>
          <div className="comms-status">
            <div className="comms-dot" style={{ background: '#00b4ff', boxShadow: '0 0 10px #00b4ff' }}></div> ONLINE
          </div>
          <div className="comms-scanline"></div>
          <div className="comms-icon">💼</div>
          <h3 className="comms-title">LINKEDIN NETWORK</h3>
          <span className="comms-detail">krish-n-kumaresh</span>
        </a>

        <a href="https://instagram.com/krish_nitheesh" target="_blank" rel="noopener noreferrer" className="comms-card" style={{ animationDelay: '0.4s' }}>
          <div className="comms-status">
            <div className="comms-dot" style={{ background: '#00b4ff', boxShadow: '0 0 10px #00b4ff' }}></div> ONLINE
          </div>
          <div className="comms-scanline"></div>
          <div className="comms-icon">📸</div>
          <h3 className="comms-title">INSTAGRAM FEED</h3>
          <span className="comms-detail">@krish_nitheesh</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
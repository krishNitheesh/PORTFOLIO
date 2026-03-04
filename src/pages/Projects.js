import React, { useEffect } from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Smart Tourist App",
      description: "An AI-powered travel companion that helps tourists discover hidden gems and navigate cities with real-time recommendations.",
      image: "/Images/tourist 1.jpeg",
      secondaryImage: "/Images/tourist 2.jpeg",
      tags: ["React Native", "Firebase", "Google Maps API"],
      category: "MOBILE INNOVATION",
      id: "PROJ-001"
    },
    {
      title: "Space Based Radar",
      description: "Next-gen satellite radar system for high-resolution earth observation, penetrating cloud cover and night for critical monitoring.",
      image: "/Images/Space radaar1.png",
      tags: ["Python", "Signal Processing", "Remote Sensing"],
      category: "AEROSPACE DEFENCE",
      id: "PROJ-002"
    },
    {
      title: "Thermal Imagery AI",
      description: "Sophisticated analytical engine for industrial thermal diagnostics, identifying anomalies in power grids and infrastructure.",
      image: "/Images/thermal.jpeg",
      tags: ["Edge AI", "Computer Vision", "IoT"],
      category: "INDUSTRIAL TECH",
      id: "PROJ-003"
    },
    {
      title: "Event Harmony Platform",
      description: "A comprehensive digital ecosystem for grand event management, integrating real-time logistics and venue optimization.",
      image: "/Images/mahal.png",
      tags: ["React", "Node.js", "MongoDB"],
      category: "WEB ARCHITECTURE",
      id: "PROJ-004"
    },
    {
      title: "Multimedia Studio Hub",
      description: "A collaborative digital workspace for synchronized audio-visual production, enabling cloud-based creative iteration.",
      image: "/Images/Music studio .png",
      tags: ["Web Audio", "Synch.io", "React"],
      category: "DIGITAL CREATIVE",
      id: "PROJ-005"
    },
    {
      title: "Hardware Radar Prototype",
      description: "Physical hardware integration for short-range obstacle detection, bridging software logic with tactile sensor performance.",
      image: "/Images/hardware1.jpg",
      tags: ["Arduino", "Circuit Design", "C++"],
      category: "ROBOTICS HARDWARE",
      id: "PROJ-006"
    },
    {
      title: "Urban Transit Locator",
      description: "Real-time intelligent tracking system for urban transportation, optimizing commute planning through data-driven prediction.",
      image: "/Images/bus .png",
      tags: ["Flutter", "GPS Systems", "Data Science"],
      category: "SMART CITY HUB",
      id: "PROJ-007"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container projects-page">
      <div className="super-bg-effects">
        <div className="tech-grid-overlay"></div>
        <div className="nebula-glow"></div>
        <div className="glow-orb super-orb-1"></div>
        <div className="glow-orb super-orb-2"></div>
      </div>

      <div className="section-header spotlight">
        <div className="pre-header">ENGINEERING THE FUTURE</div>
        <h1 className="hero-text-glitch" data-text="CREATIVE WORKS">CREATIVE WORKS</h1>
        <div className="section-underline"></div>
        <p className="proj-subtitle">A curated portfolio of high-impact technological solutions spanning Aerospace, Software, and Digital Innovation.</p>
      </div>

      <div className="projects-showcase-container">
        {projects.map((project, index) => (
          <div
            className="premium-project-card"
            key={project.id}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="proj-card-inner">
              <div className="proj-visual-pane">
                <img src={project.image} alt={project.title} className="proj-main-image" />
                <div className="proj-image-scanline"></div>
                {project.secondaryImage && (
                  <img src={project.secondaryImage} alt="Secondary View" className="proj-hover-view" />
                )}
                <div className="proj-id-badge">{project.id}</div>
              </div>

              <div className="proj-content-pane">
                <div className="proj-meta">
                  <span className="proj-category">{project.category}</span>
                  <div className="proj-status-pulse"></div>
                </div>

                <h2 className="proj-title">{project.title}</h2>
                <p className="proj-description">{project.description}</p>

                <div className="proj-tech-row">
                  {project.tags.map((tag, tIdx) => (
                    <span className="proj-tag" key={tIdx}>[ {tag} ]</span>
                  ))}
                </div>

                <div className="proj-action-area">
                  <button className="proj-btn-primary">
                    <span>EXPLORE CASE STUDY</span>
                    <div className="btn-glint"></div>
                  </button>
                  <div className="proj-designator">CLASSIFIED // DEV_ALPHA</div>
                </div>
              </div>
            </div>
            <div className="proj-card-glow"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
import { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Developing",
      icon: "💻",
      skills: [
        { name: "React JS", level: 90, desc: "Modern UI & State Management" },
        { name: "HTML / CSS", level: 95, desc: "Semantic Web & Layouts" },
        { name: "UIUX Designing", level: 85, desc: "User-centric Experience" },
        { name: "JavaScript", level: 92, desc: "Dynamic Functionality" }
      ]
    },
    {
      id: "backend",
      title: "Backend Developing",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 88, desc: "Scalable Logic" },
        { name: "Java / Spring", level: 82, desc: "Enterprise Systems" },
        { name: "REST APIs", level: 90, desc: "System Integration" },
        { name: "Python", level: 80, desc: "Data Processing" }
      ]
    },
    {
      id: "programming",
      title: "Programming (Core)",
      icon: "📊",
      skills: [
        { name: "C++ Programming", level: 94, desc: "System Optimization" },
        { name: "DSA", level: 92, desc: "Complex Problem Solving" },
        { name: "Logic Building", level: 95, desc: "Algorithm Efficiency" },
        { name: "Presentation", level: 88, desc: "Technical Communication" }
      ]
    },
    {
      id: "cloud",
      title: "Cloud & Systems",
      icon: "☁️",
      skills: [
        { name: "AWS", level: 80, desc: "Amazon Web Services" },
        { name: "System Debugging", level: 96, desc: "Root Cause Analysis" },
        { name: "Git / CI-CD", level: 92, desc: "Version Control" }
      ]
    },
    {
      id: "others",
      title: "Other Skills",
      icon: "🎨",
      skills: [
        { name: "Music Direction", level: 92, desc: "Composition & Theory" },
        { name: "Sound Engineering", level: 88, desc: "Mastering & Flow" },
        { name: "Photo/Video Editing", level: 94, desc: "Visual Narrative" },
        { name: "Machines Handling", level: 85, desc: "Technical Ops" },
        { name: "Welding / Cutting", level: 90, desc: "Industrial Arts" }
      ]
    }
  ];

  const allSkills = skillCategories.flatMap(cat =>
    cat.skills.map(s => ({ ...s, categoryId: cat.id }))
  );

  const filteredSkills = activeTab === 'all'
    ? allSkills
    : allSkills.filter(s => s.categoryId === activeTab);

  const searchedSkills = filteredSkills.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page-container pro-skill-dashboard">
      <div className="dashboard-header-main">
        <div className="dash-info">
          <h1>Expertise Control Center</h1>
          <p>Navigating through technical assets and creative disciplines</p>
        </div>

        <div className="dash-search-container">
          <input
            type="text"
            placeholder="Search for a skill node..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="search-glyph">🔍</span>
        </div>
      </div>

      <div className="dash-body-layout">
        <aside className="dash-nav-sidebar">
          <button
            className={`dash-nav-link ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Disciplines
          </button>
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              className={`dash-nav-link ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.title}
            </button>
          ))}
        </aside>

        <main className="dash-main-stage">
          <div className="skill-node-grid">
            {searchedSkills.map((skill, index) => (
              <div
                className="skill-discipline-card glass-morph"
                key={index}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="discipline-card-body">
                  <div className="discipline-card-top">
                    <h4>{skill.name}</h4>
                    <span className="level-badge">{skill.level}%</span>
                  </div>
                  <div className="discipline-progress-track">
                    <div className="discipline-progress-fill" style={{ width: `${skill.level}%` }}></div>
                  </div>
                  <p className="discipline-desc">{skill.desc}</p>
                </div>
              </div>
            ))}
            {searchedSkills.length === 0 && (
              <div className="empty-stream-msg">NO_ASSETS_MATCH_QUERY</div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Skills;
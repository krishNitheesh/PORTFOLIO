import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const navLinks = [
    { name: 'Home', path: '/', key: 'home' },
    { name: 'Projects', path: '/projects', key: 'projects' },
    { name: 'Gallery', path: '/gallery', key: 'gallery' },
    { name: 'Skills', path: '/skills', key: 'skills' },
    { name: 'Certificates', path: '/certificates', key: 'certificates' },
    { name: 'Achievements', path: '/achievements', key: 'achievements' },
    { name: 'Resume', path: '/resume', key: 'resume' },
    { name: 'Contact', path: '/contact', key: 'contact' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-wave"></div>
      <div className="nav-content">
        <div className="logo">KRISH N KUMARESH</div>
        <div className="nav-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.key}
              to={link.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
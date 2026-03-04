import React from 'react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/krishNitheesh',
      icon: '/Images/git.png'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/krish-n-kumaresh-63bb06298',
      icon: '/Images/linked.png'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/krish_nitheesh',
      icon: '/Images/insta.png'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/8778721940',
      icon: '/Images/whats.png'
    }
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="footer">
      <h2 className="connect-title">Connect</h2>
      <div className="social-icons">
        {socialLinks.map((social, index) => (
          <div
            key={index}
            className="social-icon"
            onClick={() => handleSocialClick(social.url)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleSocialClick(social.url)}
            aria-label={`Visit my ${social.name}`}
          >
            <img src={social.icon} alt={social.name} />
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
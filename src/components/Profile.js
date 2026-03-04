import React, { useEffect } from 'react';

const Profile = () => {
  useEffect(() => {
    // Initialize icon positions
    const icons = document.querySelectorAll('.icon');
    const radius = 200;
    
    icons.forEach((icon, index) => {
      const angle = (index * 45) * (Math.PI / 180);
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      icon.style.setProperty('--x', `${x}px`);
      icon.style.setProperty('--y', `${y}px`);
    });
  }, []);

  return (
    <div className="profile-container">
      <img src="/images/main.png" alt="Profile" className="profile-img" />
      <div className="floating-icons">
        {[
          { src: '/images/js.png', alt: 'JavaScript' },
          { src: '/images/mango.png', alt: 'MongoDB' },
          { src: '/images/post.png', alt: 'PostgreSQL' },
          { src: '/images/swift.jpg', alt: 'Swift' },
          { src: '/images/agro.jpg', alt: 'Agro' },
          { src: '/images/react.png', alt: 'React' },
          { src: '/images/spring.png', alt: 'Spring Boot' },
          { src: '/images/download-11.png', alt: 'Other Tech' }
        ].map((icon, index) => (
          <img
            key={index}
            src={icon.src}
            alt={icon.alt}
            className="icon"
            style={{
              '--angle': `${index * 45}deg`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
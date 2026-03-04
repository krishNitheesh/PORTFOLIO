import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScroll(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="scroll-progress-container">
            <div className="scroll-progress-bar" style={{ width: `${scroll}%` }} />
        </div>
    );
};

export default ScrollProgress;

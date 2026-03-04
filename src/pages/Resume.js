import React, { useEffect } from 'react';

const Resume = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const resumeImagePath = "/Images/resume/resume.png";

    return (
        <div className="page-container resume-page">
            <div className="super-bg-effects">
                <div className="tech-grid-overlay"></div>
                <div className="nebula-glow"></div>
                <div className="glow-orb super-orb-1"></div>
                <div className="glow-orb super-orb-2"></div>
            </div>

            <div className="section-header spotlight">
                <div className="pre-header">PROFESSIONAL DOSSIER</div>
                <h1 className="hero-text-glitch" data-text="RESUME">RESUME</h1>
                <div className="section-underline"></div>
                <p className="proj-subtitle">A comprehensive overview of my technical expertise, academic background, and professional experience.</p>
            </div>

            <div className="resume-viewer-container">
                <div className="resume-paper-vault">
                    <img
                        src={resumeImagePath}
                        alt="KRISH N KUMARESH Resume"
                        className="resume-full-image"
                    />
                </div>

                <div className="resume-actions-hub">
                    <div className="action-card-premium">
                        <div className="action-icon">📄</div>
                        <div className="action-info">
                            <h3>OFFLINE COPY</h3>
                            <p>Download a high-resolution PDF version of my professional resume.</p>
                        </div>
                        <a href={resumeImagePath} download="KRISH_N_KUMARESH_RESUME.png" className="action-btn-super">
                            DOWNLOAD RESUME
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;

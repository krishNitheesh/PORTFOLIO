import React, { useEffect, useState } from 'react';

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certs = [
        {
            title: "ISRO Propulsion Complex",
            provider: "ISRO In-Plant Training",
            image: "/Images/cert/ISRO.jpg",
            info: "Grateful for the incredible opportunity to complete my In-Plant Training at ISRO Propulsion Complex (IPRC), Mahendragiri!"
        },
        {
            title: "HackITSnova '25 Winner",
            provider: "IEEE National Hackathon",
            image: "/Images/cert/Hackitsnova Karunya clg.jpg",
            info: "🥇🏆Happy to share that I’ve won FIRST Prize at the IEEE Sponsored National HackITSnova ’25 Hackathon!"
        },
        {
            title: "EKVC 2025 Participant",
            provider: "Team SPARTANS",
            image: "/Images/cert/EKVC.jpg",
            info: "Proud to share that I successfully participated in the Electric/Engine Kart Vehicle Championship 2025, representing TEAM SPARTANS from Sri Krishna College of Technology!"
        },
        {
            title: "ASTRA Symposium",
            provider: "IIST Aerospace Engineering",
            image: "/Images/cert/Astra.jpg",
            info: "I had successfully participated in the Aerospace Symposium on Technological Research Advancements (ASTRA) organized by the Department of Aerospace Engineering, Indian Institute of Space Science and Technology (IIST)"
        },
        {
            title: "AI on Edge Devices",
            provider: "VIT Vellore Workshop",
            image: "/Images/cert/VIT workshop.JPG",
            info: "📚Had a great learning experience attending the AI on Edge Devices for Robotic Applications workshop at VIT Vellore. From object recognition using Edge AI to IoT-based robotic control with ESP32, the sessions were highly practical and informative."
        },
        {
            title: "VARNAM '26 - Code Twins",
            provider: "Karpagam Institute of Tech",
            image: "/Images/cert/varam karpagam.jpg",
            info: "📚Grateful to have participated in CODE TWINS at VARNAM’26, a National Level Sports, Techno & Cultural Fest organized by Karpagam Institute of Technology."
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openModal = (cert) => {
        setSelectedCert(cert);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedCert(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <div className="page-container certificates-page">
            <div className="super-bg-effects">
                <div className="tech-grid-overlay"></div>
                <div className="nebula-glow"></div>
                <div className="glow-orb super-orb-1"></div>
                <div className="glow-orb super-orb-2"></div>
            </div>

            <div className="section-header spotlight">
                <div className="pre-header">PROFESSIONAL RECOGNITION</div>
                <h1 className="reveal-text" data-text="CERTIFICATIONS">CERTIFICATIONS</h1>
                <div className="section-underline"></div>
                <p className="section-subtitle">Milestones achieved in technology, culture, and innovation</p>
            </div>

            <div className="certs-grid">
                {certs.map((cert, index) => (
                    <div
                        className="cert-card-wrapper"
                        key={index}
                        style={{ animationDelay: `${index * 0.15}s` }}
                        onClick={() => openModal(cert)}
                    >
                        <div className="cert-card">
                            <div className="cert-image-container">
                                <img src={cert.image} alt={cert.title} />
                                <div className="cert-overlay">
                                    <span className="expand-icon">🔍</span>
                                </div>
                            </div>
                            <div className="cert-content">
                                <div className="cert-badge">{cert.provider}</div>
                                <h3 className="cert-title">{cert.title}</h3>
                                <p className="cert-info">{cert.info}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedCert && (
                <div className="cert-modal" onClick={closeModal} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(2, 12, 27, 0.95)', zIndex: 5000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)' }}>
                    <div className="modal-content" onClick={e => e.stopPropagation()} style={{ background: '#0a192f', borderRadius: '30px', border: '1px solid rgba(0, 180, 255, 0.2)', width: '1000px', maxWidth: '95vw', display: 'flex', overflow: 'hidden' }}>
                        <button className="close-modal" onClick={closeModal} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', zIndex: 100 }}>&times;</button>
                        <div className="modal-inner" style={{ display: 'flex', width: '100%' }}>
                            <div className="modal-image" style={{ flex: 1.5, background: '#000' }}>
                                <img src={selectedCert.image} alt={selectedCert.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </div>
                            <div className="modal-details" style={{ flex: 1, padding: '40px', background: '#0a192f' }}>
                                <div className="modal-provider" style={{ color: '#00b4ff', fontWeight: '800', marginBottom: '15px' }}>{selectedCert.provider}</div>
                                <h2 className="modal-title" style={{ color: '#fff', fontSize: '2.2rem', fontWeight: '900', marginBottom: '20px' }}>{selectedCert.title}</h2>
                                <p className="modal-info" style={{ color: '#8892b0', lineHeight: '1.8' }}>{selectedCert.info}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Certificates;

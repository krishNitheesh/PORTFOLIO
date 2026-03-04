import React, { useEffect, useState } from 'react';

const Achievements = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const achievements = [
        {
            id: 'isro',
            year: "2025",
            title: "ISRO In-Plant Training",
            provider: "IPRC, Mahendragiri",
            image: "/Images/achiv/isro.png",
            info: "Completed intensive In-Plant Training at ISRO Propulsion Complex (IPRC). Gained hands-on exposure to high-altitude test facilities and propulsion systems, witnessing the precision of space engineering at India's premier rocket testing facility. 🚀",
            category: "Flagship Training",
            size: "featured",
            status: "CERTIFIED // ISRO_IPRC_SA25"
        },
        {
            id: 'hack',
            year: "2025",
            title: "1st Prize - HackITSnova '25",
            provider: "Karunya University",
            image: "/Images/achiv/national.png",
            info: "🥇🏆 Won the FIRST Prize at the IEEE Sponsored National HackITSnova ’25 Hackathon at Karunya University.",
            category: "Hackathon",
            size: "small",
            status: "WINNER // IEEE_HITS_25"
        },
        {
            id: 'iaes',
            year: "2026",
            title: "IAES 2026 Paper Accepted",
            provider: "ISRO (IPRC)",
            image: "/Images/achiv/pap.jpeg",
            info: "My paper abstract titled “Advanced Radar” has been accepted for presentation at IAES 2026, conducted by ISRO (IPRC). 🛰️🎉",
            category: "Research",
            size: "medium", // 1 wide, 2 high
            status: "ACADEMIC // RESEARCH_PUB_01"
        },
        {
            id: 'semi',
            year: "2025",
            title: "ISRO Seminar Presentation",
            provider: "College Achievement",
            image: "/Images/achiv/semi.png",
            info: "Successfully delivered an insightful seminar on ISRO at my college. Mentored juniors on career pathways in space research.",
            category: "Leadership",
            size: "small",
            status: "MENTOR // SEMINAR_TECH"
        },
        {
            id: 'ekvc',
            year: "2025",
            title: "EKVC - Team SPARTANS",
            provider: "Engineering Lead",
            image: "/Images/achiv/ekvc.png",
            info: "Proudly represented TEAM SPARTANS in the Electric/Engine Kart Vehicle Championship 2025. Focused on chassis design and electrical integration.",
            category: "Automotive",
            size: "featured",
            status: "ENGINE_KART // LEAD_SPARTAN"
        },
        {
            id: 'defence',
            year: "2025",
            title: "Defence Conclave 2025",
            provider: "Defence Innovation",
            image: "/Images/achiv/conc.png",
            info: "Investing time in learning and staying updated with India’s defence innovation journey. JAI HIND🇮🇳",
            category: "Strategic Tech",
            size: "featured",
            status: "INNOVATION // DEF_CON_25"
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openModal = (item) => {
        setSelectedItem(item);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedItem(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <div className="page-container achievements-page royal-gold-theme">
            <div className="super-bg-effects">
                <div className="tech-grid-overlay"></div>
                <div className="nebula-glow"></div>
                <div className="glow-orb super-orb-1"></div>
                <div className="glow-orb super-orb-2"></div>
            </div>

            <div className="section-header spotlight">
                <div className="pre-header">RECOGNIZED EXCELLENCE</div>
                <h1 className="hero-text-glitch" data-text="ACHIEVEMENTS">ACHIEVEMENTS</h1>
                <div className="section-underline"></div>
            </div>

            <div className="bento-container-super">
                <div className="bento-grid-super">
                    {achievements.map((item, index) => (
                        <div
                            key={item.id}
                            className={`bento-item-super ${item.size}`}
                            onClick={() => openModal(item)}
                        >
                            <div className="tile-image-super">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="tile-content-super">
                                <span className="item-year-badge">{item.year}</span>
                                <div className="tile-info-super">
                                    <span className="item-status">{item.status}</span>
                                    <h3 className="item-title">{item.title}</h3>
                                    <span className="item-provider">{item.provider}</span>
                                </div>
                            </div>
                            <div className="tile-shine-super"></div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedItem && (
                <div className="achievement-modal-overlay" onClick={closeModal}>
                    <div className="achievement-modal-vault" onClick={e => e.stopPropagation()}>
                        <button className="close-vault-btn" onClick={closeModal}>&times;</button>
                        <div className="modal-hero-pane">
                            <img src={selectedItem.image} alt={selectedItem.title} />
                        </div>
                        <div className="modal-details-sidebar">
                            <div className="modal-category-tag">{selectedItem.category}</div>
                            <h2 className="modal-main-title">{selectedItem.title}</h2>
                            <p className="modal-full-desc">{selectedItem.info}</p>
                            <div className="modal-provider" style={{ marginTop: '20px', color: '#ffd700', fontWeight: 'bold' }}>{selectedItem.provider}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Achievements;

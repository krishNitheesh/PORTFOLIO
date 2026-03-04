import React, { useState, useEffect } from 'react';

const Gallery = () => {
    const [activeTab, setActiveTab] = useState('library');
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [currentTime, setCurrentTime] = useState('');

    const allImages = [
        { src: "/Images/gallery/95FDA9D9-C55F-4388-AF03-50D14F4CE8C6.JPG" },
        { src: "/Images/gallery/IMG_0381.jpg" },
        { src: "/Images/gallery/IMG_0546.jpg" },
        { src: "/Images/gallery/IMG_0558.jpg" },
        { src: "/Images/gallery/IMG_0564.jpg" },
        { src: "/Images/gallery/IMG_0567.jpg" },
        { src: "/Images/gallery/IMG_0783.jpg" },
        { src: "/Images/gallery/IMG_0929.jpg" },
        { src: "/Images/gallery/IMG_0935.jpg" },
        { src: "/Images/gallery/IMG_0955.JPG" },
        { src: "/Images/gallery/IMG_1201.JPG" },
        { src: "/Images/gallery/IMG_1210.JPG" },
        { src: "/Images/gallery/IMG_1671.jpg" },
        { src: "/Images/gallery/IMG_2927.jpg" },
        { src: "/Images/gallery/IMG_3032.jpg" },
        { src: "/Images/gallery/IMG_3211.jpg" },
        { src: "/Images/gallery/IMG_3278.jpg" },
        { src: "/Images/gallery/IMG_3699.JPG" },
        { src: "/Images/gallery/IMG_5632.JPG" },
        { src: "/Images/gallery/IMG_5933.JPG" },
        { src: "/Images/gallery/IMG_6698.JPG" },
        { src: "/Images/gallery/IMG_6863.jpg" },
        { src: "/Images/gallery/IMG_6874.JPG" },
        { src: "/Images/gallery/IMG_6889.jpg" },
        { src: "/Images/gallery/IMG_7229.JPG" },
        { src: "/Images/gallery/IMG_7289.jpg" },
        { src: "/Images/gallery/IMG_7967.JPG" },
        { src: "/Images/gallery/IMG_7988.jpg" },
        { src: "/Images/gallery/IMG_7991.jpg" },
        { src: "/Images/gallery/IMG_8003.jpg" },
        { src: "/Images/gallery/IMG_8030.jpg" },
        { src: "/Images/gallery/IMG_8182.jpg" },
        { src: "/Images/gallery/IMG_8187.jpg" },
        { src: "/Images/gallery/IMG_8200.jpg" },
        { src: "/Images/gallery/IMG_8214.jpg" },
        { src: "/Images/gallery/IMG_8379.JPG" },
        { src: "/Images/gallery/IMG_8743.jpg" },
        { src: "/Images/gallery/IMG_9644.jpg" },
        { src: "/Images/gallery/IMG_9695.JPG" },
        { src: "/Images/gallery/IMG_9730.JPG" },
        { src: "/Images/gallery/IMG_9742.JPG" },
        { src: "/Images/gallery/IMG_9995.jpg" },
        { src: "/Images/gallery/Screenshot 2025-11-19 at 10.16.58 AM.PNG" }
    ];

    const albums = [
        { name: "Music", images: allImages.slice(0, 8), count: 8 },
        { name: "Tech", images: allImages.slice(8, 16), count: 8 },
        { name: "Mechanical", images: allImages.slice(16, 24), count: 8 },
        { name: "Others", images: allImages.slice(24), count: 19 }
    ];

    const memories = [
        { title: "Last Weekend", date: "February 2026", image: allImages[10].src, index: 10 },
        { title: "Intern at ISRO", date: "January 2026", image: allImages[15].src, index: 15 },
        { title: "College Days", date: "2025", image: allImages[20].src, index: 20 }
    ];

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            setCurrentTime(`${hours}:${minutes}`);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % allImages.length);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };

    return (
        <div className="page-container gallery-page">
            <div className="super-bg-effects">
                <div className="tech-grid-overlay"></div>
                <div className="nebula-glow"></div>
                <div className="glow-orb super-orb-1"></div>
                <div className="glow-orb super-orb-2"></div>
            </div>

            <div className="section-header spotlight">
                <div className="pre-header">MOMENTS & MEMORIES</div>
                <h1 className="hero-text-glitch" data-text="GALLERY">GALLERY</h1>
                <div className="section-underline"></div>
            </div>

            <div className="iphone-showcase">
                <div className="iphone-frame">
                    <div className="iphone-status-bar">
                        <span>{currentTime}</span>
                        <div className="status-icons">
                            <span className="battery">90%</span>
                        </div>
                    </div>

                    <div className="iphone-screen">
                        {activeTab === 'library' && (
                            <>
                                <div className="photos-header">
                                    <h2>Library</h2>
                                    <span className="select-text">Select</span>
                                </div>
                                <div className="photos-grid">
                                    {allImages.map((img, index) => (
                                        <div
                                            className="photos-item"
                                            key={index}
                                            onClick={() => setSelectedIndex(index)}
                                        >
                                            <img src={img.src} alt="Gallery item" loading="lazy" decoding="async" />
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {activeTab === 'foryou' && (
                            <>
                                <div className="photos-header">
                                    <h2>For You</h2>
                                    <span className="select-text">Edit</span>
                                </div>
                                <div className="foryou-container">
                                    <h3 className="foryou-section-title">Memories</h3>
                                    {memories.map((memory, idx) => (
                                        <div className="memory-card" key={idx} onClick={() => setSelectedIndex(memory.index)}>
                                            <img src={memory.image} alt={memory.title} loading="lazy" decoding="async" />
                                            <div className="memory-info">
                                                <h3>{memory.title}</h3>
                                                <span>{memory.date}</span>
                                            </div>
                                        </div>
                                    ))}
                                    <h3 className="foryou-section-title">Featured Photos</h3>
                                    <div className="featured-scroll">
                                        {allImages.slice(5, 12).map((img, idx) => (
                                            <img
                                                key={idx}
                                                src={img.src}
                                                alt="Featured"
                                                loading="lazy"
                                                decoding="async"
                                                onClick={() => setSelectedIndex(allImages.indexOf(img))}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        {activeTab === 'albums' && (
                            <>
                                <div className="photos-header">
                                    <h2>Albums</h2>
                                    <span className="select-text">See All</span>
                                </div>
                                <div className="albums-grid">
                                    {albums.map((album, idx) => (
                                        <div className="album-item" key={idx}>
                                            <div
                                                className="album-stack"
                                                onClick={() => setSelectedIndex(allImages.indexOf(album.images[0]))}
                                            >
                                                <img src={album.images[0].src} alt={album.name} loading="lazy" decoding="async" />
                                            </div>
                                            <div className="album-info">
                                                <h4>{album.name}</h4>
                                                <span>{album.count}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {selectedIndex !== null && (
                            <div className="enlarged-overlay" onClick={() => setSelectedIndex(null)}>
                                <button className="close-btn" onClick={() => setSelectedIndex(null)}>×</button>
                                <button className="nav-arrow prev" onClick={handlePrev}>‹</button>
                                <img src={allImages[selectedIndex].src} alt="Enlarged" className="enlarged-img" decoding="async" />
                                <button className="nav-arrow next" onClick={handleNext}>›</button>
                                <div className="enlarged-footer">
                                    <span>Photo {selectedIndex + 1} of {allImages.length}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="iphone-tab-bar">
                        <div
                            className={`tab-item ${activeTab === 'library' ? 'active' : ''}`}
                            onClick={() => setActiveTab('library')}
                        >
                            <span className="tab-icon">🖼️</span>
                            <span className="tab-label">Library</span>
                        </div>
                        <div
                            className={`tab-item ${activeTab === 'foryou' ? 'active' : ''}`}
                            onClick={() => setActiveTab('foryou')}
                        >
                            <span className="tab-icon">💖</span>
                            <span className="tab-label">For You</span>
                        </div>
                        <div
                            className={`tab-item ${activeTab === 'albums' ? 'active' : ''}`}
                            onClick={() => setActiveTab('albums')}
                        >
                            <span className="tab-icon">📁</span>
                            <span className="tab-label">Albums</span>
                        </div>
                        <div className="tab-item">
                            <span className="tab-icon">🔍</span>
                            <span className="tab-label">Search</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;

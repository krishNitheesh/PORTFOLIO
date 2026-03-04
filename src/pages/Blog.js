import React from 'react';

const Blog = () => {
    const posts = [
        {
            title: "The Future of Space Tech",
            date: "Feb 24, 2026",
            excerpt: "How reusable rockets are changing the economics of space exploration.",
            image: "/Images/astra.jpg"
        },
        {
            title: "Mastering React 19",
            date: "Feb 20, 2026",
            excerpt: "A guide to the newest hooks and server components in the React ecosystem.",
            image: "/Images/react.png"
        },
        {
            title: "AI in Everyday Life",
            date: "Feb 15, 2026",
            excerpt: "From recommendation engines to LLMs, how AI is quietly reshaping our world.",
            image: "/Images/car.png"
        }
    ];

    return (
        <div className="page-container">
            <div className="section-header">
                <h1>Blog</h1>
                <div className="section-underline"></div>
            </div>

            <div className="cards-grid">
                {posts.map((post, index) => (
                    <div className="glass-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                        <img src={post.image} alt={post.title} className="card-image" />
                        <div className="card-content">
                            <span>{post.date}</span>
                            <h3>{post.title}</h3>
                            <p>{post.excerpt}</p>
                            <button className="tech-badge" style={{ border: 'none', cursor: 'pointer' }}>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;

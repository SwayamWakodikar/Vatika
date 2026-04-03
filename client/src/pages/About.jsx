import React from 'react';
import './About.css';

const About = () => {
    const team = [
        { id: 1, name: 'Arjun Sharma', role: 'Founder & CEO', emoji: '👨‍💼', desc: 'Ex-McKinsey consultant turned agripreneur. Arjun left his corporate life to solve the farm management crisis firsthand.' },
        { id: 2, name: 'Priya Patel', role: 'Head of Operations', emoji: '👩‍🌾', desc: 'Born on a farm in Gujarat, Priya manages our Pod deployments across 5 states with military-grade precision.' },
        { id: 3, name: 'Vikram Singh', role: 'CTO', emoji: '👨‍💻', desc: 'Full-stack engineer who built our GPS tracking & inventory systems from scratch. Believes in tech-for-good.' },
        { id: 4, name: 'Meena Kumari', role: 'Community Lead', emoji: '🤝', desc: 'Meena bridges the trust gap between landowners and our field teams. She speaks 6 languages!' },
    ];

    const milestones = [
        { year: '2022', event: 'Founded in a small office in Gurgaon 🏠', color: 'green' },
        { year: '2023', event: 'First 50 farms onboarded across Haryana 🌾', color: 'yellow' },
        { year: '2024', event: 'Launched the Khet Sarthi mobile app 📱', color: 'blue' },
        { year: '2025', event: 'Expanded to 5 states, 500+ acres managed 🚀', color: 'orange' },
        { year: '2026', event: 'AI-powered yield prediction goes live 🤖', color: 'purple' },
    ];

    return (
        <div className="about-page">
            {/* Hero Banner */}
            <section className="about-hero">
                <div className="about-hero-decos">
                    <span className="about-deco ad-1">🌻</span>
                    <span className="about-deco ad-2">☁️</span>
                    <span className="about-deco ad-3">🐝</span>
                    <span className="about-deco ad-4">🌈</span>
                </div>
                <div className="container about-hero-content">
                    <div className="about-badge">📖 Our Story</div>
                    <h1 className="about-hero-title">
                        We're on a Mission to<br />
                        <span className="about-hero-accent">Save Indian Farms!</span> 🌾
                    </h1>
                    <p className="about-hero-sub">
                        From a tiny office in Gurgaon to managing 500+ acres across India — here's why we do what we do.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="section about-story-section">
                <div className="container">
                    <div className="story-grid reveal">
                        <div className="story-text">
                            <h2 className="title text-left">Why We Started 🤔</h2>
                            <p>
                                India has over 150 million farming households, yet <strong>42% of farmers</strong> want to leave farming due to its unprofitability and physical toll.
                            </p>
                            <p>
                                Meanwhile, millions of urban professionals own ancestral farmland that's slowly degrading — because they can't be on-site to manage it.
                            </p>
                            <p>
                                <strong>Khet Sarthi</strong> was born to bridge this gap. We bring professional management, technology, and vetted labor directly to your doorstep — so your roots stay strong no matter where you live! 💪
                            </p>
                        </div>
                        <div className="story-card">
                            <div className="story-stat-card stat-card-1">
                                <span className="stat-big-emoji">🇮🇳</span>
                                <span className="stat-big-num">150M+</span>
                                <span className="stat-big-label">Farming Households</span>
                            </div>
                            <div className="story-stat-card stat-card-2">
                                <span className="stat-big-emoji">😔</span>
                                <span className="stat-big-num">42%</span>
                                <span className="stat-big-label">Want to Quit Farming</span>
                            </div>
                            <div className="story-stat-card stat-card-3">
                                <span className="stat-big-emoji">🏙️</span>
                                <span className="stat-big-num">60M+</span>
                                <span className="stat-big-label">Absentee Landowners</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section about-values-section">
                <div className="dotted-bg"></div>
                <div className="container">
                    <h2 className="title reveal">Our Values 💎</h2>
                    <p className="subtitle reveal">The principles that drive everything we do.</p>
                    <div className="values-grid reveal">
                        <div className="value-card vc-green">
                            <span className="value-emoji">🤝</span>
                            <h3>Trust First</h3>
                            <p>Every worker is background-verified. Every transaction is audited. Trust is our foundation.</p>
                        </div>
                        <div className="value-card vc-orange">
                            <span className="value-emoji">👁️</span>
                            <h3>Radical Transparency</h3>
                            <p>Daily GPS photos, live inventory logs, and real-time updates. No secrets, ever.</p>
                        </div>
                        <div className="value-card vc-blue">
                            <span className="value-emoji">🌍</span>
                            <h3>Sustainable Growth</h3>
                            <p>We promote eco-friendly farming practices and soil health for long-term prosperity.</p>
                        </div>
                        <div className="value-card vc-purple">
                            <span className="value-emoji">❤️</span>
                            <h3>Community Care</h3>
                            <p>We uplift rural communities by providing fair wages and dignified employment.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section about-timeline-section">
                <div className="container">
                    <h2 className="title reveal">Our Journey 🗺️</h2>
                    <p className="subtitle reveal">From a dream to 500+ acres across India!</p>
                    <div className="timeline reveal">
                        {milestones.map((m, i) => (
                            <div key={i} className={`timeline-item tl-${m.color}`}>
                                <div className="tl-year">{m.year}</div>
                                <div className="tl-dot"></div>
                                <div className="tl-content">{m.event}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section about-team-section">
                <div className="dotted-bg"></div>
                <div className="container">
                    <h2 className="title reveal">Meet the Team! 👋</h2>
                    <p className="subtitle reveal">The humans behind the magic.</p>
                    <div className="team-grid">
                        {team.map((member, i) => (
                            <div key={member.id} className="team-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                                <div className="team-avatar">
                                    <span>{member.emoji}</span>
                                </div>
                                <h3 className="team-name">{member.name}</h3>
                                <span className="team-role">{member.role}</span>
                                <p className="team-desc">{member.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

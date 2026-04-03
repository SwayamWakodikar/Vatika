import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            icon: '👥',
            title: 'Pod Workforce Deployment',
            desc: 'We recruit, vet, and deploy organized groups of farm workers called "Pods" to your land. Each Pod is trained, disciplined, and fully accountable.',
            features: ['Background-verified workers', 'Organized shift schedules', 'Performance tracking', 'Scalable team sizes'],
            color: 'green',
            tagEmoji: '💪'
        },
        {
            id: 2,
            icon: '👨🏽‍🌾',
            title: 'Field Manager Assignment',
            desc: 'Your dedicated on-site professional who oversees all operations, manages Pods, and reports directly to you via the app.',
            features: ['Daily activity reports', 'Quality control checks', 'Conflict resolution', 'Harvest management'],
            color: 'orange',
            tagEmoji: '👁️'
        },
        {
            id: 3,
            icon: '📱',
            title: 'Real-Time Monitoring App',
            desc: 'Our mobile app gives you 24/7 visibility into your farm with GPS-tagged photos, live inventory, and instant alerts.',
            features: ['GPS-stamped daily photos', 'Inventory dashboards', 'Push notifications', 'Activity timeline'],
            color: 'blue',
            tagEmoji: '📡'
        },
        {
            id: 4,
            icon: '📊',
            title: 'Inventory Governance',
            desc: 'Every seed, fertilizer bag, and piece of equipment is tracked with zero tolerance for pilferage or waste.',
            features: ['Barcode tracking', 'Low-stock alerts', 'Expense reports', 'Audit trails'],
            color: 'purple',
            tagEmoji: '🔒'
        },
        {
            id: 5,
            icon: '🌱',
            title: 'Yield Optimization',
            desc: 'Our agronomists analyze your soil, water supply, and crop patterns to maximize output and minimize cost.',
            features: ['Soil testing', 'Crop rotation plans', 'Water management', 'Seasonal forecasting'],
            color: 'green',
            tagEmoji: '📈'
        },
        {
            id: 6,
            icon: '🏡',
            title: 'Estate Management',
            desc: 'Complete property care beyond farming — boundary security, infrastructure maintenance, and asset preservation.',
            features: ['Boundary wall monitoring', 'Infrastructure upkeep', 'Trespassing alerts', 'Property valuation reports'],
            color: 'yellow',
            tagEmoji: '🛡️'
        },
    ];

    const process = [
        { step: 1, emoji: '📞', title: 'Book a Call', desc: 'Schedule a free consultation to discuss your farm and needs.' },
        { step: 2, emoji: '📋', title: 'Farm Assessment', desc: 'Our team visits your land for a thorough evaluation.' },
        { step: 3, emoji: '👥', title: 'Pod Assembly', desc: 'We handpick and train a Pod workforce tailored to your farm.' },
        { step: 4, emoji: '🚀', title: 'Go Live!', desc: 'Your farm is professionally managed. Track everything on the app!' },
    ];

    return (
        <div className="services-page">
            {/* Hero */}
            <section className="services-hero">
                <div className="services-hero-decos">
                    <span className="sv-deco sv-1">⚙️</span>
                    <span className="sv-deco sv-2">🔧</span>
                    <span className="sv-deco sv-3">☁️</span>
                </div>
                <div className="container services-hero-content">
                    <div className="services-badge">⚙️ What We Do</div>
                    <h1 className="services-hero-title">
                        Everything Your Farm<br />
                        <span className="services-hero-accent">Needs to Thrive!</span> 🌾
                    </h1>
                    <p className="services-hero-sub">
                        From workforce management to yield optimization — we've got every acre covered.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section services-grid-section">
                <div className="container">
                    <h2 className="title reveal">Our Services 🛠️</h2>
                    <p className="subtitle reveal">Comprehensive farm management, one Pod at a time.</p>

                    <div className="services-grid">
                        {services.map((svc, i) => (
                            <div
                                key={svc.id}
                                className={`service-card sc-${svc.color} reveal`}
                                style={{ transitionDelay: `${i * 0.08}s` }}
                            >
                                <div className="service-tag">{svc.tagEmoji}</div>
                                <div className="service-icon-wrap">
                                    <span>{svc.icon}</span>
                                </div>
                                <h3>{svc.title}</h3>
                                <p className="service-desc">{svc.desc}</p>
                                <ul className="service-features">
                                    {svc.features.map((f, j) => (
                                        <li key={j}>✅ {f}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section how-section">
                <div className="dotted-bg"></div>
                <div className="container">
                    <h2 className="title reveal">How It Works 🤔</h2>
                    <p className="subtitle reveal">Four simple steps to a professionally managed farm!</p>

                    <div className="process-grid reveal">
                        {process.map((p, i) => (
                            <div key={p.step} className="process-card" style={{ transitionDelay: `${i * 0.1}s` }}>
                                <div className="process-step-badge">{p.step}</div>
                                <div className="process-emoji">{p.emoji}</div>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                                {i < process.length - 1 && <div className="process-arrow">→</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="services-cta reveal">
                <div className="container services-cta-content">
                    <h2>Ready to Get Started? 🚀</h2>
                    <p>Book a free consultation and see how we can transform your farm!</p>
                    <a href="/contact" className="btn btn-accent services-cta-btn">📞 Book Free Call</a>
                </div>
            </section>
        </div>
    );
};

export default Services;

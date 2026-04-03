import React from 'react';
import './SarthiSystem.css';

const SarthiSystem = () => {
    const features = [
        {
            id: 1,
            title: "Pod Workforce",
            icon: "👥",
            desc: "Background-verified, disciplined labor organized into scalable 'Pods' for efficient farm operations.",
            color: "green",
            bgEmoji: "💪"
        },
        {
            id: 2,
            title: "Field Manager",
            icon: "👨🏽‍🌾",
            desc: "A dedicated on-site professional acting as your eyes & ears, overseeing Pods and ensuring quality yields.",
            color: "orange",
            bgEmoji: "👁️"
        },
        {
            id: 3,
            title: "Daily GPS Updates",
            icon: "🛰️",
            desc: "Geotagged photos and real-time logs sent directly to your phone. Know what's happening instantly!",
            color: "blue",
            bgEmoji: "📍"
        },
        {
            id: 4,
            title: "Inventory Governance",
            icon: "📊",
            desc: "Audited tracking of seeds, fertilizers, and equipment. Zero pilferage, absolute accountability!",
            color: "purple",
            bgEmoji: "📦"
        }
    ];

    return (
        <section id="pod-system" className="section system-section">
            <div className="dotted-bg"></div>
            <div className="container">
                <h2 className="title reveal">The Sarthi System ⚙️</h2>
                <p className="subtitle reveal">
                    A fully-managed system that modernizes your farm with transparency and precision!
                </p>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className={`feature-card feature-${feature.color} reveal`}
                            id={`feature-card-${feature.id}`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <span className="feature-bg-emoji">{feature.bgEmoji}</span>
                            <div className="feature-number-badge">
                                {String(index + 1).padStart(2, '0')}
                            </div>
                            <div className="feature-icon-bubble">
                                <span>{feature.icon}</span>
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SarthiSystem;

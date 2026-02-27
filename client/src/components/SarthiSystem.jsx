import React from 'react';
import './SarthiSystem.css';

const SarthiSystem = () => {
    const features = [
        {
            id: 1,
            title: "Pod Workforce",
            icon: "👥",
            desc: "Background-verified, disciplined labor units organized into 'Pods' for scalable and efficient farm operations."
        },
        {
            id: 2,
            title: "Field Manager",
            icon: "👨🏽‍🌾",
            desc: "A dedicated on-site professional acting as your eyes and ears, overseeing the Pods and ensuring quality yields."
        },
        {
            id: 3,
            title: "Daily GPS Updates",
            icon: "🛰️",
            desc: "Geotagged photos and real-time operational logs sent directly to your phone. Know what's happening, instantly."
        },
        {
            id: 4,
            title: "Inventory Governance",
            icon: "📊",
            desc: "Strictly audited tracking of seeds, fertilizers, and equipment. Zero pilferage, absolute accountability."
        }
    ];

    return (
        <section id="pod-system" className="section system-section">
            <div className="container">
                <h2 className="title">The Sarthi System</h2>
                <p className="subtitle">
                    A fully-managed architecture that modernizes your farm's execution layer with transparency and precision.
                </p>

                <div className="features-grid">
                    {features.map((feature) => (
                        <div key={feature.id} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
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

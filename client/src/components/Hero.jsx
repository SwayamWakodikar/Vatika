import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            {/* Fun background decorations */}
            <div className="hero-decos">
                <span className="deco deco-1">🌻</span>
                <span className="deco deco-2">🐄</span>
                <span className="deco deco-3">☁️</span>
                <span className="deco deco-4">☁️</span>
                <span className="deco deco-5">🌿</span>
                <span className="deco deco-6">🐔</span>
                <span className="deco deco-7">⭐</span>
                <span className="deco deco-8">🌈</span>
                <div className="hero-hills"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-badge">
                    <span className="badge-emoji">🌾</span>
                    Farm-as-a-Service Platform!
                </div>

                <h1 className="hero-title">
                    Preserving Roots.
                    <br />
                    <span className="hero-title-green">Professionalizing</span> Farms! 🚜
                </h1>

                <p className="hero-subtitle">
                    We bridge the gap between urban professionals and their rural assets.
                    Secure your land, preserve your legacy, and ensure professional yields
                    — without being on-site! 🎉
                </p>

                <div className="hero-buttons">
                    <Link to="/services" className="btn btn-primary hero-btn" id="hero-cta-explore">
                        🌱 Explore Services
                    </Link>
                    <Link to="/contact" className="btn btn-secondary hero-btn" id="hero-cta-talk">
                        🗣️ Talk to an Expert
                    </Link>
                </div>

                {/* Fun stat cards */}
                <div className="hero-stats">
                    <div className="stat-card stat-green">
                        <span className="stat-emoji">🌾</span>
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Acres Managed</span>
                    </div>
                    <div className="stat-card stat-yellow">
                        <span className="stat-emoji">💯</span>
                        <span className="stat-number">98%</span>
                        <span className="stat-label">Happy Farmers</span>
                    </div>
                    <div className="stat-card stat-blue">
                        <span className="stat-emoji">👀</span>
                        <span className="stat-number">24/7</span>
                        <span className="stat-label">Monitoring</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

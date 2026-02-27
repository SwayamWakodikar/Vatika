import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">Preserving Roots. Professionalizing Farms.</h1>
                <p className="hero-subtitle">
                    We bridge the gap between urban professionals and their rural assets. Secure your land, preserve your legacy, and ensure professional yields without being on-site.
                </p>
                <div className="hero-buttons">
                    <a href="#how-it-works" className="btn btn-primary hero-btn">Explore Pod System</a>
                    <a href="#contact" className="btn btn-secondary hero-btn-outline">Talk to an Expert</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#home" className="logo">
                    Khet <span>Sarthi</span>
                </a>

                <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
                    <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
                    <a href="#pod-system" onClick={() => setMobileMenuOpen(false)}>Pod System</a>
                    <a href="#app" onClick={() => setMobileMenuOpen(false)}>App</a>
                    <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
                    <a href="#contact" className="btn btn-primary nav-contact-btn" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

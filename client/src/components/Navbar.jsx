import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const navItems = [
        { to: '/', label: '🏠 Home' },
        { to: '/about', label: '📖 About' },
        { to: '/services', label: '⚙️ Services' },
        { to: '/contact', label: '📬 Contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} id="main-nav">
            <div className="container nav-container">
                <Link to="/" className="logo" id="nav-logo">
                    <span className="logo-emoji">🌾</span>
                    <span className="logo-text">Khet<span className="logo-accent">Sarthi</span></span>
                </Link>

                <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} id="nav-links">
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className={`nav-link ${location.pathname === item.to ? 'nav-active' : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="btn btn-primary nav-cta"
                        onClick={() => setMobileMenuOpen(false)}
                        id="nav-contact-btn"
                    >
                        🚀 Get Started!
                    </Link>
                </div>

                <button
                    className={`mobile-menu-btn ${mobileMenuOpen ? 'menu-open' : ''}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle navigation menu"
                    id="mobile-menu-toggle"
                >
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

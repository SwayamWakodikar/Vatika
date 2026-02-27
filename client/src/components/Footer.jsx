import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="cta-section">
                <div className="container">
                    <h2 className="cta-title">Your Land Deserves a Sarthi.</h2>
                    <p className="cta-subtitle">Don't let distance devalue your roots. Professionalize your farm operations today.</p>
                    <button className="btn btn-accent cta-btn">Schedule a Free Consultation</button>
                </div>
            </div>

            <div className="footer-main">
                <div className="container footer-grid">
                    <div className="footer-brand">
                        <h3 className="footer-logo">Khet <span>Sarthi</span></h3>
                        <p className="footer-desc">Professional Farm-as-a-Service for absentee landowners. Bridging the gap between urban professionals and rural assets.</p>
                        <p className="footer-tagline">खेत आपका, सारथी हम।</p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#how-it-works">How It Works</a></li>
                            <li><a href="#pod-system">Pod System</a></li>
                            <li><a href="#app">The App</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact Info</h4>
                        <ul>
                            <li>📍 Sector 4, Gurgaon, Haryana</li>
                            <li>📞 +91 98765 43210</li>
                            <li>✉️ hello@khetsarthi.in</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Khet Sarthi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

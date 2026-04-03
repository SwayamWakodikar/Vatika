import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            {/* CTA Section */}
            <div className="cta-section reveal">
                <div className="cta-deco-left">🌻</div>
                <div className="cta-deco-right">🐄</div>
                <div className="container cta-content">
                    <div className="cta-emoji">🌾</div>
                    <h2 className="cta-title">
                        Your Land Deserves<br />a <span className="cta-accent">Sarthi!</span> ✨
                    </h2>
                    <p className="cta-subtitle">Don't let distance devalue your roots. Professionalize your farm operations today!</p>
                    <Link to="/contact" className="btn btn-accent cta-btn" id="cta-schedule-btn">
                        📞 Schedule a Free Consultation
                    </Link>
                </div>
            </div>

            {/* Footer Main */}
            <div className="footer-main">
                <div className="container footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logo-wrap">
                            <span className="footer-logo-emoji">🌾</span>
                            <h3 className="footer-logo">Khet<span className="footer-logo-accent">Sarthi</span></h3>
                        </div>
                        <p className="footer-desc">Professional Farm-as-a-Service for absentee landowners. Bridging the gap between urban professionals and rural assets! 🌿</p>
                        <p className="footer-tagline">खेत आपका, सारथी हम। 🙏</p>
                    </div>

                    <div className="footer-links-col">
                        <h4 className="footer-col-title">Quick Links 🔗</h4>
                        <ul>
                            <li><Link to="/">🏠 Home</Link></li>
                            <li><Link to="/about">📖 About Us</Link></li>
                            <li><Link to="/services">⚙️ Services</Link></li>
                            <li><Link to="/contact">📬 Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact-col">
                        <h4 className="footer-col-title">Say Hello! 👋</h4>
                        <ul>
                            <li className="contact-row">
                                <span className="contact-bubble">📍</span>
                                <span>Sector 4, Gurgaon, Haryana</span>
                            </li>
                            <li className="contact-row">
                                <span className="contact-bubble">📞</span>
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="contact-row">
                                <span className="contact-bubble">✉️</span>
                                <span>hello@khetsarthi.in</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <p>&copy; {new Date().getFullYear()} Khet Sarthi. All rights reserved.</p>
                    <p className="footer-love">Made with 🌿 & ❤️ for Indian Farmers</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

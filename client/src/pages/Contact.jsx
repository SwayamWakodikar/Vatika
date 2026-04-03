import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        farmSize: '',
        location: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // In production, this would POST to an API
    };

    const faqs = [
        { q: 'How quickly can you deploy a Pod?', a: 'We can have a Pod operational on your farm within 7-10 business days after the initial assessment!', emoji: '⏰' },
        { q: 'Is my land data secure?', a: 'Absolutely! All GPS data and photos are encrypted and only accessible to you and your assigned Field Manager.', emoji: '🔒' },
        { q: 'What if I\'m not satisfied?', a: 'We offer a 30-day money-back guarantee. No questions asked! Your satisfaction is our top priority.', emoji: '💯' },
        { q: 'Do you operate in my state?', a: 'We currently operate in Haryana, Punjab, UP, Rajasthan, and Maharashtra. Expanding to more states soon!', emoji: '🗺️' },
    ];

    return (
        <div className="contact-page">
            {/* Hero */}
            <section className="contact-hero">
                <div className="contact-hero-decos">
                    <span className="ct-deco ct-1">📞</span>
                    <span className="ct-deco ct-2">💬</span>
                    <span className="ct-deco ct-3">☁️</span>
                </div>
                <div className="container contact-hero-content">
                    <div className="contact-badge">📬 Get In Touch</div>
                    <h1 className="contact-hero-title">
                        Let's Talk About<br />
                        <span className="contact-hero-accent">Your Farm!</span> 🌾
                    </h1>
                    <p className="contact-hero-sub">
                        Schedule a free consultation or drop us a message. We'd love to hear from you!
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="section contact-main-section">
                <div className="container contact-grid">
                    {/* Form */}
                    <div className="contact-form-wrap reveal">
                        <h2>Send Us a Message! ✉️</h2>
                        {submitted ? (
                            <div className="success-card">
                                <span className="success-emoji">🎉</span>
                                <h3>Awesome! We got your message!</h3>
                                <p>Our team will reach out within 24 hours. Meanwhile, grab a chai! ☕</p>
                                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="contact-name">Your Name 👤</label>
                                        <input
                                            type="text"
                                            id="contact-name"
                                            name="name"
                                            placeholder="e.g. Arjun Sharma"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-email">Email Address 📧</label>
                                        <input
                                            type="email"
                                            id="contact-email"
                                            name="email"
                                            placeholder="arjun@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="contact-phone">Phone Number 📞</label>
                                        <input
                                            type="tel"
                                            id="contact-phone"
                                            name="phone"
                                            placeholder="+91 98765 43210"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-farm-size">Farm Size (acres) 🌾</label>
                                        <input
                                            type="text"
                                            id="contact-farm-size"
                                            name="farmSize"
                                            placeholder="e.g. 5 acres"
                                            value={formData.farmSize}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="contact-location">Farm Location 📍</label>
                                    <input
                                        type="text"
                                        id="contact-location"
                                        name="location"
                                        placeholder="e.g. Village Raipur, District Gurgaon, Haryana"
                                        value={formData.location}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="contact-message">Your Message 💬</label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        placeholder="Tell us about your farm and what you need help with..."
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary form-submit-btn" id="contact-submit">
                                    🚀 Send Message!
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Info Sidebar */}
                    <div className="contact-info reveal" style={{ transitionDelay: '0.15s' }}>
                        <div className="info-card info-card-green">
                            <h3>📍 Visit Us</h3>
                            <p>Khet Sarthi HQ<br />Plot 45, Sector 4<br />Gurgaon, Haryana 122001</p>
                        </div>

                        <div className="info-card info-card-blue">
                            <h3>📞 Call Us</h3>
                            <p>+91 98765 43210<br />Mon – Sat, 9AM – 7PM</p>
                        </div>

                        <div className="info-card info-card-orange">
                            <h3>✉️ Email Us</h3>
                            <p>hello@khetsarthi.in<br />support@khetsarthi.in</p>
                        </div>

                        <div className="info-card info-card-purple">
                            <h3>⏰ Response Time</h3>
                            <p>We reply within<br /><strong>24 hours!</strong> Pinky promise 🤞</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section faq-section">
                <div className="dotted-bg"></div>
                <div className="container">
                    <h2 className="title reveal">Frequently Asked Questions 🤔</h2>
                    <p className="subtitle reveal">Got questions? We've got answers!</p>

                    <div className="faq-grid reveal">
                        {faqs.map((faq, i) => (
                            <div key={i} className="faq-card">
                                <div className="faq-emoji">{faq.emoji}</div>
                                <h3>{faq.q}</h3>
                                <p>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

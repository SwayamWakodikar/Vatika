import React from 'react';
import './AppPreview.css';

const AppPreview = () => {
    return (
        <section id="app" className="section app-section">
            <div className="container app-container">
                <div className="app-content reveal">
                    <div className="section-tag">
                        <span>📱</span> Mobile App
                    </div>
                    <h2 className="title text-left">Your Farm in<br />Your Pocket! 🎉</h2>
                    <p className="app-desc">
                        Stay connected to your roots without leaving the city. The Khet Sarthi App delivers crystal-clear visibility into your field's daily progress!
                    </p>
                    <ul className="app-features">
                        <li>
                            <span className="check-bubble check-green">✅</span>
                            <div>
                                <strong>Morning Roll Call</strong>
                                <p>Verify Pod workforce attendance instantly with live check-ins.</p>
                            </div>
                        </li>
                        <li>
                            <span className="check-bubble check-blue">📸</span>
                            <div>
                                <strong>Geotagged Visuals</strong>
                                <p>Review GPS-stamped photos of daily field activities.</p>
                            </div>
                        </li>
                        <li>
                            <span className="check-bubble check-orange">🔔</span>
                            <div>
                                <strong>Inventory Alerts</strong>
                                <p>Receive low-stock warnings for essential farm supplies.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="app-mockup reveal" style={{ transitionDelay: '0.15s' }}>
                    <div className="phone-frame">
                        <div className="phone-notch">
                            <div className="notch-cam"></div>
                        </div>
                        <div className="phone-screen">

                            <div className="mock-status-bar">
                                <span>9:41</span>
                                <span>📶 🔋</span>
                            </div>

                            <div className="mock-app-header">
                                <h3>🌾 Vatika Farm</h3>
                                <span>📍 Sector 4, Haryana</span>
                            </div>

                            <div className="mock-feed">
                                <div className="mock-card">
                                    <div className="mock-card-header">
                                        <span className="live-dot"></span>
                                        <strong>Live Update</strong>
                                        <span className="mock-time">10:15 AM</span>
                                    </div>
                                    <div className="mock-card-image">
                                        <span className="mock-img-emoji">🌾🌱</span>
                                    </div>
                                    <p><strong>Field Manager:</strong> Pod 2 completed sowing wheat in Sector A! 🎉</p>
                                </div>

                                <div className="mock-card">
                                    <div className="mock-card-header">
                                        <span className="inv-dot"></span>
                                        <strong>Inventory</strong>
                                        <span className="mock-time">08:30 AM</span>
                                    </div>
                                    <div className="mock-stock">
                                        <div className="mock-stock-row">
                                            <span>Urea Fertilizer</span>
                                            <span className="stock-count">15 bags</span>
                                        </div>
                                        <div className="mock-progress-track">
                                            <div className="mock-progress-fill" style={{ width: '60%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mock-tab-bar">
                                <div className="tab-item">🏠<small>Home</small></div>
                                <div className="tab-item tab-active">📰<small>Feed</small></div>
                                <div className="tab-item">📦<small>Stock</small></div>
                                <div className="tab-item">⚙️<small>More</small></div>
                            </div>
                        </div>
                    </div>

                    {/* Fun floating badges */}
                    <div className="floating-pill pill-1">🟢 Pod Active!</div>
                    <div className="floating-pill pill-2">📊 98% Yield!</div>
                    <div className="floating-pill pill-3">🔔 New Alert!</div>
                </div>
            </div>
        </section>
    );
};

export default AppPreview;

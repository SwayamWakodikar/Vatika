import React from 'react';
import './AppPreview.css';

const AppPreview = () => {
    return (
        <section id="app" className="section app-section">
            <div className="container app-container">
                <div className="app-content">
                    <h2 className="title text-left">Your Farm in Your Pocket</h2>
                    <p className="app-desc">
                        Stay connected to your roots without leaving the city. The Khet Sarthi App delivers crystal-clear visibility into your field's daily progress.
                    </p>
                    <ul className="app-features">
                        <li>
                            <span className="check">✓</span>
                            <div>
                                <strong>Morning Roll Call</strong>
                                <p>Verify Pod workforce attendance instantly.</p>
                            </div>
                        </li>
                        <li>
                            <span className="check">✓</span>
                            <div>
                                <strong>Geotagged Visuals</strong>
                                <p>Review GPS-stamped photos of daily activities.</p>
                            </div>
                        </li>
                        <li>
                            <span className="check">✓</span>
                            <div>
                                <strong>Inventory Alerts</strong>
                                <p>Receive low-stock warnings for essential supplies.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="app-mockup">
                    <div className="phone-frame">
                        <div className="phone-notch"></div>
                        <div className="phone-screen">

                            <div className="mock-header">
                                <div className="mock-time">9:41</div>
                                <div className="mock-icons">📶 🔋</div>
                            </div>

                            <div className="mock-title">
                                <h3>Vatika Farm</h3>
                                <span>Sector 4, Haryana</span>
                            </div>

                            <div className="mock-update-card">
                                <div className="update-header">
                                    <span className="status-dot green"></span>
                                    <strong>Live Update</strong> • 10:15 AM
                                </div>
                                <div className="update-image mock-img-1"></div>
                                <p><strong>Field Manager:</strong> Pod 2 has completed sowing wheat in Sector A. GPS verified.</p>
                            </div>

                            <div className="mock-update-card">
                                <div className="update-header">
                                    <span className="status-dot blue"></span>
                                    <strong>Inventory Log</strong> • 08:30 AM
                                </div>
                                <div className="update-stock">
                                    <div className="stock-item">
                                        <span>Urea Fertilizer</span>
                                        <span>15 bags left</span>
                                    </div>
                                    <div className="stock-progress">
                                        <div className="progress-bar" style={{ width: '60%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="mock-bottom-nav">
                                <span>🏠</span>
                                <span className="active">📰</span>
                                <span>📦</span>
                                <span>⚙️</span>
                            </div>

                        </div>
                    </div>
                    <div className="decorative-bubble db-1"></div>
                    <div className="decorative-bubble db-2"></div>
                </div>
            </div>
        </section>
    );
};

export default AppPreview;

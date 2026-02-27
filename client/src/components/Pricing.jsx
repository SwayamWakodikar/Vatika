import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <section id="pricing" className="section pricing-section">
            <div className="container">
                <h2 className="title">Simple, Transparent Pricing</h2>
                <p className="subtitle">
                    Choose a management tier that fits your farm's size and your desired level of involvement. No hidden fees.
                </p>

                <div className="pricing-grid">
                    {/* Basic Card */}
                    <div className="pricing-card">
                        <h3 className="pricing-tier">Basic Oversight</h3>
                        <div className="pricing-amount">
                            <span className="currency">₹</span>4,999<span className="period">/mo</span>
                        </div>
                        <p className="pricing-desc">For small plots needing basic security and maintenance.</p>
                        <ul className="pricing-features">
                            <li>Bi-weekly land inspection</li>
                            <li>Boundary wall security checks</li>
                            <li>Monthly photo updates</li>
                            <li>Basic app access</li>
                        </ul>
                        <a href="#contact" className="btn btn-secondary pricing-btn">Get Started</a>
                    </div>

                    {/* Pro Card */}
                    <div className="pricing-card popular">
                        <div className="popular-badge">Most Popular</div>
                        <h3 className="pricing-tier">Active Management</h3>
                        <div className="pricing-amount">
                            <span className="currency">₹</span>12,999<span className="period">/mo</span>
                        </div>
                        <p className="pricing-desc">Full agricultural cycle management for active yield generation.</p>
                        <ul className="pricing-features">
                            <li>Dedicated Pod Workforce</li>
                            <li>Part-time Field Manager</li>
                            <li>Daily GPS & Photo updates</li>
                            <li>Full inventory governance</li>
                            <li>Yield optimization consulting</li>
                        </ul>
                        <a href="#contact" className="btn btn-primary pricing-btn">Get Started</a>
                    </div>

                    {/* Premium Card */}
                    <div className="pricing-card">
                        <h3 className="pricing-tier">Estate Premium</h3>
                        <div className="pricing-amount">
                            <span className="currency">₹</span>24,999<span className="period">/mo</span>
                        </div>
                        <p className="pricing-desc">Comprehensive estate management for large-scale operations.</p>
                        <ul className="pricing-features">
                            <li>Multiple Pod Deployments</li>
                            <li>Full-time Field Manager on-site</li>
                            <li>Real-time dashboard access</li>
                            <li>Advanced soil & water testing</li>
                            <li>End-to-end harvest marketing</li>
                        </ul>
                        <a href="#contact" className="btn btn-secondary pricing-btn">Get Started</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;

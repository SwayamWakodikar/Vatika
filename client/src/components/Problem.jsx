import React from 'react';
import './Problem.css';

const Problem = () => {
    return (
        <section id="how-it-works" className="section problem-section">
            <div className="container">
                <h2 className="title">The Divided Reality</h2>
                <p className="subtitle">
                    Modern agricultural assets require daily management, but our lives pull us in opposite directions.
                </p>

                <div className="problem-grid">
                    {/* Card 1: City Professional */}
                    <div className="problem-card professional-card">
                        <div className="problem-icon">🏢</div>
                        <h3>The Urban Professional</h3>
                        <p className="problem-desc">
                            Working miles away from the land. You want to secure your ancestral assets and maximize yields, but lack the bandwidth, local trusted labor, and daily visibility required for active farming.
                        </p>
                        <ul className="problem-list">
                            <li>❌ Zero Visibility</li>
                            <li>❌ Unvetted Labor Risks</li>
                            <li>❌ Legacy Degradation</li>
                        </ul>
                    </div>

                    <div className="problem-divider">
                        <span className="divider-text">VS</span>
                    </div>

                    {/* Card 2: Rural Parent/Manager */}
                    <div className="problem-card rural-card">
                        <div className="problem-icon">🌾</div>
                        <h3>The Aging Custodian</h3>
                        <p className="problem-desc">
                            Managing the farm on the ground is exhausting. Sourcing reliable labor, tracking daily inventory, and keeping up with modern yield practices is getting harder every season.
                        </p>
                        <ul className="problem-list">
                            <li>❌ Physical Burnout</li>
                            <li>❌ Operational Inefficiencies</li>
                            <li>❌ Yield Stagnation</li>
                        </ul>
                    </div>
                </div>

                <div className="solution-banner">
                    <h3>The Khet Sarthi Solution</h3>
                    <p>We deploy managed Pods of vetted labor and field supervisors directly to your farm, reporting back to you via our app.</p>
                </div>
            </div>
        </section>
    );
};

export default Problem;

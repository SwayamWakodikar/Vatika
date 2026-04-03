import React from 'react';
import './Problem.css';

const Problem = () => {
    return (
        <section id="how-it-works" className="section problem-section">
            <div className="dotted-bg"></div>
            <div className="container">
                <h2 className="title reveal">The Divided Reality 😰</h2>
                <p className="subtitle reveal">
                    Modern farms need daily attention, but life pulls you in opposite directions!
                </p>

                <div className="problem-grid reveal">
                    {/* Card 1: Urban Professional */}
                    <div className="problem-card card-orange" id="problem-urban-card">
                        <div className="card-corner-deco">🏙️</div>
                        <div className="problem-emoji-big">🏢</div>
                        <h3>The Urban Professional</h3>
                        <p className="problem-desc">
                            Working miles away from the land. You want to secure your assets and maximize yields, but lack bandwidth and daily visibility.
                        </p>
                        <ul className="problem-list">
                            <li>
                                <span className="list-badge badge-red">❌</span>
                                Zero Visibility
                            </li>
                            <li>
                                <span className="list-badge badge-red">❌</span>
                                Unvetted Labor Risks
                            </li>
                            <li>
                                <span className="list-badge badge-red">❌</span>
                                Legacy Degradation
                            </li>
                        </ul>
                    </div>

                    {/* VS Divider */}
                    <div className="problem-divider">
                        <div className="vs-bubble">
                            <span>⚡</span>
                            VS
                        </div>
                    </div>

                    {/* Card 2: Aging Custodian */}
                    <div className="problem-card card-green" id="problem-rural-card">
                        <div className="card-corner-deco">🌿</div>
                        <div className="problem-emoji-big">🌾</div>
                        <h3>The Aging Custodian</h3>
                        <p className="problem-desc">
                            Managing the farm on ground is exhausting. Sourcing labor, tracking inventory, and modern yield practices get harder every season.
                        </p>
                        <ul className="problem-list">
                            <li>
                                <span className="list-badge badge-red">❌</span>
                                Physical Burnout
                            </li>
                            <li>
                                <span className="list-badge badge-red">❌</span>
                                Operational Inefficiency
                            </li>
                            <li>
                                <span className="list-badge badge-red">❌</span>
                                Yield Stagnation
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Solution Banner */}
                <div className="solution-banner reveal" id="solution-banner">
                    <div className="solution-emoji">🚀</div>
                    <h3>The Khet Sarthi Solution! ✨</h3>
                    <p>We deploy managed Pods of vetted labor and field supervisors directly to your farm, reporting back to you via our app!</p>
                </div>
            </div>
        </section>
    );
};

export default Problem;

import React, { useState } from 'react';
import './Pricing.css';

const Pricing = () => {
    const plans = [
        {
            id: 'basic',
            tier: 'Basic Oversight',
            emoji: '🌱',
            price: '4,999',
            desc: 'For small plots needing basic security and maintenance.',
            features: [
                'Bi-weekly land inspection',
                'Boundary wall security checks',
                'Monthly photo updates',
                'Basic app access'
            ],
            color: 'blue',
            popular: false
        },
        {
            id: 'pro',
            tier: 'Active Management',
            emoji: '🌾',
            price: '12,999',
            desc: 'Full farm cycle management for active yield generation!',
            features: [
                'Dedicated Pod Workforce',
                'Part-time Field Manager',
                'Daily GPS & Photo updates',
                'Full inventory governance',
                'Yield optimization consulting'
            ],
            color: 'green',
            popular: true
        },
        {
            id: 'premium',
            tier: 'Estate Premium',
            emoji: '🏡',
            price: '24,999',
            desc: 'Comprehensive estate management for large-scale operations!',
            features: [
                'Multiple Pod Deployments',
                'Full-time Field Manager on-site',
                'Real-time dashboard access',
                'Advanced soil & water testing',
                'End-to-end harvest marketing'
            ],
            color: 'purple',
            popular: false
        }
    ];

    return (
        <section id="pricing" className="section pricing-section">
            <div className="dotted-bg"></div>
            <div className="container">
                <h2 className="title reveal">Pick Your Plan! 💰</h2>
                <p className="subtitle reveal">
                    Simple, transparent pricing. Choose a plan that fits your farm. No hidden fees, pinky promise! 🤞
                </p>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.id}
                            className={`pricing-card pricing-${plan.color} ${plan.popular ? 'popular' : ''} reveal`}
                            id={`pricing-card-${plan.id}`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            {plan.popular && (
                                <div className="popular-ribbon">
                                    ⭐ Most Popular!
                                </div>
                            )}

                            <div className="pricing-emoji">{plan.emoji}</div>
                            <h3 className="pricing-tier">{plan.tier}</h3>

                            <div className="pricing-amount">
                                <span className="currency">₹</span>
                                <span className="price-value">{plan.price}</span>
                                <span className="period">/mo</span>
                            </div>

                            <p className="pricing-desc">{plan.desc}</p>

                            <div className="pricing-divider-line"></div>

                            <ul className="pricing-features">
                                {plan.features.map((feat, i) => (
                                    <li key={i}>
                                        <span className="feat-check">✅</span>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <a href="#contact" className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} pricing-btn`}>
                                🚀 Get Started!
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;

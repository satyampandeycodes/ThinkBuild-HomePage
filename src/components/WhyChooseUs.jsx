import React from 'react';
import { FiTrendingUp, FiZap, FiUsers, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

/**
 * WhyChooseUs Component
 * 
 * Interactive Concepts Used:
 * - Concise, punchy copy (reduced text)
 * - Framer Motion: whileInView reveal with stagger delay for each card
 */
function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: 'Result Focused',
      description: 'Data-driven campaigns built around measurable revenue and ROI goals.',
      icon: <FiTrendingUp />,
      step: '01'
    },
    {
      id: 2,
      title: 'Creative Approach',
      description: 'Compelling brand stories and visuals that cut through digital noise.',
      icon: <FiZap />,
      step: '02'
    },
    {
      id: 3,
      title: 'Audience Focused',
      description: 'Laser-targeted ads and content reaching high-intent prospective buyers.',
      icon: <FiUsers />,
      step: '03'
    },
    {
      id: 4,
      title: 'Simple Process',
      description: 'Clear roadmaps, transparent bi-weekly reports, and zero guesswork.',
      icon: <FiCheckCircle />,
      step: '04'
    }
  ];

  return (
    <section id="why-choose-us" className="why-section">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">Why Partner With Us</span>
          <h2 className="section-title">Why Choose RVCanvas?</h2>
          <p className="section-subtitle">
            We prioritize real business outcomes over vanity metrics, giving you clear roadmaps to scale.
          </p>
        </motion.div>

        {/* 4 Feature Cards Grid */}
        <div className="why-grid">
          {features.map((feature, idx) => (
            <motion.div 
              key={feature.id} 
              className="why-card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="why-card-top">
                <div className="why-icon-box">
                  {feature.icon}
                </div>
                <span className="why-step-number">{feature.step}</span>
              </div>

              <h3 className="why-title">{feature.title}</h3>
              <p className="why-desc">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

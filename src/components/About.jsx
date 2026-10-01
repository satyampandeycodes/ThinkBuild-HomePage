import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

/**
 * About Component
 * 
 * Interactive Concepts:
 * - Concise copy paired with agency team collaboration photo
 * - Framer Motion: whileInView scroll reveal and stat card hover elevations
 * - Sunset Coral & Amber Palette
 */
function About() {
  const stats = [
    { id: 1, number: '50+', label: 'Projects Completed', detail: 'End-to-end digital success' },
    { id: 2, number: '30+', label: 'Happy Clients', detail: 'High-growth brands & startups' },
    { id: 3, number: '5+', label: 'Years Experience', detail: 'Proven online growth track record' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Two-Column Top Layout with Real Photo & Concise Text */}
        <div className="about-grid">
          {/* Left Column: Concise Text and Strategic Features */}
          <motion.div 
            className="about-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-badge">About Our Agency</span>
            <h2 className="about-main-heading">
              We Help Brands Build Their <span className="gradient-text">Digital Presence</span>
            </h2>

            <p className="about-description">
              Digital Marketing is a creative agency helping brands connect with active audiences through data-driven campaigns, compelling content, and predictable ROI.
            </p>

            <div className="about-features-list">
              <div className="about-feature-item">
                <FiCheckCircle className="feature-check-icon" />
                <span>Customer-centric strategic growth planning</span>
              </div>
              <div className="about-feature-item">
                <FiCheckCircle className="feature-check-icon" />
                <span>Transparent bi-weekly reporting & analytics</span>
              </div>
              <div className="about-feature-item">
                <FiCheckCircle className="feature-check-icon" />
                <span>Continuous conversion rate testing</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Agency Strategy Team Image */}
          <motion.div 
            className="about-right-image"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <img 
              src="/images/about-team.jpg" 
              alt="Digital Marketing Strategy Team Collaboration" 
              className="about-team-image"
            />
          </motion.div>
        </div>

        {/* Statistics Cards Row */}
        <div className="stats-container">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.id} 
              className="stat-card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className="stat-number">{stat.number}</div>
              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-detail">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

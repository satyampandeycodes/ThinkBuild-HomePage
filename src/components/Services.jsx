import React from 'react';
import { 
  FiShare2, 
  FiSearch, 
  FiFileText, 
  FiTarget, 
  FiMail, 
  FiCompass, 
  FiArrowRight 
} from 'react-icons/fi';
import { motion } from 'framer-motion';

/**
 * Services Component
 * 
 * Interactive Concepts Used:
 * - Concise, punchy copy (reduced text)
 * - Framer Motion: Staggered scroll entrance and hover cards
 */
function Services() {
  const servicesList = [
    {
      id: 1,
      title: 'Social Media Marketing',
      description: 'Build engaged communities and brand authority across Instagram, LinkedIn, and YouTube.',
      icon: <FiShare2 />,
      tag: 'Engagement'
    },
    {
      id: 2,
      title: 'Search Engine Optimization',
      description: 'Rank on Google Page 1 to capture high-intent organic search traffic continuously.',
      icon: <FiSearch />,
      tag: 'Organic Traffic'
    },
    {
      id: 3,
      title: 'Content Marketing',
      description: 'Engaging blogs, lead magnets, and case studies that turn readers into paying customers.',
      icon: <FiFileText />,
      tag: 'Brand Trust'
    },
    {
      id: 4,
      title: 'Paid Advertising',
      description: 'Targeted Google and Meta ad campaigns optimized for peak return on ad spend (ROAS).',
      icon: <FiTarget />,
      tag: 'Conversion'
    },
    {
      id: 5,
      title: 'Email Marketing',
      description: 'Automated email nurture funnels and newsletters that maximize customer retention.',
      icon: <FiMail />,
      tag: 'Retention'
    },
    {
      id: 6,
      title: 'Brand Strategy',
      description: 'Cohesive visual identity and positioning that make your brand immediately recognizable.',
      icon: <FiCompass />,
      tag: 'Identity'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">What We Offer</span>
          <h2 className="section-title">Our Digital Marketing Services</h2>
          <p className="section-subtitle">
            Measurable digital strategies designed to scale your business with predictable ROI.
          </p>
        </motion.div>

        {/* Services Grid (3-column, compact on laptops) */}
        <div className="services-grid">
          {servicesList.map((service, idx) => (
            <motion.div 
              key={service.id} 
              className="service-card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="service-card-header">
                <div className="service-icon-box">
                  {service.icon}
                </div>
                <span className="service-tag">{service.tag}</span>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <a href="#contact" className="service-learn-more">
                <span>Learn More</span>
                <FiArrowRight className="learn-more-icon" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

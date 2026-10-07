import React from 'react';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

/**
 * Products Component
 * 
 * Interactive Concepts Used:
 * - Reduced concise copy with real visual UI mockups
 * - Framer Motion: whileInView scroll entrance, image hover zoom, and interactive CTA buttons
 */
function Products() {
  const productsList = [
    {
      id: 1,
      badge: 'Starter Toolkit',
      name: 'Growth Marketing Playbook',
      tagline: '50+ frameworks and templates to kickstart and scale your campaigns.',
      price: '$49',
      image: '/products/playbook.jpg',
      features: [
        '50+ Proven Growth & Campaign Frameworks',
        'Notion & Excel 12-Month Content Calendar',
        'High-Converting Ad Copy Swipe File'
      ]
    },
    {
      id: 2,
      badge: 'Most Popular',
      name: 'SEO & Audit Master Suite',
      tagline: 'Complete audit checklists to dominate Google search rankings.',
      price: '$89',
      image: '/products/seo_suite.jpg',
      features: [
        '100-Point Technical SEO Audit Checklist',
        'Competitor Keyword Gap Analysis Sheet',
        'On-Page Optimization & Schema Blueprint'
      ]
    },
    {
      id: 3,
      badge: 'Pro Bundle',
      name: 'Omnichannel Ads Launchpack',
      tagline: 'Battle-tested Meta & Google ad creative templates and funnels.',
      price: '$129',
      image: '/products/ads_launchpack.jpg',
      features: [
        '30+ High-ROAS Google & Meta Ad Presets',
        'Landing Page Wireframe & Conversion Checklist',
        'Automated Email Marketing Funnel Sequences'
      ]
    }
  ];

  return (
    <section id="products" className="products-section">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">Our Digital Products</span>
          <h2 className="section-title">Ready-Made Marketing Assets</h2>
          <p className="section-subtitle">
            Accelerate your growth with our pre-built toolkits, templates, and audit systems.
          </p>
        </motion.div>

        {/* 3 Products Grid */}
        <div className="products-grid">
          {productsList.map((product, idx) => (
            <motion.div 
              key={product.id} 
              className="product-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Product Visual Mockup Image */}
              <div className="product-image-container">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-thumbnail"
                  loading="lazy" 
                />
                <span className="product-badge-overlay">{product.badge}</span>
              </div>

              {/* Product Content Body */}
              <div className="product-body">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-tagline">{product.tagline}</p>

                {/* Features List */}
                <ul className="product-features-list">
                  {product.features.map((feature, fIdx) => (
                    <li key={fIdx} className="product-feature-item">
                      <FiCheck className="feature-item-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Product CTA */}
                <motion.a 
                  href="#contact" 
                  className="btn-primary product-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Get Instant Access</span>
                  <FiArrowRight />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;

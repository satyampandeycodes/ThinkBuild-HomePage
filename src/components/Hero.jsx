import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import gsap from 'gsap';

/**
 * Hero Component
 * 
 * Interactive Concepts:
 * - GSAP: Staggered entrance for headline, subtext, and CTAs
 * - Framer Motion: Interactive float, hover scale on image and CTA buttons
 * - Executive Sunset Coral & Amber Palette (Zero Blue, Zero Green)
 */
function Hero() {
  const heroTextRef = useRef(null);

  // GSAP staggered entrance on page load
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-hero-item', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out'
      });
    }, heroTextRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Text Content with GSAP Animation */}
        <div className="hero-content" ref={heroTextRef}>
          <div className="hero-badge gsap-hero-item">
            <span className="pulse-dot"></span>
            <span>DIGITAL MARKETING AGENCY</span>
          </div>

          <h1 className="hero-title gsap-hero-item">
            Grow Your Brand. <br />
            <span className="gradient-text">Reach More People.</span>
          </h1>

          <p className="hero-description gsap-hero-item">
            Data-driven SEO, creative social campaigns, and high-converting paid ads designed to turn online visitors into loyal customers.
          </p>

          <div className="hero-actions gsap-hero-item">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className="btn-primary hero-btn">
                Get Started <FiArrowRight />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/services" className="btn-secondary hero-btn">
                Explore Services
              </Link>
            </motion.div>
          </div>

          <div className="hero-trust gsap-hero-item">
            <div className="trust-item">
              <FiCheckCircle className="trust-icon" />
              <span>Measurable ROI</span>
            </div>
            <div className="trust-item">
              <FiCheckCircle className="trust-icon" />
              <span>Tailored Strategies</span>
            </div>
            <div className="trust-item">
              <FiCheckCircle className="trust-icon" />
              <span>Dedicated Team</span>
            </div>
          </div>
        </div>

        {/* Right Column: Sunset Visual Graphic Image with Floating Metrics Chip */}
        <div className="hero-visual">
          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <img 
              src="/images/hero-growth.jpg" 
              alt="Digital Marketing Campaign Analytics and Growth Dashboard" 
              className="hero-growth-image"
            />

            {/* Overlaid Floating Metrics Chip */}
            <div className="hero-overlay-stat">
              <div className="impact-icon-pulse">
                <FiTrendingUp />
              </div>
              <div className="impact-info">
                <span className="impact-label">Average Campaign Impact</span>
                <span className="impact-value">+280% Qualified Traffic</span>
              </div>
              <span className="impact-pill">Verified ROI</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

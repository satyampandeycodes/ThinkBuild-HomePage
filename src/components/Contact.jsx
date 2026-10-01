import React, { useState } from 'react';
import { FiSend, FiCheckCircle, FiMail, FiPhone, FiMapPin, FiAlertCircle } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Contact Component
 * 
 * Interactive Concepts Used:
 * - Controlled React Inputs with validation
 * - Framer Motion: Animated entrance and dynamic success banner animation
 */
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Social Media Marketing',
    requirement: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!formData.email.includes('@') || !formData.email.includes('.')) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.requirement.trim()) {
      newErrors.requirement = 'Please describe your requirement or goal';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitted(true);
    setErrors({});

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'Social Media Marketing',
      requirement: ''
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">Let's Grow Your Business Together</h2>
          <p className="section-subtitle">
            Tell us about your business goals and we will prepare a customized growth roadmap for you.
          </p>
        </motion.div>

        <div className="contact-wrapper">
          {/* Left Column: Quick Info Box */}
          <motion.div 
            className="contact-info-panel"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="contact-info-title">Ready to scale your digital presence?</h3>
            <p className="contact-info-text">
              Share your project details with our team. We typically respond within 24 hours.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-item">
                <div className="detail-icon"><FiMail /></div>
                <div>
                  <span className="detail-label">Email Us</span>
                  <a href="mailto:hello@digitalmarketing.com" className="detail-value">hello@digitalmarketing.com</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon"><FiPhone /></div>
                <div>
                  <span className="detail-label">Call Us</span>
                  <a href="tel:+919876543210" className="detail-value">+91 98765 43210</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon"><FiMapPin /></div>
                <div>
                  <span className="detail-label">Location</span>
                  <span className="detail-value">Bangalore / Mumbai, India</span>
                </div>
              </div>
            </div>

            <div className="agency-guarantee-card">
              <span className="guarantee-dot"></span>
              <p>Free 30-minute strategic consultation with every new project requirement.</p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Requirement Form */}
          <motion.div 
            className="contact-form-panel"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence>
              {isSubmitted && (
                <motion.div 
                  className="success-banner"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <FiCheckCircle className="success-icon" size={20} />
                  <div>
                    <h4 className="success-title">Thank You!</h4>
                    <p className="success-message">
                      Your requirement has been submitted successfully. Our team will contact you shortly.
                    </p>
                  </div>
                  <button 
                    className="success-close-btn"
                    onClick={() => setIsSubmitted(false)}
                    type="button"
                  >
                    ✕
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="requirement-form" noValidate>
              <div className="form-grid">
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                  />
                  {errors.name && (
                    <span className="error-text">
                      <FiAlertCircle /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rahul@example.com"
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                  />
                  {errors.email && (
                    <span className="error-text">
                      <FiAlertCircle /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Phone Field */}
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="form-input"
                  />
                </div>

                {/* Company Name Field */}
                <div className="form-group">
                  <label htmlFor="company" className="form-label">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Apex Enterprises"
                    className="form-input"
                  />
                </div>
              </div>

              {/* Service Selection Dropdown */}
              <div className="form-group">
                <label htmlFor="service" className="form-label">
                  Select Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="SEO">SEO (Search Engine Optimization)</option>
                  <option value="Content Marketing">Content Marketing</option>
                  <option value="Paid Advertising">Paid Advertising</option>
                  <option value="Email Marketing">Email Marketing</option>
                  <option value="Brand Strategy">Brand Strategy</option>
                </select>
              </div>

              {/* Requirement Textarea */}
              <div className="form-group">
                <label htmlFor="requirement" className="form-label">
                  Your Requirement <span className="required">*</span>
                </label>
                <textarea
                  id="requirement"
                  name="requirement"
                  rows="3"
                  value={formData.requirement}
                  onChange={handleChange}
                  placeholder="Tell us about your brand goals, target audience, budget, or current challenges..."
                  className={`form-textarea ${errors.requirement ? 'input-error' : ''}`}
                ></textarea>
                {errors.requirement && (
                  <span className="error-text">
                    <FiAlertCircle /> {errors.requirement}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <motion.button 
                type="submit" 
                className="btn-primary submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Requirement</span>
                <FiSend />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

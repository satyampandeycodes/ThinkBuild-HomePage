import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiInstagram, 
  FiLinkedin, 
  FiFacebook, 
  FiTwitter, 
  FiMail, 
  FiPhone, 
  FiMapPin,
  FiArrowUp
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import BrandLogo from './BrandLogo';

/**
 * Footer Component
 * 
 * Interactive Concepts Used:
 * - Multi-page navigation links
 * - Clean responsive design with tightened proportional spacing
 * - Framer Motion micro-interactions on social icons and scroll to top button
 */
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand Info & Social Media Links */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-brand" onClick={scrollToTop}>
              <BrandLogo size="compact" showReloadHint={false} />
            </Link>
            
            <p className="footer-description">
              Helping businesses grow through creative, data-backed digital marketing strategies.
            </p>

            <div className="social-links">
              {[
                { icon: <FiInstagram />, href: 'https://instagram.com', label: 'Instagram' },
                { icon: <FiLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: <FiFacebook />, href: 'https://facebook.com', label: 'Facebook' },
                { icon: <FiTwitter />, href: 'https://twitter.com', label: 'Twitter' }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-btn" 
                  aria-label={social.label}
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (Company) */}
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services Offered */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">SEO Optimization</Link></li>
              <li><Link to="/services">Social Media</Link></li>
              <li><Link to="/services">Content Strategy</Link></li>
              <li><Link to="/services">Paid Advertising</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact-items">
              <p className="footer-contact-item">
                <FiMail className="footer-item-icon" />
                <a href="mailto:hello@digitalmarketing.com">hello@digitalmarketing.com</a>
              </p>
              <p className="footer-contact-item">
                <FiPhone className="footer-item-icon" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </p>
              <p className="footer-contact-item">
                <FiMapPin className="footer-item-icon" />
                <span>Bangalore / Mumbai, India</span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar with Copyright & Scroll to Top */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © 2026 Digital Marketing. All Rights Reserved.
          </p>
          <motion.button 
            type="button" 
            onClick={scrollToTop} 
            className="scroll-top-btn"
            aria-label="Scroll to top"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to top</span>
            <FiArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

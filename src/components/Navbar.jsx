import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX, FiTrendingUp, FiRefreshCw, FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

import BrandLogo from './BrandLogo';

/**
 * Navbar Component
 * 
 * Interactive Concepts:
 * - Glassy Frosted Navigation Bar with island pill navigation
 * - Light / Dark Mode Toggle Button with smooth icon animations
 * - Full-page reload with custom animated loading curtain when clicking the top-left brand
 * - Framer Motion micro-interactions on links, theme toggle, and buttons
 */
function Navbar({ theme = 'light', toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReloading, setIsReloading] = useState(false);
  const navRef = useRef(null);

  // GSAP animation on mount with StrictMode cleanup
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(navRef.current,
        { y: -15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
      );
    });
    return () => ctx.revert();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Full page reload with smooth animated transition
  const handleBrandReload = (e) => {
    e.preventDefault();
    setIsReloading(true);
    closeMenu();

    // After animation displays, perform complete browser reload
    setTimeout(() => {
      window.location.reload();
    }, 700);
  };

  return (
    <>
      {/* Full-Page Reload Animation Overlay */}
      <AnimatePresence>
        {isReloading && (
          <motion.div
            className="full-reload-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="reload-card"
              initial={{ scale: 0.8, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="reload-icon-container">
                <motion.div
                  className="reload-icon"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 0.75, ease: "linear" }}
                >
                  <FiRefreshCw />
                </motion.div>
                <div className="reload-pulse-ring"></div>
              </div>
              <h3 className="reload-title">Reloading RVCanvas</h3>
              <p className="reload-sub">Refreshing assets, styles & components...</p>
              <div className="reload-progress-bar">
                <motion.div
                  className="reload-progress-fill"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.65, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glassy Attractive Navigation Bar */}
      <header className="navbar-wrapper glassy-navbar" ref={navRef}>
        <nav className="navbar container">
          {/* Brand with animated full-page reload */}
          <motion.a
            href="#hero"
            className="navbar-brand"
            onClick={handleBrandReload}
            title="Click RVCanvas to reload page with animation"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
          >
            <BrandLogo showReloadHint={true} />
          </motion.a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links desktop-nav">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* Action Button & Theme Toggle (Desktop) */}
          <div className="nav-cta-wrapper desktop-nav">
            {/* Interactive Dark / Light Theme Toggle */}
            <motion.button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
              title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ y: -8, opacity: 0, rotate: -30 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 8, opacity: 0, rotate: 30 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  {theme === 'dark' ? (
                    <FiSun className="theme-icon sun" />
                  ) : (
                    <FiMoon className="theme-icon moon" />
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            {/* Primary Get Started Button */}
            <motion.a
              href="#contact"
              className="btn-primary nav-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Hamburger Icon Button for Mobile */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>

        {/* Mobile Drawer Navigation */}
        <div className={`mobile-nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><a href="#hero" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#products" onClick={closeMenu}>Products</a></li>
            <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>

          {/* Mobile Theme Toggle Row */}
          <div className="mobile-theme-row">
            <div className="mobile-theme-label">
              {theme === 'dark' ? (
                <FiMoon className="theme-icon moon" />
              ) : (
                <FiSun className="theme-icon sun" />
              )}
              <span>{theme === 'dark' ? 'Dark Theme' : 'Light Theme'}</span>
            </div>
            <button
              type="button"
              className="theme-toggle-btn mobile-theme-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === 'dark' ? <FiSun className="theme-icon sun" /> : <FiMoon className="theme-icon moon" />}
            </button>
          </div>

          <div className="mobile-cta">
            <a href="#contact" className="btn-primary" onClick={closeMenu}>
              Get Started
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;

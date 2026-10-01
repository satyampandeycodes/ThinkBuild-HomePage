import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiRefreshCw, FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import BrandLogo from './BrandLogo';

/**
 * Navbar Component
 * 
 * Interactive Concepts:
 * - Multi-page navigation with active route highlights
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
    setIsReloading(true);
    closeMenu();

    setTimeout(() => {
      window.location.href = '/';
      window.location.reload();
    }, 650);
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
              <h3 className="reload-title">Reloading Digital Marketing</h3>
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
          <Link 
            to="/" 
            className="navbar-brand" 
            onClick={handleBrandReload}
            title="Click Digital Marketing to reload page with animation"
          >
            <BrandLogo showReloadHint={true} />
          </Link>

          {/* Desktop Multi-Page Navigation Links */}
          <ul className="nav-links desktop-nav">
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                Contact
              </NavLink>
            </li>
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
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className="btn-primary nav-btn">
                Get Started
              </Link>
            </motion.div>
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
            <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
            <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
            <li><NavLink to="/products" onClick={closeMenu}>Products</NavLink></li>
            <li><NavLink to="/faq" onClick={closeMenu}>FAQ</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
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
            <Link to="/contact" className="btn-primary" onClick={closeMenu}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Independent Multi-Page Views
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';

import './App.css';

/**
 * Main App Component
 * 
 * Architecture:
 * - Multi-Page Client-Side Routing with React Router
 * - Independent pages for Home, About, Services, Products, FAQ, and Contact
 * - Global Theme state (Light & Dark Mode) with localStorage persistence
 * - ScrollToTop on every navigation
 */
function App() {
  // Theme state: defaults to saved user preference or system theme or 'light'
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch (e) {
      // Fallback if localStorage or matchMedia is unavailable
    }
    return 'light';
  });

  // Keep data-theme on <html> and localStorage in sync whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {}
  }, [theme]);

  // Toggle function passed down to Navbar
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <ScrollToTop />
      <div className={`app-wrapper theme-${theme}`}>
        {/* Sticky Navigation Bar with Multi-Page Links & Theme Toggle */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* Multi-Page Route Outlet */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Agency Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

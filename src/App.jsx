import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

/**
 * Main App Component
 * 
 * Beginner React Concepts:
 * - Root Component that combines all independent section components
 * - Clean, modular project structure
 * - Follows standard single-page website architecture
 * - Manages Theme State (Light & Dark Mode) with localStorage persistence
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
    <div className={`app-wrapper theme-${theme}`}>
      {/* 1. Sticky Navigation Bar with Theme Toggle */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Page Sections */}
      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Us Section */}
        <About />

        {/* 4. Services Section */}
        <Services />

        {/* 5. Products Section */}
        <Products />

        {/* 6. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 7. FAQ Accordion Section */}
        <FAQ />

        {/* 8. Requirement / Contact Form Section */}
        <Contact />
      </main>

      {/* 9. Dark Agency Footer */}
      <Footer />
    </div>
  );
}

export default App;

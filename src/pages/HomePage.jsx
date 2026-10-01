import React from 'react';
import Hero from '../components/Hero';

/**
 * HomePage Component
 * Dedicated landing screen containing only the Hero section.
 */
function HomePage() {
  return (
    <div className="page-view home-page-view">
      <Hero />
    </div>
  );
}

export default HomePage;

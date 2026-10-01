import React from 'react';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';

/**
 * AboutPage Component
 * Dedicated page for About Us and Why Choose Us.
 */
function AboutPage() {
  return (
    <div className="page-view about-page-view">
      <About />
      <WhyChooseUs />
    </div>
  );
}

export default AboutPage;

import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * FAQ Component
 * 
 * Interactive Concepts Used:
 * - React useState: Tracks which FAQ accordion is active
 * - Framer Motion AnimatePresence: Animates the accordion height smoothly on open and close
 */
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What is digital marketing?',
      answer: 'Digital marketing refers to the practice of promoting products, brands, or services using internet-connected technologies and digital channels such as search engines, social media platforms, email, and websites.'
    },
    {
      id: 2,
      question: 'Why does my business need digital marketing?',
      answer: 'Modern consumers research and purchase products online. Digital marketing enables you to target the exact audience interested in your products, track measurable results in real time, and scale your brand far more cost-effectively than traditional offline marketing.'
    },
    {
      id: 3,
      question: 'How can SEO help my business?',
      answer: 'SEO (Search Engine Optimization) optimizes your website structure and content so search engines like Google rank it higher in search results. Higher rankings bring organic, unpaid, and high-intent visitors who are actively looking for the services you offer.'
    },
    {
      id: 4,
      question: 'How long does digital marketing take to show results?',
      answer: 'Paid advertising (like Google Ads or Meta Ads) can produce immediate leads within days. Organic channels like SEO and content marketing typically take 3 to 6 months to establish domain authority and deliver sustained, long-term returns.'
    },
    {
      id: 5,
      question: 'Do you provide social media marketing?',
      answer: 'Yes! We create end-to-end social media strategies including content calendar planning, custom graphic design, engaging copywriting, audience interaction, and targeted paid campaigns across Instagram, LinkedIn, Facebook, and Twitter/X.'
    },
    {
      id: 6,
      question: 'How can I get started?',
      answer: 'Getting started is simple! Fill out our requirement form in the contact section below with your business details, or reach out to us via email. Our strategy team will review your needs and schedule an initial consultation call.'
    }
  ];

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find clear answers to common questions about our digital marketing processes and strategies.
          </p>
        </motion.div>

        {/* Accordion List Container */}
        <div className="faq-accordion-container">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div 
                key={faq.id} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                {/* Accordion Header / Question Bar */}
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">
                    <span className="faq-number">0{index + 1}.</span> {faq.question}
                  </span>
                  
                  {/* Plus / Minus Indicator with rotation */}
                  <motion.span 
                    className="faq-icon-indicator"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </motion.span>
                </button>

                {/* Smooth Animated Accordion Panel with AnimatePresence */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      className="faq-answer-panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="faq-answer-content">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

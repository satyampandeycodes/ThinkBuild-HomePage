import React from 'react';

/**
 * BrandLogo Component
 * Modern Digital Marketing Agency emblem combining a gradient growth vector with clean typography.
 */
function BrandLogo({ size = 'normal', showReloadHint = false }) {
  return (
    <div className={`brand-logo-container ${size}`}>
      <div className="brand-logo-icon-wrap">
        <svg 
          className="brand-logo-svg" 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="brandLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ea580c" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
            <linearGradient id="brandSparkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#ffedd5" />
            </linearGradient>
          </defs>
          
          {/* Squircle Background Base */}
          <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#brandLogoGradient)" />
          
          {/* Dynamic Growth Apex & Interconnected Pulse Lines */}
          <path 
            d="M8.5 19.5L14 14L18 17.5L23.5 11.5M23.5 11.5H19M23.5 11.5V16" 
            stroke="url(#brandSparkGradient)" 
            strokeWidth="2.4" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          {/* Subtle node accent dots */}
          <circle cx="8.5" cy="19.5" r="1.5" fill="#ffffff" />
          <circle cx="14" cy="14" r="1.5" fill="#ffffff" />
          <circle cx="18" cy="17.5" r="1.5" fill="#ffffff" />
          <circle cx="23.5" cy="11.5" r="2.2" fill="#ffffff" />
        </svg>
      </div>

      <span className="brand-text">
        Digital<span className="brand-gradient">Marketing</span>
      </span>

      {showReloadHint && (
        <span className="brand-reload-hint" title="Click to reload page">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10"></polyline>
            <polyline points="1 20 1 14 7 14"></polyline>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
          </svg>
        </span>
      )}
    </div>
  );
}

export default BrandLogo;

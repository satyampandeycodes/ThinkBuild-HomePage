import React from 'react';
import logoImg from '../assets/rvcanvas-logo.png';

/**
 * BrandLogo Component
 * Official RVCanvas emblem and modern brand typography.
 */
function BrandLogo({ size = 'normal', showReloadHint = false }) {
  return (
    <div className={`brand-logo-container ${size}`}>
      <div className="brand-logo-icon-wrap">
        <img 
          src={logoImg} 
          alt="RVCanvas Logo" 
          className="brand-logo-img" 
        />
      </div>

      <span className="brand-text">
        RV<span className="brand-gradient">Canvas</span>
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

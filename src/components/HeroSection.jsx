import React from 'react';
import { useNavigate } from 'react-router-dom';
import PixelLayout from './PixelLayout';
import PixelButton from './PixelButton';
import './HeroSection.css';

/**
 * HeroSection - Main hero/landing section
 * Introduces the portfolio with technical content
 */
const HeroSection = React.memo(() => {
  const navigate = useNavigate();

  return (
    <PixelLayout variant="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="hero-title__line1">PORTFOLIO</span>
            <span className="hero-title__line2">ENGINEER</span>
          </h1>
          <p className="hero-subtitle">
            Specialized in rendering, performance optimization, and systems thinking.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat__label">Focus:</span>
              <span className="hero-stat__value">Graphics & Rendering</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat__label">Expertise:</span>
              <span className="hero-stat__value">Performance Critical Systems</span>
            </div>
          </div>
        </div>

        <div className="hero-actions">
          <PixelButton variant="primary" onClick={() => navigate('/projects')}>
            View Projects
          </PixelButton>
          <PixelButton variant="secondary" href="https://github.com">
            GitHub
          </PixelButton>
        </div>
      </div>

    </PixelLayout>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;

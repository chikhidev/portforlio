import React from "react";
import { useNavigate } from "react-router-dom";
import PixelLayout from "./PixelLayout";
import PixelButton from "./PixelButton";
import "./HeroSection.css";

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
            <span className="hero-title__line1 bg-yellow">ABDERRAHIM CHIKHI</span>
          </h1>
          <p className="hero-subtitle">
            Software Engineer with strong expertise in backend engineering, systems programming, optimizing performance, and solving complex computational problems. Experienced in full-stack web development,
            low-level, programming, Passionate about building reliable, efficient, and maintainable software for real-world applications
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat__label">Focus:</span>
              <span className="hero-stat__value">Performance Optimization, Backend Engineering, AI Engineering</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat__label">Expertise:</span>
              <span className="hero-stat__value">
                Performance Critical Systems
              </span>
            </div>
          </div>
        </div>

        <div className="hero-actions">
          <PixelButton variant="primary" onClick={() => navigate("/projects")}>
            View Projects
          </PixelButton>
          <PixelButton variant="secondary" href="https://github.com/chikhidev">
            <img id="github-avatar" src="https://avatars.githubusercontent.com/u/126016947?v=4" />
            GitHub
          </PixelButton>
        </div>
      </div>
    </PixelLayout>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;

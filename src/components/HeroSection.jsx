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
            <span className="hero-title__line1">
              Hi There!
            </span>
          </h1>
          <p className="hero-subtitle">
            I' am so glad to introduce myself, my name is Abderrahim Chikhi
          </p>
          <p className="hero-subtitle">
            Software Engineer with strong expertise in backend engineering,
            systems programming, optimizing performance, and solving complex
            computational problems. Experienced in full-stack web development,
            low-level, programming, Passionate about building reliable,
            efficient, and maintainable software for real-world applications
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat__label">Focus:</span>
              <span className="hero-stat__value">
                Performance Optimization, Backend Engineering, AI Engineering
              </span>
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
          <PixelButton
            variant="primary"
            href="https://drive.google.com/file/d/1K4NcmO28kPVlf_8NQdcTjT69Fd27CRAS/view?usp=sharing"
          >
            <span className="download-icon">
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 21H21M12 3V17M12 17L19 10M12 17L5 10"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Download Resume
          </PixelButton>
          <PixelButton variant="secondary" href="https://github.com/chikhidev">
            GitHub
          </PixelButton>
        </div>
      </div>
    </PixelLayout>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;

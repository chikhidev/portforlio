import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProjectsGrid from '../components/ProjectsGrid';
import SkillsPanel from '../components/SkillsPanel';
import Footer from '../components/Footer';

/**
 * HomePage - Main landing page with hero, projects preview, and skills
 */
const HomePage = React.memo(() => {
  const navigate = useNavigate();

  const handleViewProjects = () => {
    navigate('/projects');
  };

  return (
    <>
      <HeroSection onViewProjects={handleViewProjects} />
      <ProjectsGrid onViewAll={handleViewProjects} />
      <SkillsPanel />
      <Footer />
    </>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PixelCard from './PixelCard';
import PixelLayout from './PixelLayout';
import PixelButton from './PixelButton';
import { projects as allProjects } from '../data/projectsData';
import './ProjectsGrid.css';

/**
 * ProjectsGrid - Showcase of featured portfolio projects
 * Shows limited projects with "View All" link
 */
const ProjectsGrid = React.memo(() => {
  const navigate = useNavigate();
  // Show only first 6 projects as preview
  const featuredProjects = allProjects.slice(0, 6);

  return (
    <section className="projects-section">
      <PixelLayout>
        <div className="projects-header">
          <h2 className="section-title">Featured Projects</h2>
          <PixelButton variant="secondary" onClick={() => navigate('/projects')}>
            View All Projects
          </PixelButton>
        </div>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.slug}`}
              className="project-card-link"
            >
              <PixelCard
                title={project.title}
                variant="interactive"
              >
                <p>{project.shortDescription}</p>
                <div className="project-tags">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </PixelCard>
            </Link>
          ))}
        </div>
      </PixelLayout>
    </section>
  );
});

ProjectsGrid.displayName = 'ProjectsGrid';

export default ProjectsGrid;

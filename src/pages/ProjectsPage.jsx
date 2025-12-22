import React from 'react';
import { Link } from 'react-router-dom';
import PixelLayout from '../components/PixelLayout';
import PixelCard from '../components/PixelCard';
import PixelButton from '../components/PixelButton';
import { projects, categoryNames, projectCategories } from '../data/projectsData';
import './ProjectsPage.css';

/**
 * ProjectsPage - Showcase all projects organized by category
 */
const ProjectsPage = React.memo(() => {
  // Group projects by category
  const projectsByCategory = Object.values(projectCategories).reduce((acc, category) => {
    acc[category] = projects.filter((p) => p.category === category);
    return acc;
  }, {});

  return (
    <div className="projects-page">
      <PixelLayout variant="default">
        <div className="projects-page__header">
          
          <h1 className="projects-page__title">Portfolio Projects</h1>
          <p className="projects-page__subtitle">
            A collection of systems, graphics, web, and foundational projects
          </p>
        </div>
        <div>
            <Link to="/" className="">
            <PixelButton variant="secondary">← Home</PixelButton>
          </Link>
        </div>
      </PixelLayout>

      {Object.entries(projectsByCategory).map(([category, categoryProjects]) => (
        <section key={category} className="projects-category">
          <PixelLayout variant="default">
            <h2 className="projects-category__title">
              {categoryNames[category]}
            </h2>

            <div className="projects-category__grid">
              {categoryProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/project/${project.slug}`}
                  className="project-card-link"
                >
                  <PixelCard
                    title={project.title}
                    variant="interactive"
                    className="project-list-card"
                  >
                    <p className="project-list-card__description">
                      {project.shortDescription}
                    </p>

                    <div className="project-list-card__tags">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="project-list-card__tag">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="project-list-card__tag project-list-card__tag--more">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {project.year && (
                      <div className="project-list-card__meta">
                        {project.year}
                      </div>
                    )}

                    <div className="project-list-card__cta">
                      <PixelButton variant="secondary">View Details</PixelButton>
                    </div>
                  </PixelCard>
                </Link>
              ))}
            </div>
          </PixelLayout>
        </section>
      ))}
    </div>
  );
});

ProjectsPage.displayName = 'ProjectsPage';

export default ProjectsPage;

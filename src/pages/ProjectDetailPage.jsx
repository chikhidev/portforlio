import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import PixelLayout from '../components/PixelLayout';
import PixelButton from '../components/PixelButton';
import PixelCard from '../components/PixelCard';
import { getProjectBySlug, categoryNames } from '../data/projectsData';
import './ProjectDetailPage.css';

/**
 * ProjectDetailPage - Detailed view of individual project
 */
const ProjectDetailPage = React.memo(() => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="project-detail-page">
        <PixelLayout>
          <div className="project-not-found">
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist.</p>
            <Link to="/projects">
              <PixelButton variant="primary">Back to Projects</PixelButton>
            </Link>
          </div>
        </PixelLayout>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      {/* Header Section */}
      <section className="project-detail__header">
        <PixelLayout variant="default">
          <button className="project-detail__back-button" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <h1 className="project-detail__title">{project.title}</h1>
          <p className="project-detail__category">
            {categoryNames[project.category]}
          </p>
        </PixelLayout>
      </section>

      {/* Main Content */}
      <section className="project-detail__content">
        <PixelLayout variant="default">
          <div className="project-detail__grid">
            {/* Left Column - Main Content */}
            <div className="project-detail__main">
              {/* Description */}
              <PixelCard variant="elevated" className="project-detail__card">
                <div className="project-detail__description">
                  {project.longDescription.split('\n\n').map((paragraph, idx) => (
                    paragraph.startsWith('## ') ? (
                      <h3 key={idx} className="project-detail__section-title">
                        {paragraph.replace('## ', '')}
                      </h3>
                    ) : paragraph.startsWith('- ') ? (
                      <ul key={idx} className="project-detail__list">
                        {paragraph.split('\n').map((item, itemIdx) => (
                          <li key={itemIdx}>{item.replace('- ', '')}</li>
                        ))}
                      </ul>
                    ) : (
                      <p key={idx} className="project-detail__paragraph">
                        {paragraph}
                      </p>
                    )
                  ))}
                </div>
              </PixelCard>
            </div>

            {/* Right Column - Metadata */}
            <aside className="project-detail__sidebar">
              {/* Project Info Card */}
              <PixelCard title="Project Info" variant="elevated">
                <div className="project-detail__info-item">
                  <span className="project-detail__info-label">Status:</span>
                  <span className={`project-detail__info-value project-detail__status-${project.status}`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>

                {project.year && (
                  <div className="project-detail__info-item">
                    <span className="project-detail__info-label">Year:</span>
                    <span className="project-detail__info-value">{project.year}</span>
                  </div>
                )}
              </PixelCard>

              {/* Technologies Card */}
              <PixelCard title="Technologies" variant="elevated">
                <div className="project-detail__tech-list">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-detail__tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </PixelCard>

              {/* Skills Card */}
              <PixelCard title="Skills Demonstrated" variant="elevated">
                <div className="project-detail__skills-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-detail__skill-item">
                      {tag}
                    </span>
                  ))}
                </div>
              </PixelCard>

              {/* Actions */}
              <div className="project-detail__actions">
                <Link to="/projects">
                  <PixelButton variant="primary">All Projects</PixelButton>
                </Link>
              </div>
            </aside>
          </div>
        </PixelLayout>
      </section>
    </div>
  );
});

ProjectDetailPage.displayName = 'ProjectDetailPage';

export default ProjectDetailPage;

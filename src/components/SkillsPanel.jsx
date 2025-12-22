import React from 'react';
import PixelCard from './PixelCard';
import PixelLayout from './PixelLayout';
import './SkillsPanel.css';

/**
 * SkillsPanel - Technical skills and expertise areas
 */
const SkillsPanel = React.memo(() => {
  const skillCategories = [
    {
      id: 1,
      title: 'Rendering',
      skills: ['WebGL', 'GLSL/HLSL', 'Real-Time Graphics', 'Shader Optimization'],
    },
    {
      id: 2,
      title: 'Performance',
      skills: ['Profiling & Benchmarking', 'Memory Optimization', 'CPU/GPU Tuning', 'Caching Strategies'],
    },
    {
      id: 3,
      title: 'Systems',
      skills: ['Architecture Design', 'C++', 'Multithreading', 'Memory Management'],
    },
    {
      id: 4,
      title: 'Development',
      skills: ['React', 'TypeScript', 'Web APIs', 'Build Systems'],
    },
  ];

  return (
    <section className="skills-section">
      <PixelLayout>
        <h2 className="section-title">Core Competencies</h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <PixelCard key={category.id} title={category.title} variant="elevated">
              <ul className="skills-list">
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </PixelCard>
          ))}
        </div>
      </PixelLayout>
    </section>
  );
});

SkillsPanel.displayName = 'SkillsPanel';

export default SkillsPanel;

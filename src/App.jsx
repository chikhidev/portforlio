import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import Footer from './components/Footer';
import './App.css';

/**
 * App - Root component with routing
 * Memoized to prevent unnecessary re-renders
 */
const App = React.memo(() => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:slug" element={<ProjectDetailPage />} />
          <Route path="*" element={<div className="app-404">Page not found</div>} />
        </Routes>
        {/* Footer is conditionally shown on all pages except detail pages */}
      </div>
    </Router>
  );
});

App.displayName = 'App';

export default App;

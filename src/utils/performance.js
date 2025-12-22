/**
 * Performance utilities and monitoring
 * Zero-overhead performance tracking
 */

/**
 * Mark performance checkpoint
 * Only logs in development
 */
export const markPerformance = (label) => {
  if (process.env.NODE_ENV === 'development' && window.performance) {
    window.performance.mark(label);
  }
};

/**
 * Measure performance between two marks
 * Only logs in development
 */
export const measurePerformance = (label, startMark, endMark) => {
  if (process.env.NODE_ENV === 'development' && window.performance) {
    try {
      window.performance.measure(label, startMark, endMark);
      const measure = window.performance.getEntriesByName(label)[0];
      console.log(`Performance: ${label} - ${measure.duration.toFixed(2)}ms`);
    } catch (e) {
      // Silently fail in development
    }
  }
};

/**
 * Lazy load a component for code splitting
 */
export const lazyLoadComponent = (importFunc, fallback = null) => {
  return React.lazy(importFunc);
};

/**
 * Debounce function for event handlers
 */
export const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function for frequent events
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

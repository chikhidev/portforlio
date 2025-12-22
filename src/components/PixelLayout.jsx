import React from 'react';
import './PixelLayout.css';

/**
 * PixelLayout - Core layout component
 * Handles grid, spacing, and pixel-aligned layouts
 * Memoized to prevent unnecessary re-renders
 */
const PixelLayout = React.memo(({ children, variant = 'default' }) => {
  return (
    <div className={`pixel-layout pixel-layout--${variant}`}>
      {children}
    </div>
  );
});

PixelLayout.displayName = 'PixelLayout';

export default PixelLayout;

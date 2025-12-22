import React from 'react';
import './PixelCard.css';

/**
 * PixelCard - Reusable card component
 * Used for projects, skills, and content sections
 * Memoized with stable props to prevent unnecessary re-renders
 */
const PixelCard = React.memo(({
  title,
  children,
  className = '',
  onClick,
  href,
  variant = 'default',
  interactive = false,
}) => {
  const tag = href ? 'a' : 'div';
  const Tag = tag;

  const props = {
    className: `pixel-card pixel-card--${variant} ${interactive ? 'pixel-card--interactive' : ''} ${className}`,
  };

  if (href) {
    props.href = href;
    props.target = '_blank';
    props.rel = 'noopener noreferrer';
  }

  if (onClick) {
    props.onClick = onClick;
  }

  return (
    <Tag {...props}>
      {title && <h3 className="pixel-card__title">{title}</h3>}
      <div className="pixel-card__content">{children}</div>
    </Tag>
  );
});

PixelCard.displayName = 'PixelCard';

export default PixelCard;

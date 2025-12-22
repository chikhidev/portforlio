import React from 'react';
import './PixelButton.css';

/**
 * PixelButton - Minecraft-inspired button component
 * Memoized to prevent unnecessary re-renders
 */
const PixelButton = React.memo(({
  children,
  onClick,
  href,
  variant = 'default',
  disabled = false,
  className = '',
  type = 'button',
  ...props
}) => {
  const tag = href ? 'a' : 'button';
  const Tag = tag;

  const buttonProps = {
    className: `pixel-button pixel-button--${variant} ${className}`,
    disabled: !href && disabled,
    type: !href ? type : undefined,
    ...props,
  };

  if (href) {
    buttonProps.href = href;
    buttonProps.target = '_blank';
    buttonProps.rel = 'noopener noreferrer';
  } else {
    buttonProps.onClick = onClick;
  }

  return <Tag {...buttonProps}>{children}</Tag>;
});

PixelButton.displayName = 'PixelButton';

export default PixelButton;

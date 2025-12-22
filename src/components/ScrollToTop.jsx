import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop - Scrolls page to top on route change
 * Memoized for performance
 */
const ScrollToTop = React.memo(() => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
});

ScrollToTop.displayName = 'ScrollToTop';

export default ScrollToTop;

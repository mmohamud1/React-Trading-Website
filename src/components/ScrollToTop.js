import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Simple function to make sure page is at top 
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

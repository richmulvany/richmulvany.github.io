import { useEffect } from 'react';
import useMediaQuery from './useMediaQuery';

/**
 * Unified scroll listener.
 * Uses window scroll on mobile and container scroll on desktop.
 */
export default function useScrollSource(callback) {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    const target = isDesktop
      ? document.getElementById('scroll-container')
      : window;

    if (!target) return;

    const handleScroll = () => {
      const scrollTop =
        target === window ? window.scrollY : target.scrollTop;

      callback(scrollTop);
    };

    target.addEventListener('scroll', handleScroll);

    return () => {
      target.removeEventListener('scroll', handleScroll);
    };
  }, [isDesktop, callback]);
}
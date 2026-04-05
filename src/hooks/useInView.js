import { useEffect, useState } from 'react';

/**
 * Intersection Observer hook.
 * Returns whether the referenced element is in view.
 */
export default function useInView(ref, threshold = 0.3) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold,
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold]);

  return inView;
}

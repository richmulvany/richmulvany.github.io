import { useState, useEffect, useRef } from 'react';

/**
 * Hook to calculate how many items fit in a container
 * and manage expanded/collapsed state dynamically.
 */
export default function useVisibleItems(items, expanded) {
  const containerRef = useRef(null);
  const sidebarRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(items.length);

  // Measure visible items based on container height
  const measure = () => {
    if (!sidebarRef.current || !containerRef.current) return;

    const sidebarHeight = sidebarRef.current.clientHeight;
    const children = Array.from(containerRef.current.children);
    let totalHeight = 0;
    let count = 0;
    const reservedHeight = 32; // space for +X or Show less button

    for (let child of children) {
      const style = window.getComputedStyle(child);
      const margin = parseFloat(style.marginTop) + parseFloat(style.marginBottom);
      const height = child.offsetHeight + margin;

      if (!expanded && totalHeight + height + reservedHeight > sidebarHeight) break;

      totalHeight += height;
      count++;
    }

    setVisibleCount(count);
  };

  // Observe sidebar resize and window resize
  useEffect(() => {
    measure();

    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(measure);
      if (sidebarRef.current) observer.observe(sidebarRef.current);
      window.addEventListener('resize', measure);

      return () => {
        observer.disconnect();
        window.removeEventListener('resize', measure);
      };
    } else {
      window.addEventListener('resize', measure);
      return () => window.removeEventListener('resize', measure);
    }
  }, [items.length, expanded]);

  return { containerRef, sidebarRef, visibleCount };
}
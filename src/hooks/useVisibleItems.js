import { useState, useEffect, useRef } from 'react';

export default function useVisibleItems(items, expanded) {
  const containerRef = useRef(null);
  const sidebarRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(items.length);

  const measure = () => {
    if (!sidebarRef.current || !containerRef.current) return;

    const sidebarHeight = sidebarRef.current.clientHeight;
    const children = Array.from(containerRef.current.children);

    let totalHeight = 0;
    let count = 0;
    const reservedHeight = 32;

    for (let child of children) {
      const style = window.getComputedStyle(child);
      const margin =
        parseFloat(style.marginTop) + parseFloat(style.marginBottom);

      const height = child.offsetHeight + margin;

      if (!expanded && totalHeight + height + reservedHeight > sidebarHeight) {
        break;
      }

      totalHeight += height;
      count++;
    }

    setVisibleCount(count);
  };

  useEffect(() => {
    measure();

    const resize = () => measure();

    const observer = new ResizeObserver(resize);
    if (sidebarRef.current) observer.observe(sidebarRef.current);

    window.addEventListener('resize', resize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resize);
    };
  }, [items.length, expanded]);

  return { containerRef, sidebarRef, visibleCount };
}
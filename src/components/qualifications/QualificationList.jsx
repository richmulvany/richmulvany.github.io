import { useState, useEffect, useRef } from 'react';
import { jobs } from '../../data/jobs';
import { degrees } from '../../data/degrees';
import { certificates } from '../../data/certificates';
import QualificationPill from './QualificationPill';

/**
 * QualificationList
 *
 * Displays a unified list of qualifications (jobs, degrees, and certificates)
 * as a series of QualificationPill components.
 *
 * The component detects vertical overflow within its container and, when content
 * exceeds the available space, initially truncates the list and displays a
 * "Show more" control with a gradient fade. Expanding the list enables scrolling
 * and smoothly scrolls to the bottom to reveal additional items.
 *
 * ResizeObserver and window resize events are used to dynamically recalculate
 * overflow, ensuring responsive behaviour across different screen sizes.
 */
export default function QualificationList() {
  const allQualifications = [
    ...jobs.map((j) => ({ ...j, type: 'job' })),
    ...degrees.map((d) => ({ ...d, type: 'degree' })),
    ...certificates.map((c) => ({ ...c, type: 'certificate' })),
  ];

  const [expanded, setExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);

  const containerRef = useRef(null);

  const checkOverflow = () => {
    const el = containerRef.current;
    if (!el) return;

    const isOverflowing = el.scrollHeight > el.clientHeight;
    setHasOverflow(isOverflowing);
  };

  useEffect(() => {
    checkOverflow();

    const observer = new ResizeObserver(checkOverflow);
    if (containerRef.current) observer.observe(containerRef.current);

    window.addEventListener('resize', checkOverflow);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkOverflow);
    };
  }, []);

  useEffect(() => {
    if (expanded && containerRef.current) {
      requestAnimationFrame(() => {
        containerRef.current.scrollTo({
          top: containerRef.current.scrollHeight,
          behavior: 'smooth',
        });
      });
    }
  }, [expanded]);

  return (
    <div className="flex flex-col h-full relative">
      {/* Content */}
      <div
        ref={containerRef}
        className={`
          flex flex-col
          ${expanded ? 'overflow-y-auto pb-12' : 'overflow-hidden'}
        `}
      >
        {allQualifications.map((q) => (
          <QualificationPill key={q.title} QualType={q.type} qualification={q} />
        ))}
      </div>

      {/* Show more only if needed AND not expanded */}
      {!expanded && hasOverflow && (
        <div className="absolute bottom-0 left-0 w-full">
          <div className="h-12 bg-gradient-to-t from-stone-100 to-transparent pointer-events-none" />
          <button
            onClick={() => setExpanded(true)}
            className="w-full text-sm text-gray-500 hover:text-orange-500 text-left bg-stone-100 py-2"
          >
            Show more ↓
          </button>
        </div>
      )}
    </div>
  );
}

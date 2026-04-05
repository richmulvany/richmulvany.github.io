import { useState, useEffect } from 'react';
import { jobs } from '../../data/jobs';
import { degrees } from '../../data/degrees';
import { certificates } from '../../data/certificates';
import QualificationPill from './QualificationPill';
import useVisibleItems from '../../hooks/useVisibleItems';

/**
 * Renders all qualifications grouped by type.
 * Collapses extra items into "+X more" if they overflow the sidebar.
 * Updates dynamically on window resize.
 * Smoothly scrolls when expanded.
 * Show less button pinned inside bottom margin.
 */
export default function QualificationList() {
  const allQualifications = [
    ...jobs.map((j) => ({ ...j, type: 'job' })),
    ...degrees.map((d) => ({ ...d, type: 'degree' })),
    ...certificates.map((c) => ({ ...c, type: 'certificate' })),
  ];

  const [expanded, setExpanded] = useState(false);

  const { containerRef, sidebarRef, visibleCount } = useVisibleItems(allQualifications, expanded);

  const visibleItems = expanded
    ? allQualifications
    : allQualifications.slice(0, visibleCount);

  const hiddenCount = allQualifications.length - visibleItems.length;

  // Scroll to bottom smoothly when expanding
  useEffect(() => {
    if (expanded && containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [expanded]);

  return (
    <div
      ref={sidebarRef}
      className="h-full flex flex-col overflow-hidden relative"
    >
      <div ref={containerRef} className={`flex flex-col overflow-auto ${expanded ? 'pb-10' : ''}`}>
        {visibleItems.map((q) => (
          <QualificationPill key={q.title} QualType={q.type} qualification={q} />
        ))}
      </div>

      {(hiddenCount > 0 || expanded) && (
        <div className="absolute bottom-0 left-0 w-full bg-stone-100 px-0 py-2 flex-shrink-0">
          {expanded ? (
            <button
              onClick={() => setExpanded(false)}
              className="text-sm text-gray-500 hover:text-gray-700 text-left w-full"
            >
              Show less
            </button>
          ) : (
            <button
              onClick={() => setExpanded(true)}
              className="text-sm text-gray-500 hover:text-gray-700 text-left w-full"
            >
              +{hiddenCount} more
            </button>
          )}
        </div>
      )}
    </div>
  );
}
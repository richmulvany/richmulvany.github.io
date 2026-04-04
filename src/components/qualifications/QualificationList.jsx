import { jobs } from '../../data/jobs';
import { degrees } from '../../data/degrees';
import { certificates } from '../../data/certificates';
import QualificationPill from './QualificationPill';

/**
 * Renders all qualifications grouped by type.
 */
export default function QualificationsList() {
  return (
    <div>
      {jobs.map((j) => (
        <QualificationPill key={j.title} QualType="job" qualification={j} />
      ))}

      {degrees.map((d) => (
        <QualificationPill key={d.title} QualType="degree" qualification={d} />
      ))}

      {certificates.map((c) => (
        <QualificationPill key={c.title} QualType="certificate" qualification={c} />
      ))}
    </div>
  );
}
import ProfileHeader from './ProfileHeader';
import QualificationsList from '../qualifications/QualificationList';

/**
 * Mobile header.
 * Contains profile summary and qualifications.
 */
export default function MobileHeader() {
  return (
    <div className="flex flex-col gap-4 sticky top-0">
      <ProfileHeader compact />

      <div className="ml-4">
        <QualificationsList />
      </div>
    </div>
  );
}
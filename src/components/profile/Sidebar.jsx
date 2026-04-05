import ProfileHeader from './ProfileHeader';
import QualificationList from '../qualifications/QualificationList';

/**
 * Sidebar component (desktop).
 * Displays profile information and qualifications.
 */
export default function Sidebar() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <ProfileHeader />
      <div className="flex-1 overflow-hidden">
        <QualificationList />
      </div>
    </div>
  );
}